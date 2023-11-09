import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

const App = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <section className="vh-100">
      <div className="container row row-cols-2">
        <div className="col"></div>
        <div className="col row row-cols-1">
          <AboutMe />
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default App;
