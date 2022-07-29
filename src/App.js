import React,{useEffect,useState} from 'react'
import Top from './components/navbar/Top';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import About from './Pages/about/About.js'
import Home from './Pages/home/Home.js'
import Projects from './Pages/project/Projects.js'
import Contact from './Pages/contact/Contact.js'
import Aos from "aos";
import "aos/dist/aos.css"


function Content({activesection}) {

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
const App = () => {
    const [sectionactive, setsectionactive] = useState("home");
function activesection(active){
  setsectionactive(active);
}

    return (
        <>
    <Top sectionactive={sectionactive} />
    <Content activesection={activesection}/>
  </>
    );
}

export default App;



