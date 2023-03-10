import React from 'react'
import vg from "../assets/2.webp";
import{AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
   <>
    <div className='home' id='home'>
        <main>
            <h1>Akshay choudhary</h1>
            <p>I am a fullstack devloper. i made this ui in react using html,css and javaScript</p>
        </main>
      
    </div>
    <div className="home2">
      <img src={vg} alt="graphics" />
      <div><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi debitis tempore culpa, eligendi ea laudantium quas blanditiis, accusantium aspernatur esse saepe incidunt magnam. Nulla voluptatibus expedita in atque asperiores?</p></div>
    </div>
    <div className="home3" id='about'>
      <div>
        <h1>About Me</h1>
        <p>my name is Akshay Choudhary and i am a full stack devloper. i am quite good in react and django .i also have a good knowlage of html,css  javaScript and python.this project i build in react</p>
      </div>
    </div>
    <div className="home4" id='brands'>
      <div>
        <h1>BRAND</h1>
        <article>
          <div style={{
            animationDelay:"0.3s"
          }}>
            <AiFillGoogleCircle/>
            <p>Google</p>

          </div>
          <div style={{
            animationDelay:"0.5s"
          }}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>

          </div>
          <div style={{
            animationDelay:"0.7s"
          }}>
            <AiFillYoutube/>
            <p>Youtube</p>

          </div>
          <div style={{
            animationDelay:"0.9s"
          }}>
            <AiFillInstagram/>
            <p>Insta</p>

          </div>
        </article>
      </div>
    </div>
   </>
  )
}

export default Home;