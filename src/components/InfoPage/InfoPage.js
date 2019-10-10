import React, { Component } from 'react';
import { connect } from 'react-redux';

class InfoPage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_ITEMS' });
  }
  render() {
    return (

  <div>
      Shelf Page
      <ul>
            {this.props.items.map(item => (
              <li>
                Description: {item.description}
              </li>
            ))}
          </ul>
  </div>
);
}
}

const mapStateToProps = state => ({
  items: state.items,
  user: state.user,
});

export default connect(mapStateToProps)(InfoPage);
