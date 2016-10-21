import React, { PropTypes, Component } from 'react';
import NavItem from './NavItem';


export default class NavBar extends Component {
  render() {
    const navies = this.props.menus.map(
      it => (
        <NavItem
          key={it.menuId}
          currentMenu={this.props.currentMenu}
          menuId={it.menuId}
          handleClick={this.props.selectMenu}
          to={it.to}
        >
          {it.dp}
        </NavItem>
        )
      );
    return (
      <div className="row nav nav-tabs">
        {navies}
      </div>
    );
  }
}

NavBar.propTypes = {
  currentMenu: PropTypes.string.isRequired,
  selectMenu: PropTypes.func.isRequired,
  menus: PropTypes.arrayOf(React.PropTypes.object),
};

NavBar.defaultProps = {
  currentMenu: '1',
};
