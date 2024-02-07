import React from "react";
import Main from "../Main/Main.js";
import Ask from "../Ask/Ask.js";
import TheImage from "../TheImage/TheImage.js";
import './App.css';


class App extends React.Component {

  render() {
    return (
      <div class="containerStyle">
        <TheImage/>
        <Ask/>
        <Main/>
      </div>
      );
  }
}

export default App;