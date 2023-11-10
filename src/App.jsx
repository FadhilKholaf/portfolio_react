import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import AboutMe from "./components/AboutMe";
import Profile from "./components/Profile";
import Carousel from "./components/Carousel";

const App = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <section className="container vh-100 d-flex align-items-center">
      <div className="row row-cols-1 row-cols-lg-2">
        <div className="col">
          <Profile />
        </div>
        <div className="col row row-cols-1">
          <AboutMe />
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default App;
