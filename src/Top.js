import React,{useEffect,useState,useRef} from 'react';
import { Navbar, Container,Nav } from 'react-bootstrap';
function Top({sectionactive}) {
  const home = useRef();
  const about = useRef();
  const projects = useRef();
  const Contact = useRef();
  const [active, setsectionactive] = useState(sectionactive);
  useEffect(() => {
    setsectionactive(sectionactive)
    changeactive(sectionactive);
  }, [sectionactive]);
  function changeactive(section){
      if (section === "home"){
        home.current.id ="activesection"
      }else{
        home.current.id ="inactivesection"
      }
      if (section === "about"){
        about.current.id ="activesection"
      }else{
        about.current.id ="inactivesection"
      }
      if (section === "projects"){
        projects.current.id ="activesection"
      }else{
        projects.current.id ="inactivesection"
      }
      if (section === "Contact"){
        Contact.current.id ="activesection"
      }else{
        Contact.current.id ="inactivesection"
      }


  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" id="topnavbar">
            <Container>
            <Navbar.Brand >Dridi</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="navbarScroll"> 
                <Nav >
                <Nav.Link href="#home" id="activesection"  onClick={()=>{changeactive("home") }} ref={home} >  Home </Nav.Link>
                  <Nav.Link className='pr-30px' href="#about" id="inactivesection" onClick={()=>{changeactive("about") }} ref={about} >À propos</Nav.Link>
                  <Nav.Link href="#projects" id="inactivesection" onClick={()=>{changeactive("projects") }} ref={projects} >Projets</Nav.Link>
                  <Nav.Link href="#Contact" id="inactivesection" onClick={()=>{changeactive("Contact") }} ref={Contact} >contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
                </Container>
    </Navbar>

  </>
  );
}

export default Top;
