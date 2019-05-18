import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// this uses the jasime framework
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App name="Mike" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
