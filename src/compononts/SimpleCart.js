import React from "react";
import { connect } from "react-redux";
import "../index.css";
import { display } from "../store/catogry";

function SimpleCart(props) {
  console.log(props.cart, "prooooooooooooopscart");
  return (
    <>
      <div className="simple-cart">
        <ul>
          {props.cart.map((product) => {
            return (
              <>
                <li key={product.name} onClick={() => props.display(product)} >{product.name}  <button>x</button> </li>
               
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.AddedProducts,
});
const mapDispatchToProps = { display };

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
