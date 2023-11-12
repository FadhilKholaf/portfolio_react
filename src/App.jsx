import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import AboutMe from "./components/AboutMe";
import Profile from "./components/Profile";
import Carousel from "./components/Carousel";
import Background from "./assets/videos/background.mp4";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: "ease-in-out",
    });
    Aos.refresh();
  }, []);
  return (
    <>
      <video
        src={Background}
        autoPlay
        muted
        loop
        className="vw-100 vh-100 object-fit-fill position-absolute z-0 bg-blur"
      ></video>
      <section className="vh-100 container d-flex align-items-center">
        <div className="row row-cols-1 row-cols-lg-2 z-1 grid gap-5 gap-lg-0 d-flex justify-content-center">
          <div className="col">
            <Profile />
          </div>
          <div className="col row row-cols-1 px-4 grid gap-5 gap-lg-0 d-flex justify-content-center">
            <AboutMe />
            <Carousel />
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
