import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LifeCycle from './pages/LifeCycle';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="lifeCycle" element={<LifeCycle />} />
    </Routes>
  </BrowserRouter>
);
