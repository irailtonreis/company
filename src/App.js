import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Services from './components/Services';  
import Portifolio from './components/Portifolio';
import Price from './components/Price';
import Contact from './components/Contact';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/services" component={Services}/>
            <Route path="/portifolio" component={Portifolio}/>
            <Route path="/price" component={Price}/>
            <Route path="/contact" component={Contact}/>
          <Footer/>
         </div>
        </BrowserRouter>
  
    );

  }
}

export default App;
