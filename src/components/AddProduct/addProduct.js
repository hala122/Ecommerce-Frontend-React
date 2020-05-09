import React, { Component } from "react";
import addImage from "../../img/products/product-grey-7.jpg";
import "../../css/style.css";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actionProduct";
import { Redirect } from "react-router-dom";
import { addProduct } from "../../API/product";

class AddProduct extends Component {
  addProductHandler = e => {
    e.preventDefault();
    const {
      productName: { value: productName },
      description: { value: description },
      price: { value: price },
      isOnSale: { value: isOnSale },
      discount: { value: discount },
      category: { value: category }
    } = e.target.elements;
    let product = {
      productName,
      description,
      price,
      isOnSale,
      discount,
      category
    };
    this.props
      .onAdd(product)
      .then(res => {
        this.props.history.push("/listItem");
      })
      .catch(err => {
        alert("Added Failed Try Again");
      });
  };
  render() {
    if (
      localStorage.getItem("token") === null &&
      localStorage.getItem("useris") === null
    ) {
      return (
        <div className="rl" style={{ border: "1px solid black" }}>
          {/* <h4 style={{ color: "black" }}>First Register Or Login :)</h4> */}
        </div>
      );
    } else {
      return (
        <>
          {/* <!-- add Item --> */}
          <div className="add-product container">
            <form
              onSubmit={this.addProductHandler}
              style={{
                margin: "auto",
                border: "1px solid #095490 ",
                padding: "20px"
              }}
            >
              <h1 style={{ textAlign: "center", color: "#095490" }}>
                AddProduct
              </h1>
              <label htmlFor="">Name</label>
              <input
                className="form-control"
                type="text"
                name="productName"
                id=""
              />

              <label htmlFor="">Description</label>
              <textarea
                className="form-control"
                name="description"
                id=""
                cols="30"
                rows="4"
              ></textarea>

              <label htmlFor="">Price</label>
              <input className="form-control" type="text" name="price" id="" />

              <label htmlFor="">Satus</label>
              <div className="form-group__radios">
                <div className="form-group__radio">
                  <input type="radio" name="isOnSale" id="" value="true" />
                  <span>On Sale</span>
                </div>
                <div className="form-group__radio">
                  <input type="radio" name="isOnSale" id="" value="false" />
                  <span>Not On Sale</span>
                </div>
              </div>

              <label htmlFor="">Discount</label>
              <input
                className="form-control"
                type="text"
                name="discount"
                id=""
              />

              <label htmlFor="">Category</label>
              <select className="form-control" name="category" id="">
                <option value="Arts & Crafts">Arts & Crafts</option>
                <option value="Automotive">Automotive</option>
                <option value="Baby">Baby</option>
                <option value="Books">Books</option>
                <option value="Eletronics">Eletronics</option>
                <option value="Women's Fashion">Women's Fashion</option>
                <option value="Men's Fashion">Men's Fashion</option>
                <option value="Health & Household">Health & Household</option>
                <option value="Home & Kitchen">Home & Kitchen</option>
                <option value="Military Accessories">
                  Military Accessories
                </option>
                <option value="Movies & Television">Movies & Television</option>
                <option value="Sports & Outdoors">Sports & Outdoors</option>
                <option value="Tools & Home Improvement">
                  Tools & Home Improvement
                </option>
                <option value="Toys & Games">Toys & Games</option>
              </select>

              <button
                className="btn btn--primary"
                type="submit"
                style={{
                  backgroundColor: "#095490",
                  margin: "auto",
                  width: "200px",
                  fontSize: "20px"
                }}
              >
                Add
              </button>
            </form>
          </div>
        </>
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAdd: product => dispatch(actionTypes.addProduct(product))
  };
};

export default connect(null, mapDispatchToProps)(AddProduct);
