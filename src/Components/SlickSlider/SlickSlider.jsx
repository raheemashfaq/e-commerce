import { Box, Card, Button } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import card1 from "../../Assets/card1.png";
import card2 from "../../Assets/card2.png";
import card3 from "../../Assets/card3.png";
import card4 from "../../Assets/card4.png";

const SlickSlider = () => {
  const item = {
    images: [
      { id: 1, image: card1 },
      { id: 2, image: card2 },
      { id: 3, image: card3 },
      { id: 3, image: card4 },
    ],
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows to use custom buttons
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  let sliderRef = null; // Reference to control the slider programmatically

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
        position: "relative",
      }}
    >
      {/* Left Custom Button */}
      <Button
        onClick={() => sliderRef.slickPrev()} // Navigate to the previous slide
        sx={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          backgroundColor: "#fff",
          color: "#000",
          borderRadius: "50%",
          minWidth: "40px",
          height: "40px",
          "&:hover": { backgroundColor: "#333" },
        }}
      >
        &#10094;
      </Button>

      {/* Slider */}
      <Slider
        {...settings}
        ref={(slider) => (sliderRef = slider)} // Attach reference
        style={{ width: "100%", height: "100%" }}
      >
        {item.images.map((image) => (
          <div key={image.id} style={{ padding: "0 " }}>
            {" "}
            {/* Add gap */}
            <Box
              component="img"
              sx={{
                height: "auto",
                width: "380px",
                // border: 1,
                borderColor: "border.main",
                objectFit: "cover",
                display: "block",
                margin: "auto",
              }}
              alt={`Image ${image.id}`}
              src={image.image}
              onError={(e) => console.log("Error loading image", e)}
            />
          </div>
        ))}
      </Slider>

      {/* Right Custom Button */}
      <Button
        onClick={() => sliderRef.slickNext()} // Navigate to the next slide
        sx={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          backgroundColor: "#fff",
          color: "#000",
          borderRadius: "50%",
          minWidth: "40px",
          height: "40px",
          "&:hover": { backgroundColor: "#333" },
        }}
      >
        &#10095;
      </Button>
    </Card>
  );
};

export default SlickSlider;
