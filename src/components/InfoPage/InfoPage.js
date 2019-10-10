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
        <div className="shelf-display">
            {this.props.items.map(item => (
              <div className="shelf-item">
                <div>
                  <img src={item.image_url} width="150px"></img></div>
                  <div>
                {item.description}
                </div>
              </div>
            ))}
        </div>
  </div>
);
}
}

const mapStateToProps = state => ({
  items: state.items,
  user: state.user,
});

export default connect(mapStateToProps)(InfoPage);
