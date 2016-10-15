import React, { Component, PropTypes } from 'react';

export default class Footer extends Component {
  renderFilter(filter, name) {
    if (filter === this.props.filter) {
      return (
        <button
          className="btn btn-primary"
        >
          {name}
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
        {name}
      </button>
    );
  }

  render() {
    return (
      <div className="btn-group">
        {this.renderFilter('SHOW_ALL', '모두')}
        {this.renderFilter('SHOW_COMPLETED', '완료')}
        {this.renderFilter('SHOW_ACTIVE', '진행 중')}
      </div>
    );
  }
}

Footer.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE',
  ]).isRequired,
};
