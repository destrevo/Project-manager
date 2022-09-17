import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProjectManagerProvider from './Context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProjectManagerProvider>
      <App />
    </ProjectManagerProvider>
  </React.StrictMode>
);
