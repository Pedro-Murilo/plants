import { useEffect } from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import './styles/App.css';

function App() {

  useEffect(() => {
    let vh = window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, [])

  return (
      <div className="App">
        <Header />
        <Banner />
      </div>
    );
}

export default App;
