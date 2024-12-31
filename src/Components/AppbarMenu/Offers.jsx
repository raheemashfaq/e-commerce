import React, { useState } from "react";
import { Link } from "react-router";
import HomeIcon from "@mui/icons-material/Home";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import off4 from "../../Assets/4off.webp";
import off5 from "../../Assets/5off.webp";
import off6 from "../../Assets/6off.webp";
import off10 from "../../Assets/10off.webp";
import Footer from "./Footer";

const Offers = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const productCard = [
    {
      img: off4,
      title: "4Off",
    },
    {
      img: off5,
      title: "5Off",
    },
    {
      img: off6,
      title: "6Off",
    },
    {
      img: off10,
      title: "10Off",
    },
  ];

  const handleCopy = (index, text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedIndex(index);

        setTimeout(() => {
          setCopiedIndex(null);
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
          background: "#E2E8F0",
          flexDirection: "column",
        }}
      >
        <h1>Offers</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <p>
              <HomeIcon />
              Home
            </p>
          </Link>
          <p> {">"} </p>
          <p className="text-muted">offer</p>
        </div>
      </div>
      <div className="container">
        <Grid container spacing={3}>
          {productCard.map((item, index) => (
            <Grid item md={3} key={index}>
              <Card sx={{ padding: "5px" }}>
                <img
                  src={item.img}
                  alt="Product"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography>{item.title}</Typography>
                  <Button onClick={() => handleCopy(index, item.title)}>
                    {copiedIndex === index ? "Copied" : "Copy"}
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default Offers;
