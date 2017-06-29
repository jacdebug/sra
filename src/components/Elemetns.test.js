import React from 'react';
import ReactDOM from 'react-dom';
import { Container, FlexContainer } from './Elements';

it('container renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Container />, div);
});

it('flexContainer renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FlexContainer />, div);
});
