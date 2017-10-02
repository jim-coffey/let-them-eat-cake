import React from 'react';
import renderer from 'react-test-renderer';

import Cake from '../../src/components/Cake';

describe('Cake (Snapshot)', () => {
  it('renders correctly', () => {
    const cake = {
      id: 0,
      title: 'Cake1',
      desc: 'desc1',
      image: 'http://image'
    }
    const saveCake = () => {};

    const tree = renderer.create(
      <Cake cake={cake} saveCake={saveCake} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
