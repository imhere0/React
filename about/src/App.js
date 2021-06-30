import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import Carousel from './component/carousel';
import Grid from './component/grid';
import Footer from './component/Footer';
import Listing from './component/Listing'
function App() {
  return (
    <div className="App">
      <Carousel />
      <Grid />
      <Listing />
      <Footer />
    </div>
  );
}

export default App;
