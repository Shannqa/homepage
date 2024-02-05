import React, { useState } from "react";
import Introduction from "./components/Introduction.jsx";
import Projects from "./components/Projects.jsx";
import "./styles/index.css"

function App() {
  return  (
      <Fragment>
          <Introduction />
          <Projects />
      </Fragment>
    )
}

export default App