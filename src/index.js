import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { PhoneBookProvider } from './hooks/PhoneBookContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PhoneBookProvider>
      <App />
    </PhoneBookProvider>
  </React.StrictMode>
);
