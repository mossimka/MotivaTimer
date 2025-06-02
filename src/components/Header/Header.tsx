import React from 'react'
import {images} from '../../../public/assets/images';
import Style from './Header.module.css'

const Header = () => {
  return (
    <header>
        <img src={images.logo} alt="Logo" className={Style.logo}></img>
        <h1>MotivaTimer</h1>
    </header>
  )
}

export default Header