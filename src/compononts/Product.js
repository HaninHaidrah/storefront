import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import "../index.css";

import { added,deleteProduct } from "../store/cart";

import { connect } from "react-redux";

function Product(props) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
    >
      {props.products.map((product) => {
        if (product.categoryAssociation == props.catogries) {
          return (
            <>
              <Card
                sx={{ maxWidth: 345 }}
                className="container"
                key={product.name}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={product.img}
                  alt="I phone"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.inventoryCount}
                  </Typography>
                </CardContent>
                <Button
                  variant="contained"
                  onClick={() => props.added(product)}
                >
                  {" "}
                  Add to Cart
                </Button>
                <Button
                  variant="contained"
                  onClick={() => props.deleteProduct(product)}
                >
                  {" "}
                  Delete From Cart
                </Button>
                
              </Card>
            </>
          );
        }
      })}
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  catogries: state.catogries.active,
  products: state.product.products,
});

const mapDispatchToProps = { added ,deleteProduct};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
