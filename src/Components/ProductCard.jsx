import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItems, increment } from "../features/counter/counterSlice";
import { Link } from "react-router";

//Bakery
import img1 from "../Assets/Dates.jpg";
import img2 from "../Assets/BabySpinach.jpg";
import img3 from "../Assets/blueberries.jpg";
import img4 from "../Assets/BrusselsSprouts.jpg";
import img5 from "../Assets/CelerySticks.jpg";
import img6 from "../Assets/clementines.jpg";
import img7 from "../Assets/Corn.jpg";
import img8 from "../Assets/Cucumber.jpg";
import img9 from "../Assets/Dates.jpg";
//Bakery
import img10 from "../Assets/bak1.png";
import img11 from "../Assets/bak2.jpg";
import img12 from "../Assets/bak3.jpg";
import img13 from "../Assets/bak4.jpg";
import img14 from "../Assets/bak5.jpg";
import img15 from "../Assets/bak6.jpg";
import img16 from "../Assets/bak7.jpg";
import img17 from "../Assets/bak8.jpg";
import img18 from "../Assets/bak9.jpg";
import img19 from "../Assets/bak10.jpg";
import img20 from "../Assets/bak11.jpg";
import img21 from "../Assets/bak12.jpg";
//Makup
import img22 from "../Assets/mak1.jpg";
import img23 from "../Assets/mak2.jpg";
import img24 from "../Assets/mak3.jpg";
import img25 from "../Assets/mak4.jpg";
import img26 from "../Assets/mak5.jpg";
import img27 from "../Assets/mak6.jpg";
import img28 from "../Assets/mak7.jpg";
import img29 from "../Assets/mak9.jpg";
import img30 from "../Assets/mak10.jpg";
import img31 from "../Assets/mak11.jpg";
import img32 from "../Assets/mak12.png";
//Bags
import img34 from "../Assets/bag1.jpg";
import img35 from "../Assets/bag2.jpg";
import img36 from "../Assets/bag3.jpg";
import img37 from "../Assets/bag4.jpg";
import img38 from "../Assets/bag5.jpg";
import img39 from "../Assets/bag6.jpg";
import img40 from "../Assets/bag7.jpg";
import img41 from "../Assets/bag8.jpg";
import img42 from "../Assets/bag9.jpg";
import img43 from "../Assets/bag10.jpg";
import img44 from "../Assets/bag11.jpg";
import img45 from "../Assets/bag12.jpg";
//Clothing
import img46 from "../Assets/C1mango.jpg";
import img47 from "../Assets/C2FOREVER.jpg";
import img48 from "../Assets/C3DOROTHY_PERKINS.jpg";
import img49 from "../Assets/C4Fold_over.jpg";
import img50 from "../Assets/C5Solid_Notch.jpg";
import img51 from "../Assets/C6Notch_Lapel.jpg";
//Fruits
import img52 from "../Assets/F1Apples.jpg";
import img53 from "../Assets/F2blueberries.jpg";
import img54 from "../Assets/F3clementines.jpg";
import img55 from "../Assets/F4pears.jpg";
import img56 from "../Assets/F5RedCherries.jpg";
import img57 from "../Assets/F6strawberry.jpg";
const ProductCard = ({ selectedCategory }) => {
  const productCard = [
    {
      id: 1,
      title: "apple",
      brand: "2pfund",
      price: "1.6$",
      img: img1,
      category: "Grocery",
    },
    {
      id: 2,
      title: "BabySpinach",
      brand: "2pfund",
      price: "1.6$",
      img: img2,
      category: "Grocery",
    },
    {
      id: 3,
      title: "blueberries",
      brand: "2pfund",
      price: "1.6$",
      img: img3,
      category: "Grocery",
    },
    {
      id: 4,
      title: "BrusselsSprouts",
      brand: "2pfund",
      price: "1.6$",
      img: img4,
      category: "Grocery",
    },
    {
      id: 5,
      title: "CelerySticks",
      brand: "2pfund",
      price: "1.6$",
      img: img5,
      category: "Grocery",
    },
    {
      id: 6,
      title: "clementines",
      brand: "2pfund",
      price: "1.6$",
      img: img6,
      category: "Grocery",
    },
    {
      id: 7,
      title: "Corn",
      brand: "2pfund",
      price: "1.6$",
      img: img7,
      category: "Grocery",
    },
    {
      id: 8,
      title: "Cucumber",
      brand: "2pfund",
      price: "1.6$",
      img: img8,
      category: "Grocery",
    },
    {
      id: 9,
      title: "Dates",
      brand: "2pfund",
      price: "1.6$",
      img: img9,
      category: "Grocery",
    },
    {
      id: 10,
      title: "apple",
      brand: "2pfund",
      price: "1.6$",
      img: img4,
      category: "Grocery",
    },
    {
      id: 11,
      title: "Orange juice",
      brand: "2pfund",
      price: "1.6$",
      img: img10,
      category: "Bakery",
    },
    {
      id: 12,
      title: "Purple juice",
      brand: "2pfund",
      price: "1.6$",
      img: img11,
      category: "Bakery",
    },
    {
      id: 13,
      title: "milk",
      brand: "2pfund",
      price: "1.6$",
      img: img12,
      category: "Bakery",
    },
    {
      id: 14,
      title: "mango milk",
      brand: "2pfund",
      price: "1.6$",
      img: img13,
      category: "Bakery",
    },
    {
      id: 15,
      title: "peach juice",
      brand: "2pfund",
      price: "1.6$",
      img: img14,
      category: "Bakery",
    },
    {
      id: 16,
      title: "red bott",
      brand: "2pfund",
      price: "1.6$",
      img: img15,
      category: "Bakery",
    },
    {
      id: 17,
      title: "kaava",
      brand: "2pfund",
      price: "1.6$",
      img: img16,
      category: "Bakery",
    },
    {
      id: 18,
      title: "makeup",
      brand: "2pfund",
      price: "1.6$",
      img: img17,
      category: "Bakery",
    },
    {
      id: 19,
      title: "coeffee",
      brand: "2pfund",
      price: "1.6$",
      img: img18,
      category: "Bakery",
    },
    {
      id: 20,
      title: "coeffee",
      brand: "2pfund",
      price: "1.6$",
      img: img19,
      category: "Bakery",
    },
    {
      id: 21,
      title: "black tea",
      brand: "2pfund",
      price: "1.6$",
      img: img20,
      category: "Bakery",
    },
    {
      id: 22,
      title: "green tea",
      brand: "2pfund",
      price: "1.6$",
      img: img21,
      category: "Bakery",
    },
    {
      id: 23,
      title: "makeup",
      brand: "2pfund",
      price: "1.6$",
      img: img22,
      category: "Makeup",
    },
    {
      id: 24,
      title: "makeup",
      brand: "2pfund",
      price: "1.6$",
      img: img23,
      category: "Makeup",
    },
    {
      id: 25,
      title: "makeup",
      brand: "2pfund",
      price: "1.6$",
      img: img24,
      category: "Makeup",
    },
    {
      id: 26,
      title: "makeup",
      brand: "2pfund",
      price: "1.6$",
      img: img25,
      category: "Makeup",
    },
    {
      id: 27,
      title: "makeup",
      brand: "2pfund",
      price: "1.6$",
      img: img26,
      category: "Makeup",
    },
    {
      id: 28,
      title: "makeup",
      brand: "2pfund",
      price: "1.6$",
      img: img27,
      category: "Makeup",
    },
    {
      id: 29,
      title: "makeup",
      brand: "2pfund",
      price: "1.6$",
      img: img28,
      category: "Makeup",
    },
    {
      id: 30,
      title: "makeup",
      brand: "2pfund",
      price: "1.6$",
      img: img29,
      category: "Makeup",
    },
    {
      id: 31,
      title: "makeup",
      brand: "2pfund",
      price: "1.6$",
      img: img30,
      category: "Makeup",
    },
    {
      id: 32,
      title: "makeup",
      brand: "2pfund",
      price: "1.6$",
      img: img31,
      category: "Makeup",
    },
    {
      id: 33,
      title: "makeup",
      brand: "2pfund",
      price: "1.6$",
      img: img32,
      category: "Makeup",
    },
    {
      id: 34,
      title: "bag",
      brand: "2pfund",
      price: "1.6$",
      img: img38,
      category: "Makeup",
    },
    {
      id: 35,
      title: "bag",
      brand: "2pfund",
      price: "1.6$",
      img: img34,
      category: "Makeup",
    },
    {
      id: 36,
      title: "bag",
      brand: "2pfund",
      price: "1.6$",
      img: img35,
      category: "Makeup",
    },
    {
      id: 37,
      title: "bag",
      brand: "2pfund",
      price: "1.6$",
      img: img36,
      category: "Makeup",
    },
    {
      id: 38,
      title: "bag",
      brand: "2pfund",
      price: "1.6$",
      img: img37,
      category: "Makeup",
    },
    {
      id: 39,
      title: "bag",
      brand: "2pfund",
      price: "1.6$",
      img: img46,
      category: "Clothing",
    },
    {
      id: 40,
      title: "mango",
      brand: "2pfund",
      price: "1.6$",
      img: img47,
      category: "Clothing",
    },
    {
      id: 41,
      title: "FOREVER",
      brand: "2pfund",
      price: "1.6$",
      img: img48,
      category: "Clothing",
    },
    {
      id: 42,
      title: "DOROTHY_PERKINS.jpg",
      brand: "2pfund",
      price: "1.6$",
      img: img49,
      category: "Clothing",
    },
    {
      id: 43,
      title: "Fold_over.jpg",
      brand: "2pfund",
      price: "1.6$",
      img: img49,
      category: "Clothing",
    },
    {
      id: 44,
      title: "Solid_Notch.jpg",
      brand: "2pfund",
      price: "1.6$",
      img: img50,
      category: "Clothing",
    },
    {
      id: 45,
      title: "Notch_Lapel.jpg",
      brand: "2pfund",
      price: "1.6$",
      img: img51,
      category: "Clothing",
    },
    {
      id: 46,
      title: "Notch_Lapel.jpg",
      brand: "2pfund",
      price: "1.6$",
      img: img52,
      category: "Fruits",
    },
    {
      id: 47,
      title: "Notch_Lapel.jpg",
      brand: "2pfund",
      price: "1.6$",
      img: img53,
      category: "Fruits",
    },
    {
      id: 48,
      title: "Notch_Lapel.jpg",
      brand: "2pfund",
      price: "1.6$",
      img: img54,
      category: "Fruits",
    },
    {
      id: 49,
      title: "Notch_Lapel.jpg",
      brand: "2pfund",
      price: "1.6$",
      img: img55,
      category: "Fruits",
    },
    {
      id: 50,
      title: "Notch_Lapel.jpg",
      brand: "2pfund",
      price: "1.6$",
      img: img56,
      category: "Fruits",
    },
    {
      id: 51,
      title: "Notch_Lapel.jpg",
      brand: "2pfund",
      price: "1.6$",
      img: img57,
      category: "Fruits",
    },
  ];

  const filteredProducts = productCard.filter(
    (item) =>
      selectedCategory === "" ||
      item.category.toLowerCase() === selectedCategory
  );
  const dispatch = useDispatch();

  return (
    <>
      <Grid
        container
        spacing={2}
        className="container-fluid"
        sx={{ mt: "10px" }}
      >
        {filteredProducts?.slice(0, 30).map((item) => (
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
                    {item.price}
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
    </>
  );
};

export default ProductCard;
