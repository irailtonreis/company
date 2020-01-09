import React from 'react';
import { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({offset: -60, scrollDuration: 200});
const Footer = props=>{
  return(
      <footer className='container-fluid text-center'>
        <a href='#TOP' title='To Top'>
        <span className='glyphicon glyphicon-chevron-up'></span>
        </a>
        <p>Bootstrap Theme Made By <a href='https://www.w3schools.com' title='Visit w3schools'>www.w3schools.com</a></p>
      </footer>
  );

}

export default Footer;