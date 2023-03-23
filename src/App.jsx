import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Quotes from "./component/Quotes/quotes";
import Header from "./component/Header/Header";

function App() {
   return (
      <div className="App">
         <Header></Header>
         <h1>amir</h1>
         <Quotes></Quotes>
      </div>
   );
}

export default App;
