import React from "react";
import { useParams } from "react-router";
import { Box, Typography, Card, Button } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useDispatch } from "react-redux";
import { addItems, increaseQuan } from "../../features/counter/counterSlice";
import { productCard } from "./detailDummy";
const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = productCard.find((item) => item.id === parseInt(id));

  if (!product) {
    return <Typography variant="h4">Product not found</Typography>;
  }

  return (
    <Box
      sx={{
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        background: "",
      }}
    >
      <Card sx={{ padding: "20px", maxWidth: "600px" }}>
        <img src={product.img} alt={product.title} style={{ width: "50%" }} />
        <Typography variant="h4" sx={{ marginTop: "10px" }}>
          {product.title}
        </Typography>
        <Typography variant="h6">Brand: {product.brand}</Typography>
        <Typography variant="body1">Category: {product.category}</Typography>
        <Typography variant="body1">
          Description: {product.description}
        </Typography>
        <Typography variant="h5" sx={{ color: "#009F7F" }}>
          Price: {product.price}
        </Typography>
        <Button
          variant="contained"
          sx={{
            marginTop: "20px",
            backgroundColor: "#009F7F",
            "&:hover": { background: "#006F57" },
          }}
          onClick={() => {
            dispatch(addItems(product));
          }}
        >
          <ShoppingBasketIcon /> Add to Cart
        </Button>
      </Card>
    </Box>
  );
};

export default ProductDetails;
