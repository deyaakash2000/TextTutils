import "./App.css";
import Aboutus from "./component/Aboutus";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
import React, { useState } from 'react';
import Alert from "./component/Alert"; 


function App() {
  const [navMode , setnavMode]=useState('light')
  const [textbtn , settextbtn]=useState("Enable dark mode")
  const [alert , setalert]=useState(null)
  const showAlert =(message,type)=>{
    setalert({
      message : message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 3000);
  }
  const toggle=()=>{
    if (navMode === 'light') {
      setnavMode('dark')
      settextbtn('Enable light mode')
      document.body.style.backgroundColor='#575aa9'
   
        showAlert('Dark mode has been enabled','Success')

    }else{
      setnavMode('light')
      settextbtn('Enable dark mode')
      document.body.style.backgroundColor='white'
    
        
        showAlert('Dark mode has been desabled','Success')
     
    }
  }
  return (
    <>

      <Navbar title="Aakash" about="About us"  navMode={navMode} toggle={toggle} enable={textbtn}/>
      <Alert alert={alert}/>
      <div className="container my-5">      
      <Textform title="Enter any text" writeSomething="Welcome our Notepad"  navMode={navMode}/>
      </div>
       <Aboutus  navMode={navMode}/>

    </>
  );
}

export default App;
