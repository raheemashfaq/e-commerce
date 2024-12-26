import { Box, Card } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import card1 from "../Assets/card1.png";
import card2 from "../Assets/card2.png";
import card3 from "../Assets/card3.png";

const SlickSlider = () => {
  // Example item object with three images
  const item = {
    images: [
      { id: 1, image: card1 },
      { id: 2, image: card2 },
      { id: 3, image: card3 },
    ],
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3, // Show 3 images at once horizontally
    slidesToScroll: 1,
    arrows: true, // Enable navigation arrows
    prevArrow: (
      <div
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          cursor: "pointer",
        }}
      >
        <button
          style={{
            background: "transparent",
            border: "none",
            fontSize: "30px",
            color: "#000",
          }}
        >
          &#10094;
        </button>
      </div>
    ), // Custom previous arrow
    nextArrow: (
      <div
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          cursor: "pointer",
        }}
      >
        <button
          style={{
            background: "transparent",
            border: "none",
            fontSize: "30px",
            color: "#000",
          }}
        >
          &#10095;
        </button>
      </div>
    ), // Custom next arrow
    centerMode: false, // Remove centerMode for a regular layout
    focusOnSelect: true, // To focus on the selected image
    responsive: [
      {
        breakpoint: 1024, // For medium screens, show 2 images
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // For small screens, show 1 image
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Card
      sx={{
        maxWidth: 1200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 0,
        flexDirection: "column",
        margin: "auto",
        padding: 0,
        position: "relative", // Ensure the buttons are positioned correctly
      }}
    >
      <Slider {...settings} style={{ width: "100%", height: "100%" }}>
        {item.images.map((image) => (
          <div key={image.id} style={{ padding: "0 60px" }}>
            {" "}
            {/* Increased space between images */}
            <Box
              component="img"
              sx={{
                height: "auto",
                width: "400px", // Keep the images at a fixed size
                border: 1,
                borderColor: "border.main",
                objectFit: "cover",
                display: "block", // Prevent unwanted spacing around images
                margin: "auto", // Center images within the div
              }}
              alt={`Image ${image.id}`}
              src={image.image}
              onError={(e) => console.log("Error loading image", e)}
            />
          </div>
        ))}
      </Slider>
    </Card>
  );
};

export default SlickSlider;
