import React from 'react';

const ResultsItem = props => {
  let resultItems = props.data.map((item, index) => {
    return (
      <div>
        <div className="results-item results-item-wrapper" key={index}>
          <div id="results-left-col">
            <div id="location">{item.category2}</div>
            <div id="date">({item.date})</div>
          </div>
          <div id="results-right-col">
            <div id="description">{item.description}</div>
          </div>
        </div>
        <div className="line-divider" />
      </div>
    );
  });
  return (
    <div className="column-3">
      <div className="results">{resultItems}</div>
    </div>
  );
};

export default ResultsItem;
