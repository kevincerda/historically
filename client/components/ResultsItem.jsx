import React from 'react';

const ResultsItem = props => {
  let resultItems = props.data.map((item, index) => {
    return (
      <div className="results-item" key={index}>
        <div id="location">{item.category2}</div>
        <div id="date">{item.date}</div>
        <div id="description">{item.description}</div>
        <div id="granularity">{item.granularity}</div>
        <div id="language">{item.language}</div>
      </div>
    );
  });
  return <div id="results">{resultItems}</div>;
};

export default ResultsItem;
