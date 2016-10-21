import React, { Component, PropTypes } from 'react';

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this); //  요거때문에 개 삽질 어휴
  }
  handleClick(e) {
    if (e && e.key !== 'Enter') {
      return;
    }
    if (this.text !== null && this.text.value !== '') {
      const trimmed = this.text.value.trim();
      this.props.onAddClick(trimmed);
      this.text.value = '';
      this.text.focus();
    }
  }
  render() {
    return (
      <div className="input-group" >
        <input
          className="form-control"
          type="text"
          placeholder="할 일을 입력하세요."
          ref={(ref) => { this.text = ref; }}
          onKeyPress={this.handleClick}
        />
        <span className="input-group-btn">
          <button
            className="btn btn-default"
            onClick={this.handleClick}
          >
            Add
          </button>
        </span>
      </div>
    );
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired,
};
