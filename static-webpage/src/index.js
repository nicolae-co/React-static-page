import React from 'react';
import ReactDOM from 'react-dom/client';
import reactLogo from './reactSvg.svg'

function Header() {
  return (
    <header>
      <nav className='nav'>
        <img src={reactLogo} alt='react logo' className='nav-logo' />
        <ul className='nav-items'>
          <li>Pricing</li>  
          <li>About</li>  
          <li>Contact</li>  
        </ul>
      </nav>
      </header>
  )
}

function MainContent() {
  return (
    <div>
      <h1 className='content-title'>Reasons I'm excited to learn React</h1>
      <ol className='content-list'>
        <li>It's a popular library, so I'll be 
            able to fit in with the cool kids!</li>
        <li>I'm more likely to get a job as a developer
            if I know React</li>
      </ol>
    </div>
  )
}

function Footer() {
  return (
    <footer className='footer'>
      <small>@ 2023 Nicolae development. All rights reserved.</small>
    </footer>
  )
}

function App() {
  return (
    <div className='app'>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


