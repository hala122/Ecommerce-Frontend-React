import React from "react";
import { connect } from "react-redux";
const paging = props => {
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(props.products.length / props.productsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }
  const pageNumbersList = pageNumbers.map(number => {
    return (
      <div
        onClick={event => {
          props.onChange(Number(event.target.textContent));
        }}
        key={number}
        className="paging__number"
      >
        {number}
      </div>
    );
  });
  return (
    <>
      <div className="paging">
        <div
          className="paging__arrow"
          onClick={() => {
            props.onDecrease();
          }}
        >
          <i className="fas fa-angle-left"></i>
        </div>
        {pageNumbersList}
        <div
          className="paging__arrow"
          onClick={() => {
            props.onIncrease();
          }}
        >
          <i className="fas fa-angle-right"></i>
        </div>
      </div>
    </>
  );
};

export default paging;
