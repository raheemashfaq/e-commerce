import React from "react";
import { useParams } from "react-router";
import { Box, Typography, Card, Button } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useDispatch } from "react-redux";
import {
  addItems,
  increaseQuan,
  increment,
} from "../features/counter/counterSlice";
import img1 from "../Assets/Dates.jpg";
import img2 from "../Assets/BabySpinach.jpg";
import img3 from "../Assets/blueberries.jpg";
import img4 from "../Assets/BrusselsSprouts.jpg";
import img5 from "../Assets/CelerySticks.jpg";
import img6 from "../Assets/clementines.jpg";
import img7 from "../Assets/Corn.jpg";
import img8 from "../Assets/Cucumber.jpg";
import img9 from "../Assets/Dates.jpg";
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
//Clothing
import img46 from "../Assets/C1mango.jpg";
import img47 from "../Assets/C2FOREVER.jpg";
import img48 from "../Assets/C3DOROTHY_PERKINS.jpg";
import img49 from "../Assets/C4Fold_over.jpg";
import img50 from "../Assets/C5Solid_Notch.jpg";
import img51 from "../Assets/C6Notch_Lapel.jpg";
const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const productCard = [
    {
      id: 1,
      title: "apple",
      brand: "2pfund",
      price: "1.6$",
      img: img1,
      catogary: "Grocery",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 2,
      title: "dates",
      brand: "2pfund",
      price: "1.6$",
      img: img2,
      catogary: "Grocery",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 3,
      title: "blueberries",
      brand: "2pfund",
      price: "1.6$",
      img: img3,
      catogary: "Grocery",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 4,
      title: "Brussels Sprouts",
      brand: "2pfund",
      price: "1.6$",
      img: img4,
      catogary: "Grocery",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 5,
      title: "Celery Sticks",
      brand: "2pfund",
      price: "1.6$",
      img: img5,
      catogary: "Grocery",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 6,
      title: "Clementines",
      brand: "2pfund",
      price: "1.6$",
      img: img6,
      catogary: "Grocery",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 7,
      title: "Corn",
      brand: "2pfund",
      price: "1.6$",
      img: img7,
      catogary: "Grocery",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 8,
      title: "Cucumber",
      brand: "2pfund",
      price: "1.6$",
      img: img8,
      catogary: "Grocery",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 9,
      title: "Dates",
      brand: "2pfund",
      price: "1.6$",
      img: img9,
      catogary: "Grocery",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 11,
      title: "apple",
      brand: "2pfund",
      price: "1.6$",
      img: img10,
      catogary: "Grocery",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 12,
      title: "bakes",
      brand: "2pfund",
      price: "1.6$",
      img: img11,
      catogary: "Bakery",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 13,
      title: "bakes",
      brand: "2pfund",
      price: "1.6$",
      img: img12,
      catogary: "Bakery",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 14,
      title: "bakes",
      brand: "2pfund",
      price: "1.6$",
      img: img13,
      catogary: "Bakery",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 15,
      title: "bakes",
      brand: "2pfund",
      price: "1.6$",
      img: img14,
      catogary: "Bakery",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 16,
      title: "bakes",
      brand: "2pfund",
      price: "1.6$",
      img: img15,
      catogary: "Bakery",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 17,
      title: "bakes",
      brand: "2pfund",
      price: "1.6$",
      img: img16,
      catogary: "Bakery",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 18,
      title: "bakes",
      brand: "2pfund",
      price: "1.6$",
      img: img17,
      catogary: "Bakery",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 19,
      title: "bakes",
      brand: "2pfund",
      price: "1.6$",
      img: img18,
      catogary: "Bakery",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 20,
      title: "bakes",
      brand: "2pfund",
      price: "1.6$",
      img: img19,
      catogary: "Bakery",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 21,
      title: "bakes",
      brand: "2pfund",
      price: "1.6$",
      img: img20,
      catogary: "Bakery",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 22,
      title: "apple",
      brand: "2pfund",
      price: "1.6$",
      img: img21,
      catogary: "Makeup",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 23,
      title: "apple",
      brand: "2pfund",
      price: "1.6$",
      img: img22,
      catogary: "Makeup",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 24,
      title: "apple",
      brand: "2pfund",
      price: "1.6$",
      img: img23,
      catogary: "Makeup",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 25,
      title: "apple",
      brand: "2pfund",
      price: "1.6$",
      img: img24,
      catogary: "Makeup",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 26,
      title: "apple",
      brand: "2pfund",
      price: "1.6$",
      img: img25,
      catogary: "Makeup",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 27,
      title: "apple",
      brand: "2pfund",
      price: "1.6$",
      img: img26,
      catogary: "Makeup",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 28,
      title: "apple",
      brand: "2pfund",
      price: "1.6$",
      img: img27,
      catogary: "Makeup",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 29,
      title: "apple",
      brand: "2pfund",
      price: "1.6$",
      img: img28,
      catogary: "Makeup",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 30,
      title: "apple",
      brand: "2pfund",
      price: "1.6$",
      img: img29,
      catogary: "Makeup",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 31,
      title: "apple",
      brand: "2pfund",
      price: "1.6$",
      img: img30,
      catogary: "Makeup",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 32,
      title: "apple",
      brand: "2pfund",
      price: "1.6$",
      img: img31,
      catogary: "Makeup",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 33,
      title: "apple",
      brand: "2pfund",
      price: "1.6$",
      img: img32,
      catogary: "Makeup",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 39,
      title: "bag",
      brand: "2pfund",
      price: "1.6$",
      img: img46,
      category: "Clothing",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 40,
      title: "mango",
      brand: "2pfund",
      price: "1.6$",
      img: img47,
      category: "Clothing",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 41,
      title: "FOREVER",
      brand: "2pfund",
      price: "1.6$",
      img: img48,
      category: "Clothing",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 42,
      title: "DOROTHY_PERKINS.jpg",
      brand: "2pfund",
      price: "1.6$",
      img: img49,
      category: "Clothing",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 43,
      title: "Fold_over.jpg",
      brand: "2pfund",
      price: "1.6$",
      img: img49,
      category: "Clothing",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 44,
      title: "Solid_Notch.jpg",
      brand: "2pfund",
      price: "1.6$",
      img: img50,
      category: "Clothing",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
    {
      id: 45,
      title: "Notch_Lapel.jpg",
      brand: "2pfund",
      price: "1.6$",
      img: img51,
      category: "Clothing",
      descrption:
        "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthace...",
    },
  ];

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
        <Typography variant="body1">Category: {product.catogary}</Typography>
        <Typography variant="body1">
          Description: {product.descrption}
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
            dispatch(increaseQuan(product));
          }}
        >
          <ShoppingBasketIcon /> Add to Cart
        </Button>
      </Card>
    </Box>
  );
};

export default ProductDetails;
