import React from 'react';
import './App.css';
import Header from './Header';


function App() {
  return (
    // BEM naming convention
    <div className="app">

      <Header />

      <div className='app_body'>
        {/* Sidebar  */}
        {/* Feed  */}
        {/* Widgets  */}
      </div>  
    </div>
  );
}

export default App;
