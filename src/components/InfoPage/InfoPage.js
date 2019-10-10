import React, { Component } from 'react';
import { connect } from 'react-redux';

class InfoPage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_ITEMS' });
  }
  render() {
    return (

  <div>
    <p>
      Shelf Page
      <ul>
            {this.props.items.map(item => (
              <li>
                Name: {item.name}
                Description: {item.description}
              </li>
            ))}
          </ul>
    </p>
  </div>
);
}
}

const mapStateToProps = state => ({
  items: state.items,
  user: state.user,
});

export default connect(mapStateToProps)(InfoPage);
