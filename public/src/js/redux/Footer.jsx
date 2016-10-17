import React, { Component, PropTypes } from 'react';

export default class Footer extends Component {
  renderFilter(filter, name, type) {
    if (filter === this.props.filter) {
      return (
        <button
          className="btn btn-primary"
        >
          {name + '' + this.props.countTodos(type)}
        </button>
      );
    }
    return (
      <button
        className="btn btn-default"
        onClick={(e) => {
          e.preventDefault();
          this.props.onFilterChange(filter);
        }}
      >
        {name + '' + this.props.countTodos(type)}
      </button>
    );
  }

  render() {
    return (
      <div className="btn-group">
        {this.renderFilter('SHOW_ALL', '모두')}
        {this.renderFilter('SHOW_COMPLETED', '완료', 'COMPLETED')}
        {this.renderFilter('SHOW_ACTIVE', '진행 중', 'ACTIVE')}
      </div>
    );
  }
}

Footer.propTypes = {
  countTodos: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE',
  ]).isRequired,
};
