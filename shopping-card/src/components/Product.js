import React, { Component } from "react";
import { AddCart } from "../actions";
import { connect } from "react-redux";
let _products = [
  {
    id: 1,
    name: "Elma",
    price: 15.42,
  },
  {
    id: 2,
    name: "Armut",
    price: 35.63,
  },
  {
    id: 3,
    name: "Portakal",
    price: 48.8,
  },
  {
    id: 4,
    name: "Havuç",
    price: 3.5,
  },
  {
    id: 5,
    name: "Domates",
    price: 15.1,
  },
];
function Product({ AddCart }) {
  return (
    <div className="row" style={{ marginTop: "10px" }}>
      <div className="col-md-12">
        <div className="row">
          {_products.map((item, index) => (
            <div
              key={index}
              className="col-md-2"
              style={{ marginBottom: "10px" }}
            >
              <h5>{item.name}</h5>
              <h5>{item.price}$</h5>
              <span
                className="badge badge-primary"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  console.log(item);
                  AddCart(item);
                }}
              >
                Add Cart
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    _products: state._todoProduct,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    AddCart: (item) => dispatch(AddCart(item)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);
