import React, { PropTypes, Component } from 'react';
import NavBar from './NavBar';

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { currentMenu: '1' };
  }
  render() {
    const menus = [
      { menuId: '1', to: '/tutorials', dp: '튜토리얼' },
      { menuId: '2', to: '/todos', dp: 'todos' },
      { menuId: '3', to: '/reddit', dp: 'reddit' },
      { menuId: '4', to: '/playRedux', dp: 'playRedux' },
      { menuId: '5', to: '/gallery', dp: '갤러리' },
    ];
    return (
      <div>
        <div className="jumbotron" style={{ paddingLeft: '50px' }}>
          <h1>{this.props.title}</h1>
        </div>
        <div className="container">
          <NavBar
            currentMenu={this.state.currentMenu}
            selectMenu={(currentMenu) => { this.setState({ currentMenu }); }}
            menus={menus}
          />
        </div>
        { this.props.children }
      </div>
   );
  }
}

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Container.defaultProps = {
  title: 'Hello canvas!',
};
