import * as React from 'react';
const { useEffect, useState } = React;

const Button = (props: any) => {
  const [state, setState] = useState('');

  useEffect(() => {
    console.log('Button useEffect');
  }, []);

  return <button></button>;
};

export default Button;
