import React from "react";
import bg from "../assets/book_1.avif";
import Navbar from "../components/Navbar";

const LandingPage = ({ children }) => {
  const backgroundImageStyle = {
    backgroundImage: `url("${bg}")`,
  };
  return (
    <section
      style={backgroundImageStyle}
      className=" bg-center min-h-screen  h-auto bg-fixed bg-gray-700 bg-blend-multiply"
    >
      <Navbar />
      {children}
    </section>
  );
};

export default LandingPage;
