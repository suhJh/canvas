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
      <div className="row">
        <div className="col-lg-12 col-sm-6 col-md-6">
          <canvas id='canvas' width='800' height='800'></canvas>
        </div>
      </div>
    );
  },
});


export default Tutorial;
