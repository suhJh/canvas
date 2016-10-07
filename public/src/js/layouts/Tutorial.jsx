import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ch1 from '../tutorials/ch1'

const Tutorial = React.createClass({

  componentDidMount() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    ch1.example1(canvas, context);
  },
  render() {
    return (
      <Row>
        <Col lg={12} sm={6} md={6}>
          <canvas id='canvas' width='800' height='800'></canvas>
        </Col>
      </Row>
    );
  },
});


export default Tutorial;
