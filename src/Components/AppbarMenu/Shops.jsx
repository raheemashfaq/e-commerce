import React from "react";
import grocery from "../../Assets/groShop.webp";
import bakery from "../../Assets/bakShop.webp";
import makeup from "../../Assets/makShop.webp";
import bag from "../../Assets/bagShop.webp";
import cloth from "../../Assets/cloShop.webp";
import furniture from "../../Assets/furShop.webp";
import { Box, Card, Grid, Typography, Button, Avatar } from "@mui/material";
import Footer from "./Footer";
import { Link } from "react-router";

const Shops = () => {
  const productCard = [
    {
      title: "Grocery Shop",
      img: grocery,
      des1: "1986 Kasur Lane,Near Lahore,",
      des2: "60781 Pakistan",
    },
    {
      title: "Bakery Shop",
      img: bakery,
      des1: "1986 Kasur Lane,Near Lahore,",
      des2: "60781 Pakistan",
    },
    {
      title: "Makeup Shop",
      img: makeup,
      des1: "1986 Kasur Lane,Near Lahore,",
      des2: "60781 Pakistan",
    },
    {
      title: "Bags Shop",
      img: bag,
      des1: "1986 Kasur Lane,Near Lahore,",
      des2: "60781 Pakistan",
    },
    {
      title: "Clothing Shop",
      img: cloth,
      des1: "1986 Kasur Lane,Near Lahore,",
      des2: "60781 Pakistan",
    },
    {
      title: "Furniture Shop",
      img: furniture,
      des1: "1986 Kasur Lane,Near Lahore,",
      des2: "60781 Pakistan",
    },
  ];
  return (
    <div>
      <div className="container">
        <Grid container spacing={2}>
          {productCard.map((item) => {
            return (
              <Grid item md={4}>
                <Card
                  sx={{
                    padding: "10px",
                    display: "flex",
                    gap: "10px",
                    mt: "20px",
                  }}
                >
                  <Link to="/">
                    <Avatar
                      alt="Remy Sharp"
                      src={item.img}
                      sx={{ width: 56, height: 56 }}
                    />
                  </Link>
                  <Box
                    sx={{
                      display: "felx",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="h5">{item.title}</Typography>
                    <Typography variant="body1">{item.des1}</Typography>
                    <Typography variant="body1">{item.des2}</Typography>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default Shops;
