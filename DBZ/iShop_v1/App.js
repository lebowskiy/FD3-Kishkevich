"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Ishop  from './components/Ishop';

// если необходимо, вид сборки можно проверить в коде:
// if (process.env.NODE_ENV === 'production') {
// if (process.env.NODE_ENV !== 'production') {

ReactDOM.render( 
  <Ishop />
, document.getElementById('container') );
