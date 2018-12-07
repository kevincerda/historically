import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';

export default class Paginate extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      resultsCount: undefined,
      pageLinks: undefined,
      pageCount: undefined
    };
  }
  render() {
    return (
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={this.state.pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={9}
        onPageChange={this.handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    );
  }
}
