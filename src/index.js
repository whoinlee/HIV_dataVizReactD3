import React from 'react';
import ReactDOM from 'react-dom';
//-- Components
import ChoroplethMap from './components/ChoroplethMap';
//-- Styles
import "./style.css";


ReactDOM.render(
  <React.StrictMode>
    <ChoroplethMap />
  </React.StrictMode>,
  document.getElementById('root')
);