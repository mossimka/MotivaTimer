import Styles from './StartButton.module.css'

const StartButton = ({ onClick, text }:  {onClick: () => void; text: string }) => {
  return (
    <button className={Styles.start_button} onClick={onClick}>
      {text}
    </button>
  )
}

export default StartButton
