import React from 'react'
// import { Link } from 'react-router-dom'
import{HashLink} from "react-router-hash-link";

const Header = () => {
  return (
    <>
      <nav>
        <h1>Akshay</h1>
        <main>
            <HashLink to={"/#home"}>home</HashLink>
            <HashLink to={"/contact"}>Contact</HashLink>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#brands"}>Brands</HashLink>
            <HashLink to={"/services"}>services</HashLink>
           
        </main>
        </nav>  
      
    </>
  )
}

export default Header
