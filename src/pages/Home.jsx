import { useState } from "react";
import LandingPage from "../components/LandingPage";
import SearchBar from "../components/SearchBar";
import Modal from "../components/Modal";
import { IoIosAddCircleOutline } from "react-icons/io";
import IntroText from "../components/IntroText";
import Button from "../components/Button";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <LandingPage>
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        {!openModal && <IntroText setOpenModal={setOpenModal} />}
        <SearchBar />
      </div>
      {!openModal && (
        <Button setOpenModal={setOpenModal}>
          <IoIosAddCircleOutline />
        </Button>
      )}
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </LandingPage>
  );
};

export default Home;
