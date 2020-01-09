import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';

import { Link } from 'react-router-dom';

configureAnchors({offset: -60, scrollDuration: 200});

const Header = () => {
  return(
    <div>
      <ScrollableAnchor id={"TOP"}>
        <nav className='navbar navbar-default navbar-fixed-top'>
          <div className='container'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>                        
            </button>
            <Link className='navbar-brand' to="/">Logo</Link>
          </div>
          <div className='collapse navbar-collapse' id='myNavbar'>
            <ul className='nav navbar-nav navbar-right'>
              <li><Link exact to="/">Sobre</Link></li>
              <li><Link to="/services">Serviços</Link></li>
              <li><Link to="/portifolio">Portifólio</Link></li>
              <li><Link to="/price">Preços</Link></li>
              <li><Link to="/contact">Contato</Link></li>
            </ul>
          </div>
          </div>
        </nav>
      </ScrollableAnchor>

    <div className='jumbotron text-center'>
        <h1>Site institucional</h1> 
        <p>Irure commodo non ex irure sint ea quis.</p> 
        <form>
          <div className='input-group'>
            <input type='email' className='form-control' size='50' placeholder='Email Address' required />
            <div className='input-group-btn'>
              <button type='button' className='btn btn-primary'>Subscribe</button>
            </div>
          </div>
        </form>
      </div>

    </div>


  );
}

export default Header;