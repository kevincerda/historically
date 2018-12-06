import React from 'react';

const ResultsItem = props => {
  return (
    <div className="results-item">
      <div id="location">{props.item.category2}</div>
      <div id="date">{props.item.date}</div>
      <div id="description">{props.item.description}</div>
      <div id="granularity">{props.item.granularity}</div>
      <div id="language">{props.item.language}</div>
    </div>
  );
};

export default ResultsItem;
