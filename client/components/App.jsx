import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import ResultsItem from './ResultsItem.jsx';
import Paginate from './Paginate.jsx';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchResults: ''
    };
    this.updateData = this.updateData.bind(this);
  }

  updateData(data) {
    this.setState({ searchResults: data });
  }

  render() {
    return (
      <div id="main-wrapper">
        <NavBar updateData={this.updateData} />
        <div id="results">
          {this.state.searchResults ? (
            <ResultsItem data={this.state.searchResults} />
          ) : null}
          {this.state.pageCount ? <Paginate /> : null}
        </div>
      </div>
    );
  }
}
