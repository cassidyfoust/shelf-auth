import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewItemForm extends Component {

  state = {
    // store form data before submitting
    newItem: {
      description: null,
      image_url: null
    }
  }

  componentDidMount() {
    // to populate classes into `<select>`
    const action = { type: 'GET_ZOO_CLASSES' };
    this.props.dispatch(action);
  }

  handleChangeFor = (event, propertyName) => {
    // update local state as form data changes
    this.setState({
      newItem: {
        ...this.state.newItem,
        [propertyName]: event.target.value,
      }
    }); // end setState
  } // end handleChangeFor

  handleSubmit = (event) => {
    event.preventDefault();
    // make sure at least a description is entered
    if (this.state.newItem.description) {
      // call the saga
      this.props.dispatch({
        type: 'ADD_ITEM',
        payload: this.state.newItem
      });
      // clear the form
      event.target.reset();
    } else {
      alert('You must include an item description!');
    } // end if
  } // end handleSubmit

  // Renders the form
  render() {
    return (
      <form className="NewItemForm" onSubmit={this.handleSubmit}>
        <h3>IT PUTS THE ITEM ON THE SHELF</h3>
        <label htmlFor="itemDescriptionIn">Item description:</label>
        <input type='text' name="itemDescriptionIn"
          placeholder="e.g., “a bucket of blood”"
          onChange={(event) => this.handleChangeFor(event, 'description')}
        />
        <label htmlFor="itemImageUrlIn">URL for Item Image:</label>
        <input type='text' name="itemImageUrlIn"
          placeholder="e.g., https://placekitten.com/320/240"
          onChange={(event) => this.handleChangeFor(event, 'image_url')}
        />
        <button type="submit">Add Item</button>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
        </form>
    );
  }
}

// Makes our reducers available in our component
const mapStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapStateToProps)(NewItemForm);
