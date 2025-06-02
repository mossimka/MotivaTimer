import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';


import Styles from './Main.module.css';
import StartButton from '../StartButton/StartButton';


const Main = () => {
  const [name, setName] = useState(() => {
    return localStorage.getItem("username") || "Chill Guy";
  });
  
  const intervals = [10, 20, 30, 60];
  const [active, setActive] = useState(1);  
  const [interval, setInterval] = useState(10);

  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/countdown', {
      state: {
      name,
      interval,
      },
    });
  };


  return (
    <div>
      <div className={Styles.input_box}>
        <h2>{name}</h2>
        <label>Set your name:</label>
        <input
          className={Styles.input_box_input}
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => {
            const newName = e.target.value;
            setName(newName);
            localStorage.setItem("username", newName);
          }}
        />
        <div className={Styles.choises}>
          {intervals.map((interval, index) => (
            <div
              key={index}
              className={`${Styles.choises_box} ${active == index + 1 ? Styles.active : ""}`}
              onClick={() => {setActive(index + 1); setInterval(interval)}}
            >
              <div className={Styles.choises_box_box}>
                <h3>{interval} s.</h3>
              </div>
            </div>
          ))}
        </div>
        <StartButton onClick={handleStart} text="Start" />
      </div>
    </div>
  )
}

export default Main;