import React from "react";
import Hero from "./components/Hero";
import Card from "./components/Card";
import About from "./components/About";

const HomeTutor = () => {
  return (
    <div className="w-full justify-center my-12">
      <Hero />
      <Card />
      <About />
    </div>
  );
};

export default HomeTutor;
