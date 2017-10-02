import React from 'react';
import PropTypes from 'prop-types';

import Loading from './Loading';
import CakeWalk from './CakeWalk';

class AppUi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: ''
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    this.setState({
      searchString: event.target.value
    });
  }

  render() {
    const { cakes, saveCake } = this.props;
    const { searchString } = this.state;

    return (
      <div className="container">
        <h1 className="centered">Let Them Eat Cake!</h1>

        <div className="row">
          <input id="cakesearch"
                className="search"
                placeholder="Search..."
                type="text"
                autoComplete="off"
                value={searchString}
                onChange={this.handleSearch} />
        </div>

        {
          cakes.length
            ? <CakeWalk cakes={cakes} searchString={searchString} saveCake={saveCake} />
            : <Loading text="LOADING" speed={220} />
        }

      </div>
    );
  }
}

AppUi.propTypes = {
  cakes: PropTypes.array.isRequired,
  saveCake: PropTypes.func.isRequired
}

export default AppUi;
