import React, { useRef } from 'react'

export default function About({handlesection}) {
  const info = useRef()
  const edi = useRef()
  const informations = useRef()
  const education = useRef()
  
  function infos(){
    edi.current.id=''
    info.current.id='active'
    informations.current.id='active'
    education.current.id='inactive'
  }
  function ed(){
      edi.current.id='active'
      info.current.id=''
      informations.current.id='inactive'
      education.current.id='active'
  }
  function handleenter(){
    handlesection("about")
  }
  


  return (
    
    <section data-aos="fade-right" onMouseEnter={handleenter} id="about">
        <div className='about'>
            <div className='about-navbar'>
              <div className='about-navbar-elements'>
                  <div className='about-nav-elemnt' id="active" ref={info} onClick={infos} >Informations</div >
                  <div className='about-nav-elemnt' ref={edi} onClick={ed}  >Education</div >
              </div>
            </div>
            <div className='about-content'>
              <div  className='informations'  id='active' ref={informations}  >
                      <div className='info-first'>
                        <p>Salut! Je suis étudiant en première année en bachelor développement web à Hetic. Je suis passionné par le développement web depuis de nombreuses années, et je me forme régulièrement en parallèle de mes études dans ce domaine afin d'acquérir plus de compétences.</p>
                      </div>
                  <div className='info-second'>
                          <ul>
                            <li><span id="infot-title">Nom :</span> <span id="info-text"> Dridi Mohamed Amine</span></li>
                          </ul>
                          <ul>
                            <li><span id="infot-title">Age :</span> <span id="info-text"> 19</span></li>
                          </ul>
                          <ul>
                            <li><span id="infot-title">Adresse :</span> <span id="info-text"> Île-de-France</span></li>
                          </ul>
                          <ul>
                            <li><span id="infot-title">Email :</span> <span id="info-text">Dridimohamed19@gmail.com</span></li>
                          </ul>
                          <ul>
                            <li><span id="infot-title">Numéro  :</span> <span id="info-text"> 0752056387</span></li>
                          </ul>
                      
                  </div>


              </div>
            
              <div className='education' id='inactive'  ref={education} >
                <div className='top-section'>
                  <span>Hetic:(Bachelor web develepment) : depuis  October 2021</span>
                  <div className='hetic-logo'></div>

                </div>
                <div className='education-content'>
                      <ul>
                      <li><span> Apprentissage des architectures et des solutions de développement Front-end/back-end</span></li>
                      <li><span> Conception, développement, maintenance et déploiement des solutions numériques.</span></li>
                      <li><span> Programmation web et bases de données : HTML5, CSS3, JavaScript, PHP</span></li>
                      <li><span> Base de données : SQL</span></li>
                      <li><span> Langages : HTML5, CSS3, JavaScript, PHP, Python</span></li>
                      
                      

                      </ul>
                </div>
              </div>
            </div>
              
        </div>
    </section>
  )
}
