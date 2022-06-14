import * as React from 'react';
import Button from './components/Button';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './style.css';

const { useEffect, useLayoutEffect, useState } = React;

export default function App() {
  useLayoutEffect(() => {
    console.log('App useLayoutEffect');
    // for (let i = 0; i < 10 * 100000; i++) {
    //   console.log('App useLayoutEffect');
    // }
  });
  // useEffect(() => {
  //   console.log('App useEffect');
  // }, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Button>按钮</Button>
      <UseEffectDemo />
    </div>
  );
}

function UseEffectDemo() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);
  console.log('render', value);
  return <div onClick={() => setValue(0)}>value: {value}</div>;
}
