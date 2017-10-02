import React from 'react';
import PropTypes from 'prop-types';

const VIEWING = 'VIEWING';
const EDITING = 'EDITING';

class Cake extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: VIEWING,
      model: {
        id: this.props.cake.id,
        image: this.props.cake.image,
        title: this.props.cake.title,
        desc: this.props.cake.desc
      }
    }

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleEditClick(event) {
    event.preventDefault();
    let mode = EDITING;
    if (this.state.mode === EDITING) {
      mode = VIEWING;
    }

    this.setState({
      mode
    });
  }

  handleTitleChange(event) {
    this.setState({
      model: {
        ...this.state.model,
        title: event.target.value
      }
    });
  }
  
  handleDescChange(event) {
    this.setState({
      model: {
        ...this.state.model,
        desc: event.target.value
      }
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.saveCake(this.state.model);
    this.setState({
      mode: VIEWING
    });
  }

  render() {
    const { cake, saveCake } = this.props;
    const { mode, model } = this.state;

    return (
      <li key={cake.name} className="cake-item">
        <ul className="space-list-items">
          <li><a href="#" onClick={this.handleEditClick}>Edit</a></li>
          <li>
            <img className="cake-pic"
                src={cake.image}
                alt={'Image for ' + cake.title}
            />
          </li>
          { mode === VIEWING ?
            <li className="header">{cake.title}</li> : null }
          { mode === VIEWING ?
            <li className="desc">{cake.desc}</li> : null }

          { mode === EDITING ?
            <form onSubmit={this.handleFormSubmit}>
              <li>
                <label>
                  Title:
                  <input required="required"
                         type="text"
                         value={this.state.model.title}
                         onChange={this.handleTitleChange} />
                </label>
              </li>
              <li>              
                <label>
                  Desc
                  <input type="text"
                         value={this.state.model.desc}
                         onChange={this.handleDescChange} />
                </label>
              </li>
              <li>
                <input className="button" type="submit" value="Submit" />
              </li>
            </form>
          : null }

        </ul>
      </li>
    );
  }
}

Cake.propTypes = {
  cake: PropTypes.object.isRequired,
  saveCake: PropTypes.func.isRequired
}

module.exports = Cake;
