import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import StreamIt from './Components/views/ApplicationViews';
import { BrowserRouter } from 'react-router-dom';
import { Nav } from './Components/nav/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StreamIt />
    </BrowserRouter>
  </React.StrictMode>
);

