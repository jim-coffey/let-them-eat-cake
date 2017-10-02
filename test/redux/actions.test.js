import { Thunk } from 'redux-testkit';
import api from '../../src/utils/api';

jest.mock('../../src/utils/api');

import {
  LOAD_CAKES,
  SAVE_CAKE,
  loadCakes,
  saveCake,
  fetchCakes
} from '../../src/redux/actions';

const initialState = {
  cakes: []
};

describe('store/topics/actions', () => {

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('return the action for loadCakes', () => {
    const cakes = [
      'testCake'
    ];
    const expectedAction = {
      type: LOAD_CAKES,
      cakes
    }

    const action = loadCakes(cakes);

    expect(action).toEqual(expectedAction);
  });

  it('return the action for saveCake', () => {
    const cake = 'testCake';
    const expectedAction = {
      type: SAVE_CAKE,
      cake
    }

    const action = saveCake(cake);

    expect(action).toEqual(expectedAction);
  });

  it('return the thunk for fetchCakes', async () => {
    const cakes = [{
      title: 'asyncTitle',
      desc: 'asyncDesc',
      image: 'asyncImage'
    }];
    const expectedAction = {
      type: LOAD_CAKES,
      cakes
    };
    api.fetchCakes.mockReturnValueOnce(
      new Promise((resolve, reject) => {
        resolve(cakes);
      })
    );

    const dispatches = await Thunk(fetchCakes).execute();

    expect(dispatches.length).toBe(1);
    expect(dispatches[0].isPlainObject()).toBe(true);
    expect(dispatches[0].getAction()).toEqual(expectedAction);
  });

});
