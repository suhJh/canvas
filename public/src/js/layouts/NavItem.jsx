
import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';


export default class NavItem extends Component {
  render() {
    const active = this.props.currentMenu === this.props.menuId ? 'active' : '';
    const { children, to, handleClick, menuId } = this.props;
    return (
      <li className={active} role="presentation" style={{ minWidth: '100px' }}>
        <Link to={to} onClick={() => { handleClick(menuId); }}>
          {children}
        </Link>
      </li>
    );
  }
}

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  currentMenu: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  menuId: PropTypes.string.isRequired,
  children: React.PropTypes.node,
};

NavItem.defaultProps = {
  to: '/',
  menuId: '1',
  currentMenu: '1',
};
