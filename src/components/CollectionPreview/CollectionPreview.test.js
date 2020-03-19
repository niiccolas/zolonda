import React from 'react';
import { shallow } from 'enzyme';
import PreviewCollection from './CollectionPreview';

describe('<PreviewCollection />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<PreviewCollection />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
