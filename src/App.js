// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'




function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(function() {setAlert(null)}, 1500);
  }

  const togglemode = ()=>{
        if(mode === "light"){
          setMode("dark");
          document.body.style.background = "black";
          showAlert('dark mode is enabled','success');
          document.title = "Textutils - Dark mode"
          
        }
        else{
          setMode("light");
          document.body.style.background = "white";
          showAlert('dark mode is disabled','success');
          document.title = "Textutils - Light mode"
      

        }
  }


  return (
    <>
            <Navbar title="Textutils" aboutText="About textutils" mode={mode} toggleMode={togglemode}/>
            <Alert alert={alert}/>        
            <div className="container">    
            <TextForm heading="Enter text below to analyze" mode={mode} showAlert={showAlert}/>
            </div>
            {/* <div className="container">
               <About/>
            </div> */}
            
    </>
    
    
    
  );
}

export default App;
