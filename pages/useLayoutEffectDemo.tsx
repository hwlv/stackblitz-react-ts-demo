import * as React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

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
      <h1>life</h1>
    </div>
  );
}
