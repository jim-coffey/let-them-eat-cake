import axios from 'axios';
jest.mock('axios');

import api from '../../src/utils/api';

describe('api', () => {

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('return cakes array with `id`s', async () => {
    const response = {
      data: [{
        title: 'asyncTitle',
        desc: 'asyncDesc',
        image: 'asyncImage'
      }]
    };
    const expectedCakes = [{
      id: 0,
      title: 'asyncTitle',
      desc: 'asyncDesc',
      image: 'asyncImage'
    }];
    axios.get.mockReturnValueOnce(
      new Promise((resolve, reject) => {
        resolve(response);
      })
    );

    const fetchedCakes = await api.fetchCakes();

    expect(fetchedCakes).toEqual(expectedCakes);
  });

});
