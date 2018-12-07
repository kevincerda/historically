import React, { Component } from 'react';
import axios from 'axios';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQueryValue: '',
      page: props.page,
      resultsCount: props.resultsCount,
      pageLinks: props.pageLinks,
      pageCount: props.pageCount
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateData = this.props.updateData.bind(this);
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
          resultsCount: res.headers['x-total-count'],
          pageCount: Math.ceil(res.headers['x-total-count'] / 10)
        });
      })
      .then(() => {
        this.updateData({
          searchQueryValue: this.state.searchQueryValue,
          searchResults: this.state.data,
          resultsCount: this.state.resultsCount,
          pageCount: this.state.pageCount
        });
      })
      .catch(error => {
        console.error('Error', error);
      });
  }

  render() {
    return (
      <div id="search-bar">
        <form>
          <input
            type="text"
            value={this.state.searchQueryValue}
            onChange={this.handleChange}
            placeholder="What are you searching for?"
            id={'header-search'}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
