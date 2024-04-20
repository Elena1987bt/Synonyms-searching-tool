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
      className="relative bg-center h-screen bg-no-repeat bg-gray-700 bg-blend-multiply"
    >
      <Navbar />
      {children}
    </section>
  );
};

export default LandingPage;
