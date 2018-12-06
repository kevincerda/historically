import React, { Component } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import ResultsItem from './ResultsItem.jsx';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchQueryValue: '',
      pageLimit: 10,
      pageCount: null,
      pageRangeDisplayed: null,
      marginPagesDisplayed: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ searchQueryValue: e.target.value });
  }

  handleSubmit(e) {
    event.preventDefault();
    axios
      .get(
        `/events?_page&q=${this.state.searchQueryValue}&_page=${
          this.state.pageLimit
        }`
      )
      .then(res => {
        this.setState({
          data: res.data,
          resultsCount: res.headers['x-total-count'],
          pageLinks: res.headers.link.split(',')
        });
      })
      .then(() => {
        this.setState({ pageCount: this.state.pageLinks.length });
      })
      .catch(error => {
        console.error('Error', error);
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
          {this.state.data
            ? this.state.data.map((item, index) => {
                return <ResultsItem item={item} key={index} />;
              })
            : null}
        </div>
      </div>
    );
  }
}
