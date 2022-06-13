import * as React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
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
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Button>按钮</Button>
    </div>
  );
}
