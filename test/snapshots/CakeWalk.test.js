import React from 'react';
import renderer from 'react-test-renderer';

import CakeWalk from '../../src/components/CakeWalk';

describe('CakeWalk (Snapshot)', () => {
  it('renders correctly', () => {
    const cakes = [{
      id: 0,
      title: 'Cake1',
      desc: 'desc1',
      image: 'http://image'
    }]
    const saveCake = () => {};
    const searchString = '';

    const tree = renderer.create(
      <CakeWalk cakes={cakes} saveCake={saveCake} searchString={searchString} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
