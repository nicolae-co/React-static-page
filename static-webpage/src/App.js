import React from "react";
import Header from './Components/Header'
import MainContent from './Components/MainContent';
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true)
  
  function toggleDarkMode() {
    setDarkMode(prevState => !prevState)
  }

    return (
      <div className='container'>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <MainContent darkMode={darkMode} />
      </div>
    );
}
  
export default App
