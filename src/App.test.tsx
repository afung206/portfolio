import * as React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { App } from './App';

describe('App', () => {
  it('should render the App page', () => {
      const subject = shallow(<App/>);
      expect(subject).to.exist();
  });
});