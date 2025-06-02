import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import StartButton from '../StartButton/StartButton';
import StylesButton from '../StartButton/StartButton.module.css';
import Styles from './Countdown.module.css';
import { useRef } from 'react';


const Countdown = () => {
  const location = useLocation();
  const { interval = 10, name = 'Default' } = location.state || {};

  const [remain, setRemain] = useState(interval);
  const [isRunning, setIsRunning] = useState(true);
  const [completedIntervals, setCompletedIntervals] = useState(0);

  const quotes= [
    { "quote": "You are stronger than you think." },
    { "quote": "Every second counts." },
    { "quote": "Push yourself. No one else will." },
    { "quote": "Make it happen." },
    { "quote": "Stay focused and never give up." },
    { "quote": "Discipline is doing it when you don't feel like it." },
    { "quote": "Believe you can and you're halfway there." },
    { "quote": "Progress, not perfection." },
    { "quote": "Great things take time." },
    { "quote": "Small steps every day." },
    { "quote": "Your only limit is you." },
    { "quote": "Don’t stop until you’re proud." },
    { "quote": "Start where you are. Use what you have. Do what you can." },
    { "quote": "Keep going. You’re getting there." },
    { "quote": "One day or day one. You decide." }
  ]

  const [quote] = useState(() => {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index].quote;
  });


  useEffect(() => {
    if (remain > 0 && isRunning) {
      const timer = setTimeout(() => {
        setRemain((prev: number) => prev - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
    if (remain === 0) {
      setCompletedIntervals((prev: number) => prev + 1);
      audioRef.current?.play();
    }
  }, [remain, isRunning]);

  const handleRestart = () => {
    setRemain(interval);
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleContinue = () => {
    setIsRunning(true);
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate('/main');
  };

  const progress = ((interval - remain) / interval) * 100;

  const audioRef = useRef<HTMLAudioElement | null>(null);
  



  return (
    <div className={Styles.countdown_box}>
      <div className={Styles.countdown_box_text}>
        <h2>There are still {remain} seconds for you - {name}!</h2>
        <h3>You have completed {completedIntervals} intervals!</h3>
        <h3>{quote}</h3>
      </div>
      <div>
        <h1>{remain}</h1>
      </div>
      <div className={Styles.progress_container}>
        <div className={Styles.progress_bar} style={{ width: `${progress}%` }}></div>
      </div>
      <StartButton onClick={handleRestart} text="Restart"/>
      <button onClick={isRunning ? handleStop : handleContinue} className={StylesButton.start_button}>
        {isRunning ? 'Stop' : 'Continue'}
      </button>
      <button onClick={goBack} className={StylesButton.start_button}>Back</button>

      <audio ref={audioRef} src="/sounds/key_drop.mp3" preload="auto" />
    </div>
  )
}

export default Countdown;
