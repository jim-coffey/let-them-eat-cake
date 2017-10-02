import React from 'react';
import expect from 'expect';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Cake from '../src/components/Cake.jsx';

describe('Cake', () => {
  it('Cake renders title and description', () => {
    const testCake = {
      id: 0,
      title: 'Wedding Cake',
      desc: 'Big',
      image: 'http://image'
    }
    const saveCake = () => {};

    const cake = Enzyme.shallow(<Cake cake={testCake} saveCake={saveCake} />);

    expect(cake.find('li.header').text()).toEqual('Wedding Cake');
  });
});

describe('Cake behaves as expected', () => {
  let cakeComponent;
  let cake;
  let saveCake;

  beforeEach(() => {
    cake = {
      id: 1,
      title: 'Birthday Cake',
      desc: 'Sweet',
      image: 'https://image'
    }
    saveCake = jest.fn();
    cakeComponent = Enzyme.mount(<Cake cake={cake} saveCake={saveCake} />);
  });

  it('receives props', () => {
    expect(cakeComponent.props().cake).toBeDefined();
    expect(cakeComponent.props().saveCake).toBeDefined();
  })
  
  it('is Editable', () => {
    const edit = cakeComponent.find('a');
    edit.simulate('click');

    expect(cakeComponent.state().mode).toEqual('EDITING');
  })

});
