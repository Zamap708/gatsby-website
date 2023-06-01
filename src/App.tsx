// import { useRef } from "react";
// import useScrollSnap from "react-use-scroll-snap";
import './App.css'
import Services from './services/Services'
import Hero from './hero/Hero'
import Team from './team/Team'
import Contact from './contact/Contact'
import Navbar from './navbar/Navbar'
import About from './about/about'
import ContactForm from './contactForm/ContactForm'
import { useState } from 'react'


function App() {
  // const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 250, delay: 0 });

  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(prevState => !prevState)
  }

  return (
    <div className='app'
      // ref={scrollRef}
    >
      <Navbar />
      <Hero handleClick={toggleModal} />
      <About />
      <div className="background-img">
      <Services />
      <Team />
      </div>
      <Contact />
      {showModal ? <ContactForm handleClick={toggleModal} /> : ""}
    </div>
  )
}

export default App
