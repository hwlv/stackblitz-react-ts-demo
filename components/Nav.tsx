import * as React from 'react';
const { useEffect, useState } = React;
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Button = (props: any) => {
  const [state, setState] = useState('');

  useEffect(() => {
    console.log('Button useEffect');
  }, []);

  return (
    <div>
      <Link to="/">home</Link> | <Link to="/lifeCycle">lifeCycle</Link> |{' '}
      <Link to="/expenses">Expenses</Link>
    </div>
  );
};

export default Button;
