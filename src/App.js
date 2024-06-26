import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React, { useState } from 'react';
import About from './Components/About';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
  
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#3b6a91"
      showAlert("Dark Mode Enabled", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode Enabled", "success")
    }

  }
  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title="TextUtills" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-5 mx-10 ">

          {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={} />
          </Routes> */}
         <TextForm showAlert={showAlert} heading="Enter the text to analyis below" mode={mode}></TextForm> 
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
