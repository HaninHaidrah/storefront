import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import "../index.css";

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
              <Card sx={{ maxWidth: 345 }} className="container">
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
                <CardActions></CardActions>
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

export default connect(mapStateToProps)(Product);
