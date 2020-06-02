import React from "react";
import "./App.css";
import NasaInfo from "./components/NasaInfo";
import Header from "./components/Header";
import GlobalStyle from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header/>
      <p>
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀! */}
        
      </p>
      <NasaInfo/>
    </div>
  );
}

export default App;
