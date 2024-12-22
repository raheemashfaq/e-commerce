import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import img1 from "../Assets/Dates.jpg";
import img2 from "../Assets/BabySpinach.jpg";
import img3 from "../Assets/blueberries.jpg";
import img4 from "../Assets/BrusselsSprouts.jpg";
import img5 from "../Assets/CelerySticks.jpg";
import img6 from "../Assets/clementines.jpg";
import img7 from "../Assets/Corn.jpg";
import img8 from "../Assets/Cucumber.jpg";
import img9 from "../Assets/Dates.jpg";
import { Category } from "@mui/icons-material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Button from "@mui/material/Button";

const ProductCard = () => {
  const productCard = [
    {
      id: 1,
      title: "apple",
      brand: "2pfund",
      price: "1.6$",
      img: img1,
      catogary: "Bakery",
    },
    {
      id: 2,
      title: "dates",
      brand: "2pfund",
      price: "1.6$",
      img: img2,
      catogary: "Bakery",
    },
    {
      id: 3,
      title: "apple",
      brand: "2pfund",
      price: "1.6$",
      img: img3,
      catogary: "Bakery",
    },
    {
      id: 4,
      title: "apple",
      brand: "2pfund",
      price: "1.6$",
      img: img4,
      catogary: "Bakery",
    },
    {
      id: 5,
      title: "apple",
      brand: "2pfund",
      price: "1.6$",
      img: img5,
      catogary: "Bakery",
    },
    {
      id: 6,
      title: "apple",
      brand: "2pfund",
      price: "1.6$",
      img: img6,
      catogary: "Bakery",
    },
    {
      id: 7,
      title: "apple",
      brand: "2pfund",
      price: "1.6$",
      img: img7,
      catogary: "Bakery",
    },
    {
      id: 8,
      title: "apple",
      brand: "2pfund",
      price: "1.6$",
      img: img8,
      catogary: "Bakery",
    },
    {
      id: 9,
      title: "apple",
      brand: "2pfund",
      price: "1.6$",
      img: img9,
      catogary: "Bakery",
    },
    {
      id: 10,
      title: "apple",
      brand: "2pfund",
      price: "1.6$",
      img: img4,
      catogary: "Bakery",
    },
  ];
  return (
    <>
      <Grid container spacing={2} className="container-fluid">
        {productCard.map((item) => (
          <Grid item md={3}>
            <Card sx={{ padding: "10px" }}>
              <img src={item.img} width={"200px"} alt="" />
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
                  {item.price}
                </Typography>
                <Button
                  type="button"
                  className="btn"
                  sx={{
                    color: "#009F7F",
                    "&:hover": { background: "#009F7F", color: "#fff" },

                    borderRadius: "20px",
                  }}
                >
                  <ShoppingBasketIcon /> Add Item
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductCard;
