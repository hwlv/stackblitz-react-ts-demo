import * as React from 'react';

import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../App';
import pages from '../pages/index';

class BasicRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillReceiveProps() {}

  componentWillUnmount() {}

  render() {
    return (
      <HashRouter>
        <Routes>
          <Route exact path="/" component={HomePage} />
          {pages.length > 0 &&
            pages.map((item, index) => {
              return (
                <Route
                  key={index}
                  exact
                  path={`/${item.path}`}
                  component={item.comp}
                />
              );
            })}
        </Routes>
      </HashRouter>
    );
  }
}

export default BasicRoute;
