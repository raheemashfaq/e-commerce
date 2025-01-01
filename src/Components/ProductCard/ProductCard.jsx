import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Card from "@mui/material/Card";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useDispatch } from "react-redux";
import { addItems } from "../../features/counter/counterSlice";
import { Link } from "react-router";
import { dummyProducts } from "./dummyProData";

const ProductCard = ({ selectedCategory }) => {
  const [visibleCount, setVisibleCount] = useState(15);
  const dispatch = useDispatch();

  const filteredProducts = dummyProducts.filter(
    (item) =>
      selectedCategory === "" ||
      item.category.toLowerCase() === selectedCategory
  );

  const loadMoreItems = () => {
    setVisibleCount((prevCount) => prevCount + 12);
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        className="container-fluid"
        sx={{ mt: "10px" }}
      >
        {filteredProducts.slice(0, visibleCount).map((item) => (
          <Grid item md={4} sm={6} xs={12} key={item.id}>
            <Link to={`/details/${item.id}`} style={{ textDecoration: "none" }}>
              <Card
                sx={{ padding: "10px", maxWidth: "300px", margin: "0 auto" }}
              >
                <img
                  src={item.img}
                  style={{ maxWidth: "100%", height: "auto" }}
                  alt={item.title}
                />
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body1">{item.brand}</Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h5" sx={{ color: "#009F7F" }}>
                    ${item.price}
                  </Typography>
                  <Button
                    type="button"
                    sx={{
                      color: "#009F7F",
                      "&:hover": { background: "#009F7F", color: "#fff" },
                      borderRadius: "20px",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(addItems(item));
                    }}
                  >
                    <ShoppingBasketIcon /> Add Item
                  </Button>
                </Box>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>

      {visibleCount < filteredProducts.length && (
        <Box sx={{ textAlign: "center", marginTop: "20px" }}>
          <Button
            variant="contained"
            sx={{
              background: "#009F7F",
              "&:hover": { background: "#007F65" },
            }}
            onClick={loadMoreItems}
          >
            Load More
          </Button>
        </Box>
      )}
    </>
  );
};

export default ProductCard;
