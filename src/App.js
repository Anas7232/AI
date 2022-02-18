import './App.css';

import { Blog, Features, Possibility, WhatGPT3, Header } from './container';
import { CTA, Brand, Navbar } from './components';
import './App.css'

function App() {
  return (
    <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
    </div>
  );
}

export default App;
