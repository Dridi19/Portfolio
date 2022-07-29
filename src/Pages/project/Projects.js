import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card,Row,Button} from 'react-bootstrap';  
import paint from '../../img/paint.png';
import deadcastel from '../../img/logo.png';  
import python from '../../img/merged.png';
import social from '../../img/social.png';    
import "./Projects.css"
function Projects({handlesection}) {  
  function handleenter(){
    handlesection("projects")
  }
  return (
      
<section className="App" onMouseEnter={handleenter} id="projects">
  <Container className='p-4'>  
  <h2 style={{color:"white"}} >Projets</h2>
     <Row>  
     
          <Card  
            text={'dark'}  
            className="m-2"  
            data-aos="fade-left"
            data-aos-duration="2000"
          >  
          
            <Card.Img     src={deadcastel} />
            <Card.Body variant="foot" >  
              <Card.Title> DeadCastle  </Card.Title>  
              <Card.Text>  
              Création d’un jeu RPG en JavaScript.
              </Card.Text>
              <Button variant="primary"><a href="https://github.com/Dridi19/DeadCastle" class="more-details">More details</a></Button>    
            </Card.Body>  
          </Card> 

          <Card  
    text={'dark'}  
    className="m-2"  
    data-aos="fade-left"
    data-aos-duration="2800"
  >  
  
    <Card.Img   src={social} />
    <Card.Body >  
      <Card.Title> Heticile </Card.Title>  
      <Card.Text>  
            la création d'un site de réseau social avec Php et Jquery
      </Card.Text>
      <Button variant="primary"><a href="https://github.com/Dridi19/Heti-cile" class="more-details">More details</a></Button>    
    </Card.Body>  
  </Card>



  <Card  
    text={'dark'}  
    className="m-2"  
    data-aos="fade-left"
    data-aos-duration="3600"
  >  
  
    <Card.Img variant="top" style={{width:"100%"}}   src={python} />
    <Card.Body>  
      <Card.Title> Projet combat </Card.Title>  
      <Card.Text>  
        Jeu Rpg en python.

      </Card.Text>
      <Button variant="primary"><a href="https://github.com/Dridi19/Projet-combat---v1" class="more-details">More details</a></Button>    
    </Card.Body>  
  </Card>




  <Card  
    text={'dark'}  
    className="m-2"  
    data-aos="fade-left"
  >  
  
    <Card.Img variant="top" style={{width:"100%"}}   src={paint} />
    <Card.Body>  
      <Card.Title> Service Paint </Card.Title>  
      <Card.Text>  
            la creéation d'un site web comme l'application Paint avec JavaScript et Php.
      </Card.Text>
      <Button variant="primary"><a href="https://github.com/Dridi19/ServicePaint" class="more-details">More details</a></Button>    
    </Card.Body>  
  </Card>









    </Row>  
</Container>  
    </section>  
  );  
}  
export default Projects;  