import api from '../utils/api';

export const SAVE_CAKE = 'SAVE_CAKE';
export const LOAD_CAKES = 'LOAD_CAKES';

export const fetchCakes = () => {
  return dispatch => {
    return api.fetchCakes()
              .then(cakes => {
                dispatch(loadCakes(cakes));
              })
              .catch(error => {
                throw(error);
              });
  };
}

export const loadCakes = cakes => {
  return { type: LOAD_CAKES, cakes };
}

export const saveCake = cake => {
  return { type: SAVE_CAKE, cake };
}
