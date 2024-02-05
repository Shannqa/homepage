import React, { useState } from "react";
import Header from "./Header.jsx";
import Introduction from "./Introduction.jsx";
import Projects from "./Projects.jsx";
import Footer from "./Footer.jsx";

import "./styles/main.css"

function App() {
  return  (
      <Fragment>
        <Header />
        <Introduction />
        <Projects />
        <Footer />
      </Fragment>
    )
}

export default App