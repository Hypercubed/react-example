import React from 'react';
import ReactDOM from 'react-dom';
import Root from './app';

import 'bootstrap/css/bootstrap.css!';

ReactDOM.render(
  <div className='container'>
    <Root />
  </div>,
  document.querySelector('my-app')
);
