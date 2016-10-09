import React from 'react';

const TestArea = React.createClass({
  getInitialState() {
    return {
      output: '',
      count: 0,
    };
  },
  componentDidMount() {
    /*
    setInterval(() => {
      new Promise((resolve, reject) => {
        if (this.countUp() > 10) {
          resolve();
        } else {
          reject();
        }
      }).then(() => {
        this.setState({ output: 'resolve ' + this.state.count + '초가 지났습니다.'});
      }).catch(() => {
        this.setState({ output: 'reject ' + this.state.count + '초가 지났습니다.'});
      });
    }, 1000);
    */
  },
  countUp() {
    const count = this.state.count;
    this.setState({ count: count + 1 });
    return this.state.count;
  },
  render() {
    const caseColor = { color: this.state.count < 10 ? 'red' : 'blue' };
    return (
      <div>
        <h1 style={caseColor}>{this.state.output}</h1>
      </div>
    );
  }
});

export default TestArea;
