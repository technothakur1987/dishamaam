import React, { useEffect, useState } from "react";
import "./App.css";
import SpiWheel from "react-spin-to-wheel/index";
import soundFile from ".././src/assets/click2.m4a";
import finalSound from ".././src/assets/final.mp3";

function App() {
  const [message, setMessage] = useState("Spin the Wheel");
  const segments = [
    {
      color: "pink",
      value: "pink",
    },
    {
      color: "white",
      value: "white",
    },
    {
      color: "black",
      value: "black",
    },
    {
      color: "brown",
      value: "brown",
    },
    {
      color: "red",
      value: "red",
    },
    {
      color: "orange",
      value: "orange",
    },
    {
      color: "yellow",
      value: "yellow",
    },
    {
      color: "lightgreen",
      value: "lightgreen",
    },
  ];
  const colorToMessage = {
    red: "Passion and Desire",
    pink: "love and compassion",
    lightgreen: "new beginnings ",
    white: "purity and perfection",
    black: "death and darkness",
    brown: "sustainability and dependability",
    orange: "optimism and enthusiasm",
    yellow: "happiness and sunshine",
  };

  const Finalsound = () => {
    // Add your play sound logic here
    console.log('Finalsound');
    const audio = new Audio(finalSound);
  audio.play();
  };
  
  const spinOutput = (result) => {
    console.log(result)
    Finalsound()
    setMessage(colorToMessage[result] || "Spin the Wheel");
    setTimeout(()=>{
      setMessage('Spin the Wheel Again')
    },3000)
  };
  
  useEffect(() => {
    let spinbtn = document.querySelector('.spinBtn');
    const playsound = () => {
      // Add your play sound logic here
      console.log('Playing sound');
      const audio = new Audio(soundFile);
    audio.play();
    };
    
    spinbtn.addEventListener('click', playsound);
  
    return () => {
      spinbtn.removeEventListener('click', playsound);
    };
  }, []);

  
  
  
  return (
    <>
    <div className=" container-fluid h-100 d-flex flex-column  align-items-center justify-content-evenly maindiv">
    <h2 className="text-center mb-3 text-secondary text-uppercase fw-bolder" >{message}</h2>
      <SpiWheel segments={segments} spinOutput={spinOutput} />
    </div>

    </>
  );
}

export default App;
