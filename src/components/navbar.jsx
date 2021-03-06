import React, { PureComponent } from 'react';
import '../app.css';

class Navbar extends PureComponent {
  render() {
    return (
      <div className="navbar">
        <i className="navbar-logo fas fa-star-half-alt"></i>
        <span>Habit Tracker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </div>
    );
  }
}

export default Navbar;
