import * as React from 'react';
import Button from './components/Button'
import './style.css';

const { useEffect } = React;

export default function App() {
  useEffect(() => {
    console.log('App useEffect');
  }, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Button></Button>
    </div>
  );
}
