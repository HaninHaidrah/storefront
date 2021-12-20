import React from "react";
import { connect } from "react-redux";
import { Card, CardContent, CardMedia, Typography,Button } from "@mui/material";
import "../index.css";
import { added } from "../store/cart";


function Cart(props) {
  return (
    <>
      {props.cart.map((product) => {
        if (props.catogries.name == product.name) {
          return (
            <div className="jss66">
              <h2> {product.name}</h2>

              <div className="container1">
                <Card sx={{ maxWidth: 345 }} className="container">
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.img}
                    alt="I phone"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Describtion: {product.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      In Stock :{product.inventoryCount}
                    </Typography>
                  </CardContent>
                  <Button
                  variant="contained"
                  onClick={() => props.added(product)}
                >
                  {" "}
                  Add to Cart
                </Button>
                </Card>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.AddedProducts,
  catogries: state.catogries.active,
});
const mapDispatchToProps = { added };

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
