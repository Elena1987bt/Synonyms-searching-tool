import { useState } from "react";
import LandingPage from "../components/LandingPage";
import SearchBar from "../components/SearchBar";
import Modal from "../components/Modal";
import { IoIosAddCircleOutline } from "react-icons/io";
import IntroText from "../components/IntroText";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    /*     <section
      style={backgroundImageStyle}
      className="relative bg-center h-screen bg-no-repeat bg-gray-700 bg-blend-multiply"
    >
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        {!openModal && <IntroText setOpenModal={setOpenModal} />}
        <SearchBar />
      </div>
      {!openModal && (
        <button
          onClick={() => setOpenModal(true)}
          className="absolute text-semibold bottom-8 left-8 text-white text-4xl lg:text-5xl transform transition duration-500 hover:scale-110 hover:cursor-pointer"
        >
          <IoIosAddCircleOutline />
        </button>
      )}
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </section> */

    <LandingPage>
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        {!openModal && <IntroText setOpenModal={setOpenModal} />}
        <SearchBar />
      </div>
      {!openModal && (
        <button
          onClick={() => setOpenModal(true)}
          className="absolute text-semibold bottom-8 left-8 text-white text-4xl lg:text-5xl transform transition duration-500 hover:scale-110 hover:cursor-pointer"
        >
          <IoIosAddCircleOutline />
        </button>
      )}
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </LandingPage>
  );
};

export default Home;
