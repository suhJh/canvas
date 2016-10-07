import React from 'react';
import { Row, Col } from 'react-bootstrap';
import deepnight from './deepnight';

const Gallery = React.createClass({
  propTypes: {
    gallery: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
  },
  getDefaultProps() {
    return {
      gallery: 'deepnight',
      description: '이것은 잠이 오지않는 밤 어지러운 머리속을 형상화한 작품이다.',
    };
  },
  componentDidMount() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    deepnight(canvas, context);
  },
  render() {
    console.log(this.props.gallery);
    const canvasStyle = {
      width: '100%',
      height: '600px',
    };
    return (
      <div>
        <Row>
          <Col>
            <canvas id="canvas" style={canvasStyle}>
              canvas가 작동하지 않는 브라우져이십니다.
            </canvas>
          </Col>
        </Row>
        <Row>
          <Col>
            {this.props.description}
          </Col>
        </Row>
      </div>
    );
  },
});
export default Gallery;
