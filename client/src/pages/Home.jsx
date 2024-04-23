import { useState, useRef, useEffect } from "react";
import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import Modal from "../components/Modal";
import { IoIosAddCircleOutline } from "react-icons/io";
import IntroText from "../components/IntroText";
import Button from "../components/Button";
import DisplaySynonyms from "../components/DisplaySynonyms";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [activeSearch, setActiveSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const refTop = useRef(null);
  const refBottom = useRef(null);
  useEffect(() => {
    if (show || loading) {
      refBottom?.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [show, loading]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!activeSearch) return;
    setShow(true);

    setLoading(true);

    try {
      const response = await fetch(
        `http://localhost:8000/words/search?word=${activeSearch}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`);
      }
      let res = await response.json();

      setData(res?.result);
      setError(null);
      /*  setActiveSearch(" "); */
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <div ref={refTop} />
      <Container>
        <div className="px-4 mx-auto max-w-screen-xl  text-center py-24 lg:py-56">
          {!openModal && <IntroText setOpenModal={setOpenModal} />}
          <SearchBar
            activeSearch={activeSearch}
            setActiveSearch={setActiveSearch}
            onSubmit={handleSubmit}
            setShow={setShow}
          />
        </div>

        <Modal open={openModal} onClose={() => setOpenModal(false)} />

        {!openModal && (
          <Button
            setOpenModal={setOpenModal}
            setShow={setShow}
            setActiveSearch={setActiveSearch}
          >
            <IoIosAddCircleOutline />
          </Button>
        )}
      </Container>
      {show && (
        <DisplaySynonyms
          data={data}
          activeSearch={activeSearch}
          loading={loading}
        />
      )}
      <div ref={refBottom} />
    </div>
  );
};

export default Home;
