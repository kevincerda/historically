import React, { Component } from 'react';
import axios from 'axios';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQueryValue: '',
      page: 1,
      resultsCount: undefined,
      pageLinks: undefined,
      pageCount: undefined
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
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
        this.updateData(res.data);
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

// .then(res => {
//   this.setState({
//     resultsCount: res.headers['x-total-count']
//   });
//   console.log(res.data);
// })
// .then(() => {
//   const numberOfPages = Math.ceil(this.state.resultsCount / 10);
//   this.setState({ pageCount: numberOfPages });
// })
// .catch(error => {
//   console.error('Error', error);
// });
