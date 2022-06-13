import * as React from 'react';
import Button from './components/Button';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import LifeCycle from './pages/LifeCycle';

import './style.css';

const { useEffect, useLayoutEffect, useState } = React;

export default function App() {
  useLayoutEffect(() => {
    console.log('App useLayoutEffect');
  });
  useEffect(() => {
    console.log('App useEffect');
  }, []);

  return (
    <BrowserRouter>
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Button>按钮</Button>
      <Link to="/">home</Link>
      <div>
        <Link to="/lifeCycle">lifeCycle</Link> |{' '}
        <Link to="/expenses">Expenses</Link>
      </div>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="lifeCycle" element={<LifeCycle />} />
    </Routes>

    </div>
  </BrowserRouter>

  );
}
