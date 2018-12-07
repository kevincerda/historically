import React, { Component } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import ResultsItem from './ResultsItem.jsx';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchQueryValue: [],
      page: 1,
      data: undefined,
      resultsCount: undefined,
      pageLinks: undefined,
      pageCount: undefined
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handleChange(e) {
    this.setState({ searchQueryValue: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .get(`/events?q=${this.state.searchQueryValue}&_page=${this.state.page}`)
      .then(res => {
        this.setState({
          data: res.data,
          resultsCount: res.headers['x-total-count']
        });
      })
      .then(() => {
        const numberOfPages = Math.ceil(this.state.resultsCount / 10);
        this.setState({ pageCount: numberOfPages });
      })
      .catch(error => {
        console.error('Error', error);
      });
  }

  handlePageClick(data) {
    let page = data.selected + 1;
    this.setState({ page: page });
    axios
      .get(`/events?q=${this.state.searchQueryValue}&_page=${this.state.page}`)
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(error => {
        console.log('Error', error);
      });
  }

  render() {
    return (
      <div>
        <div id="search-form">
          <form>
            <label>Search</label>
            <input
              type="text"
              value={this.state.searchQueryValue}
              onChange={this.handleChange}
            />
            <button onClick={this.handleSubmit}>Submit</button>
          </form>
        </div>
        <div id="results">
          {this.state.data ? <ResultsItem data={this.state.data} /> : null}
          {this.state.pageCount ? (
            <ReactPaginate
              previousLabel={'<'}
              nextLabel={'>'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={4}
              pageRangeDisplayed={10}
              onPageChange={this.handlePageClick}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
