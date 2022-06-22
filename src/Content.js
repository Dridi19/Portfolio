import React,{useEffect} from 'react'
import About from './About.js'
import Home from './Home.js'
import Projects from './Projects.js'
import Contact from './Contact.js'
import Aos from "aos";
import "aos/dist/aos.css"

export default function Content({activesection}) {

  useEffect(() => {
    Aos.init({duration:1000});
  }, []);
  function handlesection(section){
    activesection(section);
  }

  return (
    <div className='content' >
    <Home handlesection={handlesection} />
    <About  handlesection={handlesection} />
    <Projects handlesection={handlesection}  />
    <Contact handlesection={handlesection} />

    </div>
  )
}
