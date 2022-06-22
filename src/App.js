import React,{useState} from 'react';
import Top from './Top';
import Content from './Content';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import "./about.css"
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
