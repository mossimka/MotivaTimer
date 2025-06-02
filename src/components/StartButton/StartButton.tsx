import React from 'react'
import Styles from './StartButton.module.css'

const StartButton = ({ onClick, text }) => {
  return (
    <button className={Styles.start_button} onClick={onClick}>
      {text}
    </button>
  )
}

export default StartButton
