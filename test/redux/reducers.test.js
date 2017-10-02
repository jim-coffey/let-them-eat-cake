import cakeReducers from '../../src/redux/reducers';
import { SAVE_CAKE, LOAD_CAKES } from '../../src/redux/actions';

const initialState = {
  cakes: []
};

describe('store/topics/reducers', () => {

  it('should have initial state', () => {
    expect(cakeReducers()).toEqual(initialState);
  });

  it('handles the loading of cakes', () => {
    const action = {
      type: LOAD_CAKES,
      cakes: ['test_cake']
    };

    const newState = cakeReducers(undefined, action);

    expect(newState.cakes[0]).toEqual('test_cake');
  });

  it('handles the saving of a cake', () => {
    const oldState = {
      cakes: [
        {
          id: 0,
          title: 'One',
          desc: 'desc1',
          image: 'href1'
        },
        {
          id: 1,
          title: 'Two',
          desc: 'desc2',
          image: 'href2'
        },
        {
          id: 2,
          title: 'Three',
          desc: 'desc3',
          image: 'href3'
        }
      ]
    }
    const action = {
      type: SAVE_CAKE,
      cake: {
        id: 1,
        title: 'NewTwo',
        desc: 'newdesc2',
        image: 'newhref2'
      }
    }
    const expectedState = {
      cakes: [
        {
          id: 0,
          title: 'One',
          desc: 'desc1',
          image: 'href1'
        },
        {
          id: 1,
          title: 'NewTwo',
          desc: 'newdesc2',
          image: 'newhref2'
        },
        {
          id: 2,
          title: 'Three',
          desc: 'desc3',
          image: 'href3'
        }
      ]
    }

    const newState = cakeReducers(oldState, action);

    expect(newState).toEqual(expectedState);
  });
  
});
