import * as React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const { useEffect, useLayoutEffect, useState } = React;

class Child extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    console.log('   ChildComponent DidUpdate');
  }
  componentDidMount() {
    console.log('   ChildComponent Mounted');
  }
  render() {
    return <div>子组件</div>;
  }
}

// state异步问题
class Father extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChanged: 'false',
      val:0
    };
  }
  componentDidUpdate() {
    console.log('SuperComponent DidUpdate');
  }
  componentDidMount() {
    console.log('SuperComponent Mounted');
  }
  render() {
    return <div>父组件</div>;
  }
}

export default function App() {
  useLayoutEffect(() => {
    console.log('App useLayoutEffect');
  });
  useEffect(() => {
    console.log('App useEffect');
  }, []);

  return (
    <div>
      <Child />
      <h1>life</h1>
    </div>
  );
}
