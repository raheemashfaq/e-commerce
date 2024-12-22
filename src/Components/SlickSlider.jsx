import { Box, CardContent, Card } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ItemDetail = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Card
      sx={{
        maxWidth: 600,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 0,
        flexDirection: "column",
      }}
    >
      <Slider {...settings}>
        {item.images.map((image) => (
          <div key={image.id}>
            <Box
              sx={{
                height: "100%",
                border: 1,
                borderColor: "border.main",
                objectFit: "cover",
              }}
              alt=""
              image={`URL` + item.images[0].image}
              onError={(e) => console.log("Error loading image", e)}
            />
          </div>
        ))}
      </Slider>
    </Card>
  );
};
