import React, {useState} from 'react'
import './App.css';
import NavBar from './NavBar';
import Movies from './Movies';

function App() {
  const [mode, setMode]=useState('light');
  const [textmode, setText]=useState('text-dark');
  const [darkMode, setDark]=useState('Dark Mode');

  
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      setText('text-light')
      setDark('Enable Light Mode')
    }
    else {
      setMode('light');
      setText('text-dark');
      setDark('Enable Dark Mode')
    }
  }
  return (
    <div className={"App"}>
      <NavBar mode={mode} toggleMode={toggleMode} textmode={textmode} darkMode={darkMode}/>
      <Movies mode={mode} toggleMode={toggleMode} textmode={textmode} darkMode={darkMode}/>
    </div>
  );
}

export default App;
