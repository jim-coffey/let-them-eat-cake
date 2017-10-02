import { SAVE_CAKE, LOAD_CAKES } from './actions';

const initialState = {
  cakes: []
};

const cakeReducers = (state = initialState, action) => {
  switch (action && action.type) {
    case LOAD_CAKES:
      return Object.assign({}, ...state, {
        cakes: [...action.cakes]
      });

    case SAVE_CAKE:
      return Object.assign({}, state, {
        cakes: state.cakes.map(cake => {
          return cake.id === action.cake.id ? action.cake
                                            : cake;
        })
      });

    default:
      return state;
  }
}

export default cakeReducers;
