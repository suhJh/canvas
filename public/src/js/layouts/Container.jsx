import React from 'react';

import { Grid, Row, PageHeader } from 'react-bootstrap';

import NavBar from './NavBar';


const Container = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },
  getDefaultProps() {
    return { title: 'Hello canvas!' };
  },
  getInitialState() {
    return {
      currentMenu: '1',
    };
  },
  selectMenu(currentMenu) {
    this.setState({ currentMenu });
  },
  render() {
    return (
      <Grid>
        <Row>
          <PageHeader >
            { this.props.title }
          </PageHeader>
        </Row>
        <Row>
          <NavBar currentMenu={this.state.currentMenu} selectMenu={this.selectMenu} />
        </Row>
        { this.props.children }
      </Grid>
   );
  }
});


export default Container;
