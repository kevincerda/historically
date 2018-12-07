import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import ResultsItem from './ResultsItem.jsx';
import Paginate from './Paginate.jsx';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchQueryValue: '',
      searchResults: [],
      page: 1,
      resultsCount: undefined,
      pageCount: undefined
    };
    this.updateData = this.updateData.bind(this);
    this.updateDataFromPageClick = this.updateDataFromPageClick.bind(this);
  }

  updateData(dataObj) {
    const {
      searchQueryValue,
      searchResults,
      resultsCount,
      pageCount
    } = dataObj;
    this.setState({
      searchQueryValue: searchQueryValue,
      searchResults: searchResults,
      resultsCount: resultsCount,
      pageCount: pageCount
    });
  }

  updateDataFromPageClick(dataObj) {
    const { searchResults, page } = dataObj;
    this.setState({
      searchResults: searchResults,
      page: page
    });
  }

  render() {
    return (
      <div id="main-wrapper">
        <NavBar
          updateData={this.updateData}
          page={this.state.page}
          resultsCount={this.state.resultsCount}
          pageLinks={this.state.pageLinks}
          pageCount={this.state.pageCount}
        />
        <div className="column-3" id="results">
          {this.state.searchResults ? (
            <ResultsItem data={this.state.searchResults} />
          ) : null}
          {this.state.pageCount ? (
            <Paginate
              searchQueryValue={this.state.searchQueryValue}
              searchResults={this.state.searchResults}
              page={this.state.page}
              pageCount={this.state.pageCount}
              updateDataFromPageClick={this.updateDataFromPageClick}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
