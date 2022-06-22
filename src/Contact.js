import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./Contact.css"

function ContactForm() {
  const [state, handleSubmit] = useForm("mvolyabw");
  if (state.succeeded) {
      return <p style={{color:"white"}} id="textaftersend">Merci pour le message!!</p>;
  }
  return (
      <div className='container'>
          <div className='card shadow'>
              <div className='card-body' id="body-card" style={{background:"black"}}>
                  <div className='row'>
                        <div className='col-md-6'>
                            <h6 style={{color:"white"}} > Contact Form</h6>                
                            <hr />
                            <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                    
                                        <label className='mb-1' htmlFor="" >Nom</label>
                                        <input type="text" className='form-control' placeholder='Nom' name='name' id="name" />

                                    </div>
                                    <div className="form-group">
                                        <label className='mb-1' htmlFor=""  >numéro de téléphone</label>
                                        <input type="tel" id="number" className='form-control' placeholder='numéro de téléphone' name='number' pattern="[0-9]{1,14}" required />

                                    </div>
                                    <div className="form-group">
                                        <label className='mb-1' htmlFor="" >Email</label>
                                        <input type="email"  id="email"  name="email"  className='form-control' placeholder='Email' />
                                        <ValidationError 
                                        prefix="Email" 
                                        field="email"
                                        errors={state.errors}
                                    />

                                    </div>
                                    <div className="form-group">
                                        <label className='mb-1' htmlFor="" >Message</label>
                                        <textarea id="message" rows={3} type="text" className='form-control' placeholder='Message' name='' />
                                        <ValidationError 
                                        prefix="Message" 
                                        field="message"
                                        errors={state.errors}
                                    />
                                    </div  >
                                            <div className='form-group py-3' >
                                                    <button className='btn btn-primary shadow' type="submit" disabled={state.submitting}>
                                                Submit
                                            </button>
                                        </div>  
                        </form>
                                    </div>
                                    <div className='col-md-6 border-start'>
                                        <h5 className='main-heading' >Adress Informations</h5>
                                        <div className='underline'></div>
                                        <p style={{color:"white"}}>
                                            Ile-de-france,France
                                        </p>
                                        <p style={{color:"white"}}>
                                            Phone: +33 0752056387
                                        </p>
                                        <p style={{color:"white"}}>
                                            Email: Dridimohamed19@gmail.com
                                        </p>
                                                        
                                        
                                    </div>
                            </div>
                            </div>
                    
                
            </div>
        </div>
  );
}
function App({handlesection}) {
    function handleenter(){
        handlesection("Contact")
      }
  return (
    <section data-aos="fade-up"  onMouseEnter={handleenter} id="Contact" >
        <h2 style={{color:"white"}} >Contact</h2>
    <ContactForm />
    </section>
  );
}
export default App;


            
