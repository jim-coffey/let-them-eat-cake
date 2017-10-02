import React from 'react';
import renderer from 'react-test-renderer';

import Loading from '../../src/components/Loading';

describe('Loading (Snapshot)', () => {
  it('renders correctly', () => {
    const loadingText = 'Now Loading';
    const speed = 250;

    const tree = renderer.create(
      <Loading text={loadingText} speed={speed} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
