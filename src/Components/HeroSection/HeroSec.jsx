import { Box, Typography } from "@mui/material";
import React from "react";
import "./HeroSec.css";

import groceryBackground from "../../Assets/grocery.png";
import bakeryBackground from "../../Assets/bakery2.png";
import clothingBackground from "../../Assets/cloths.webp";
import makeupBackground from "../../Assets/makeup.webp";
import bagsBackground from "../../Assets/bags.webp";
import furnitureBackground from "../../Assets/furniture.PNG";

const HeroSec = ({ selectedCategory }) => {
  let heading = "Welcome to Our Store";
  let subHeading = "Find everything you need!";
  let background = groceryBackground;
  switch (selectedCategory) {
    case "grocery":
      heading = "Groceries Delivered in 90 Minutes";
      subHeading = "Get fresh groceries delivered to your doorstep";
      background = groceryBackground;
      break;
    case "bakery":
      heading = "Get Your Bakery Items Delivered";
      subHeading =
        "Get your favorite bakery items baked and delivered to your doorsteps at any time";
      background = bakeryBackground;
      break;
    case "makeup":
      heading = "Branded & imported makeups";
      subHeading =
        "Easiest and cheapest way to get your branded & imported makeups";
      background = makeupBackground;
      break;
    case "bags":
      heading = "Exclusive Branded bags";
      subHeading =
        "Get your exclusive & branded bags delivered to you in no time";
      background = bagsBackground;
      break;
    case "clothing":
      heading = "Shop your designer dresses";
      subHeading =
        "Ready to wear dresses tailored for you online. Hurry up while stock lasts.";
      background = clothingBackground;
      break;
    case "furniture":
      heading = "Shop your designer dresses";
      subHeading =
        "Ready to wear dresses tailored for you online. Hurry up while stock lasts.";
      background = furnitureBackground;
      break;
    case "daily needs":
      heading = "Your dialy needs";
      subHeading =
        "Ready to wear dresses tailored for you online. Hurry up while stock lasts.";
      background = furnitureBackground;
      break;
    default:
      heading = "Welcome to Our Store";
      subHeading = "Find everything you need!";
      background = groceryBackground;
  }
  return (
    <div className=" content">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: { xs: "40vh", md: "90vh" },
          flexDirection: "column",
          marginBottom: "20px",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: { xs: "20px", md: "0" },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            marginBottom: "20px",
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", md: "3rem" },
            textAlign: "center",
          }}
        >
          {heading}
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: "20px", padding: { sm: "14px", md: "18px" } }}
        >
          {subHeading}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: { sm: "40%", md: "80%" },
            maxWidth: { sm: "300px", md: "600px" },
            marginBottom: "20px",
          }}
        >
          <input
            type="search"
            placeholder="Search for groceries"
            style={{
              flex: 1,
              padding: "12px 24px",
              borderRadius: "8px 0 0 8px",
              border: "1px solid #ccc",
              outline: "none",
              transition: "border-color 0.3s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#009F7F")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />
          <button
            style={{
              backgroundColor: "#009F7F",
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "0 8px 8px 0",
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </Box>
      </Box>
    </div>
  );
};

export default HeroSec;
