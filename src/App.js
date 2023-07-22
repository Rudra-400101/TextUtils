import "./App.css";
import Navbar from "./components/navbar";
import MainContent from "./components/mainContent";
import { useState } from "react";

function App() {
  const color = [
    {
      color: "black",
      background: "#f8f9fa",
    },
    {
      color: "black",
      background: "white",
    },
    {
      color: "black",
      background: "white",
      border: "2px solid black",
      borderRadius: "10px",
      padding: "5px",
      outline: "none",
      boxShadow: "2px 2px 5px black",
    },
    {
      modeName: "fa-solid fa-sun",
    },
  ];

  const [navbarColor, setNavbarColor] = useState(color[0]);
  const [mainContentColor, setMainContentColor] = useState(color[1]);
  const [textareaColor, SetTextareaColor] = useState(color[2]);
  const [themeMode, setThemeMode] = useState(color[3]);
  const changeColor = () => {
    if (navbarColor.color === "black") {
      setNavbarColor({
        color: "white",
        background: "black",
      });
      setMainContentColor({
        color: "white",
        background: "#000124",
    borderRadius: "3px",
      });
      SetTextareaColor({
        color: "white",
        background: "#201f1a",
        border: "2px solid #00ffff",
        borderRadius: "10px",
        padding: "5px",
        outline: "none",
        boxShadow: "2px 1.5px 4px #c38171",
      });
      setThemeMode({
        modeName: "fa-solid fa-moon",
      });
     

      document.body.style.background = "#000124";
    } else {
      setNavbarColor({
        color: "black",
        background: "#f8f9fa",
      });
      setMainContentColor({
        color: "black",
        background: "white",
    borderRadius: "3px",
      });
      SetTextareaColor({
        color: "black",
        background: "white",
        border: "2px solid blaCK",
        borderRadius: "10px",
        padding: "5px",
        outline: "none",
        boxShadow: "2px 2px 5px black",
      });
      setThemeMode({
        modeName: "fa-solid fa-sun",
      });
      document.body.style.background = "white";
    }
  };
  const blueTheme=()=>{
    setMainContentColor({
      color: "white",
      background: "#013940",
    boxShadow: "2px 2px 5px black",
    borderRadius: "3px",
    });
  SetTextareaColor({
    color: "white",
    background: "#4c6b9c",
    border: "2px solid #01818f",
    borderRadius: "10px",
    padding: "5px",
    outline: "none",
    boxShadow: "2px 2px 5px black",
  });
    document.body.style.background = "#01293d";
  }
  const liteBlackTheme=()=>{
    setMainContentColor({
      color: "white",
      background: "#6c757d",
    boxShadow: "2px 2px 10px #170029",
    borderRadius: "3px",
    });
  SetTextareaColor({
    color: "white",
    background: "#4a4052",
    border: "2px solid blaCK",
    borderRadius: "10px",
    padding: "5px",
    outline: "none",
    boxShadow: "2px 2px 5px black",
  });
    document.body.style.background = "#262626";
  }
  const greenTheme=()=>{
    setMainContentColor({
      color: "white",
      background: "#004a1e",
    boxShadow: "2px 2px 5px black",
    borderRadius: "3px",

    });
  SetTextareaColor({
    color: "white",
    background: "#4f8264",
    border: "2px solid #012e0b",
    borderRadius: "10px",
    padding: "5px",
    outline: "none",
    boxShadow: "2px 2px 5px black",
  });
    document.body.style.background = "#004a1e";
  }
  const redTheme=()=>{
    setMainContentColor({
      color: "white",
      background: "#780111",
    boxShadow: "2px 2px 5px black",
    borderRadius: "3px",
      });
  SetTextareaColor({
    color: "white",
    background: "#57020d",
    border: "2px solid #1a0002",
    borderRadius: "10px",
    padding: "5px",
    outline: "none",
    boxShadow: "2px 2px 5px black",
  });
    document.body.style.background = "#57020d";
  }
  return (
    <>
      <Navbar
        navbarColor={navbarColor}
        changeColor={changeColor}
        themeMode={themeMode}
        blueTheme={blueTheme}
        liteBlackTheme={liteBlackTheme}
        greenTheme={greenTheme}
        redTheme={redTheme}
      />
      <MainContent
        mainContentColor={mainContentColor}
        textareaColor={textareaColor}
        
      />
    </>
  );
}

export default App;
