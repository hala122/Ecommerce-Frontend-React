import React, { Component } from "react";
import Category from "../Category/category";

const Loading = props => {
  return (
    <>
      <div className="container">
        <Category></Category>
        <section class="item-listing">
          <div class="item-listing__tools">
            <select class="form-control" name="" id="">
              <option value="1">Featured</option>
              <option value="2">Price low to high</option>
              <option value="3">Price high to low</option>
              <option value="4">Name</option>
            </select>
            <a class="action-btn" href="#">
              <i class="fas fa-plus"></i>
            </a>
          </div>
          <div
            class="item-listing__items item-listing--3items"
            style={{ width: "100%" }}
          ></div>
          <div className="loading"></div>
        </section>
      </div>
    </>
  );
};

export default Loading;
