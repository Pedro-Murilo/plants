import { useEffect } from 'react';
import gsap from 'gsap';

import Header from './components/Header';
import './styles/App.css';
import Home from './pages/Home';

function App() {

  useEffect(() => {
    let vh = window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  
    gsap.to('body', 0, {css:{ visibility: "visible" }})

  })
  
  return (
      <>
        <Header />
        <Home />
      </>
    );
}

export default App;
