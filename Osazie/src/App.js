import React, { useState } from 'react';
import Main from './components/main';
import topIntern from './images/TopIntern.svg';
import './styles/app.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClose, faBars} from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <div className='Top'>
        <img src={topIntern} alt="topIntern_logo" className='topLogo'/>
        <div className='menuAll'>
        <FontAwesomeIcon icon={faBars} className='bars open'/>
          
          <div className='menu'>
          <FontAwesomeIcon icon={faClose} className='bars close'/>
            <ul className='menuclick'>
                <li><a>Home</a></li>
                <li><a>Portfolio</a></li>
                <li><a>Blog</a></li>
                <li><a>عربي</a></li>
            </ul>
        </div>
        </div>
      </div>
      
      <Main/>
    </div>
  );
}

export default App;
