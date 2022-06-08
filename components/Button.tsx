import * as React from 'react';
const { useEffect, useState } = React;

const Button = (props: any) => {
  const [state, setState] = useState('');

  useEffect(() => {
    console.log('Button useEffect');
  }, []);

  return <button>{props.children}</button>;
};

export default Button;
