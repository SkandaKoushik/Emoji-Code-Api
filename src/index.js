import React from 'react';
import ReactDOM from 'react-dom/client';
import EmojiCodeApp from './Components/EmojiCodeApp';
import './index.css'; // You may need to import global styles here

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <EmojiCodeApp />
  </React.StrictMode>
);
