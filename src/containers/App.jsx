import React from 'react';
import { connect } from 'react-redux';

import {
  saveCake
} from '../redux/actions';

import AppUi from '../components/AppUi';

const mapStateToProps = (state, ownProps) => {
  return {
    cakes: state.cakes
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveCake: cake => {
      dispatch(saveCake(cake))
    }
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(AppUi);

export default App;
