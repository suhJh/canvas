
import React from 'react';
import { Link } from 'react-router';

const NavItem = React.createClass({
  propTypes: {
    to: React.PropTypes.string.isRequired,
    currentMenu: React.PropTypes.string.isRequired,
    handleClick: React.PropTypes.func.isRequired,
    menuId: React.PropTypes.string.isRequired,
  },
  getDefaultProps() {
    return {
      to: '/',
      menuId: '1',
      currentMenu: '1',
    };
  },
  handleClick() {
    this.props.handleClick(this.props.menuId);
  },

  render() {
    const selectedOrNot = this.props.currentMenu === this.props.menuId ? 'active' : '';
    return (
      <li className={selectedOrNot} role="presentation">
        <Link to={this.props.to} onClick={this.handleClick}>
          {this.props.children}
        </Link>
      </li>
    );
  },
});

export default NavItem;
