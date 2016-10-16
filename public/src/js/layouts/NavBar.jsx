import React from 'react';
import NavItem from './NavItem';

const menus = [
  { menuId: '1', to: '/tutorials', dp: '튜토리얼' },
  { menuId: '2', to: '/todos', dp: 'todos' },
  { menuId: '3', to: '/reddit', dp: 'reddit' },
  { menuId: '4', to: '/gallery', dp: '갤러리' },
];
const NavBar = React.createClass({
  propTypes: {
    currentMenu: React.PropTypes.string.isRequired,
    selectMenu: React.PropTypes.func.isRequired,
  },
  getDefaultProps() {
    return {
      currentMenu: '1',
    };
  },
  handleClick(menuId) {
    this.props.selectMenu(menuId);
  },
  render() {
    const navies = menus.map((it) => {
      return (
        <NavItem
          key={it.menuId}
          currentMenu={this.props.currentMenu}
          menuId={it.menuId}
          handleClick={this.handleClick}
          to={it.to}
        >
          {it.dp}
        </NavItem>
      );
    });
    return (
      <div className="nav nav-tabs">
        {navies}
      </div>
    );
  },
});
export default NavBar;
