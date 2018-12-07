import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

export default class Paginate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQueryValue: props.searchQueryValue,
      page: props.page,
      pageCount: props.pageCount
    };
    this.updateDataFromPageClick = this.props.updateDataFromPageClick.bind(
      this
    );
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick(data) {
    let page = data.selected + 1;
    axios
      .get(`/events?q=${this.state.searchQueryValue}&_page=${page}`)
      .then(res => {
        this.updateDataFromPageClick({
          page: page,
          searchResults: res.data
        });
      })
      .catch(error => {
        console.log('Error', error);
      });
  }

  render() {
    return (
      <div className="pagination">
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={8}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    );
  }
}
