import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import SpiWheel from "react-spin-to-wheel/index";
import soundFile from "./assets/click2.m4a";
import finalSound from "./assets/final.mp3";

function App() {
  const [message, setMessage] = useState("Spin the Wheel");
  
  const segments = [
    { color: "pink", value: "pink" },
    { color: "white", value: "white" },
    { color: "black", value: "black" },
    { color: "brown", value: "brown" },
    { color: "red", value: "red" },
    { color: "orange", value: "orange" },
    { color: "yellow", value: "yellow" },
    { color: "lightgreen", value: "lightgreen" },
  ];

  const colorToMessage = {
    red: "Passion and Desire",
    pink: "Love and Compassion",
    lightgreen: "New Beginnings",
    white: "Purity and Perfection",
    black: "Death and Darkness",
    brown: "Sustainability and Dependability",
    orange: "Optimism and Enthusiasm",
    yellow: "Happiness and Sunshine",
  };

  const finalSoundRef = useRef(new Audio(finalSound));
  const soundRef = useRef(new Audio(soundFile));

  const FinalSound = () => {
    finalSoundRef.current.play();
  };

  const spinOutput = (result) => {
    console.log(result);
    FinalSound();
    setMessage(colorToMessage[result] || "Spin the Wheel");

    setTimeout(() => {
      setMessage("Spin the Wheel Again");
      //window.location.reload()
    }, 3000);
  };

  useEffect(() => {
    const spinbtn = document.querySelector(".spinBtn");

    const playsound = () => {
      soundRef.current.play();
    };

    spinbtn.addEventListener("click", playsound);

    return () => {
      spinbtn.removeEventListener("click", playsound);
    };
  }, []);

  return (
    <div className="container-fluid h-100 d-flex flex-column align-items-center justify-content-evenly maindiv">
      <h2 className="text-center mb-3 text-secondary text-uppercase fw-bolder">
        {message}
      </h2>
      <SpiWheel segments={segments} spinOutput={spinOutput} />
    </div>
  );
}

export default App;
