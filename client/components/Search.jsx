import React, { Component } from 'react';
import axios from 'axios';

export default class Search extends Component {
  constructor() {
    super();
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    event.preventDefault();
    axios
      .get(`/events?_page&q=${this.state.value}&_page`)
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(error => {
        console.error('Error', error);
      });
  }

  render() {
    return (
      <div id="search">
        <form>
          <label>Search</label>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
