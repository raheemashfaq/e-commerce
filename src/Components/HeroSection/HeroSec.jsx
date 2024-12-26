import { Box, Typography } from "@mui/material";
import { Button } from "bootstrap";
import React from "react";
import background from "../../Assets/grocery.png";
const HeroSec = () => {
  return (
    <div className="container-fluid">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: { xs: "70vh", md: "90vh" },
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
          variant="h3"
          sx={{
            marginBottom: "20px",
            fontWeight: "bold",
            fontSize: { xs: "2rem", md: "3rem" },
            textAlign: "center",
          }}
        >
          Groceries Delivered in 90 Minutes
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: "20px" }}>
          Get fresh groceries delivered to your doorstep
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "80%",
            maxWidth: "600px",
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
