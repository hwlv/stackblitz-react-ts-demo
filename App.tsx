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
const random = () => {
  return 10 + Math.random() * 200;
};
function UseEffectDemo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    if (count1 === 0) {
      setCount1(random());
    }
  }, [count1]);

  useLayoutEffect(() => {
    if (count2 === 0) {
      setCount2(random());
    }
  }, [count2]);
  console.log('render...');
  return (
    <div className="useLayoutEffect">
      <div onClick={() => setCount1(0)}>useEffect：{count1}</div>
      <div onClick={() => setCount2(0)}>useLayoutEffect：{count2}</div>
    </div>
  );
}
