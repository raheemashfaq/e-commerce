import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addItems } from "../../features/counter/counterSlice";
import { Link } from "react-router";

//Bakery
import img1 from "../../Assets/Dates.jpg";
import img2 from "../../Assets/BabySpinach.jpg";
import img3 from "../../Assets/blueberries.jpg";
import img4 from "../../Assets/BrusselsSprouts.jpg";
import img5 from "../../Assets/CelerySticks.jpg";
import img6 from "../../Assets/clementines.jpg";
import img7 from "../../Assets/Corn.jpg";
import img8 from "../../Assets/Cucumber.jpg";
import img9 from "../../Assets/Dates.jpg";
//Bakery
import img10 from "../../Assets/bak1.png";
import img11 from "../../Assets/bak2.jpg";
import img12 from "../../Assets/bak3.jpg";
import img13 from "../../Assets/bak4.jpg";
import img14 from "../../Assets/bak5.jpg";
import img15 from "../../Assets/bak6.jpg";
import img16 from "../../Assets/bak7.jpg";
import img17 from "../../Assets/bak8.jpg";
import img18 from "../../Assets/bak9.jpg";
import img19 from "../../Assets/bak10.jpg";
import img20 from "../../Assets/bak11.jpg";
import img21 from "../../Assets/bak12.jpg";
//Makup
import img22 from "../../Assets/mak1.jpg";
import img23 from "../../Assets/mak2.jpg";
import img24 from "../../Assets/mak3.jpg";
import img25 from "../../Assets/mak4.jpg";
import img26 from "../../Assets/mak5.jpg";
import img27 from "../../Assets/mak6.jpg";
import img28 from "../../Assets/mak7.jpg";
import img29 from "../../Assets/mak9.jpg";
import img30 from "../../Assets/mak10.jpg";
import img31 from "../../Assets/mak11.jpg";
import img32 from "../../Assets/mak12.png";
//Bags
import img34 from "../../Assets/bag1.jpg";
import img35 from "../../Assets/bag2.jpg";
import img36 from "../../Assets/bag3.jpg";
import img37 from "../../Assets/bag4.jpg";
import img38 from "../../Assets/bag5.jpg";
import img39 from "../../Assets/bag6.jpg";
import img40 from "../../Assets/bag7.jpg";
import img41 from "../../Assets/bag8.jpg";
import img42 from "../../Assets/bag9.jpg";
import img43 from "../../Assets/bag10.jpg";
import img44 from "../../Assets/bag11.jpg";
import img45 from "../../Assets/bag12.jpg";
//Clothing
import img46 from "../../Assets/C1mango.jpg";
import img47 from "../../Assets/C2FOREVER.jpg";
import img48 from "../../Assets/C3DOROTHY_PERKINS.jpg";
import img49 from "../../Assets/C4Fold_over.jpg";
import img50 from "../../Assets/C5Solid_Notch.jpg";
import img51 from "../../Assets/C6Notch_Lapel.jpg";
//Fruits
import img52 from "../../Assets/F1Apples.jpg";
import img53 from "../../Assets/F2blueberries.jpg";
import img54 from "../../Assets/F3clementines.jpg";
import img55 from "../../Assets/F4pears.jpg";
import img56 from "../../Assets/F5RedCherries.jpg";
import img57 from "../../Assets/F6strawberry.jpg";
//Furniture
import img58 from "../../Assets/Fu1Ash.png";
import img59 from "../../Assets/Fu2Hardwoods.png";
import img60 from "../../Assets/Fu3Mahogany.png";
import img61 from "../../Assets/Fu4Oak.png";
import img62 from "../../Assets/Fu5Partex.png";
import img63 from "../../Assets/Fu6Beech.png";
const ProductCard = ({ selectedCategory }) => {
  const productCard = [
    {
      id: 1,
      title: "Fresh Apple",
      brand: "NatureFresh",
      price: 2.0,
      img: img1,
      category: "Grocery",
    },
    {
      id: 2,
      title: "Baby Spinach",
      brand: "GreenValley",
      price: 2.5,
      img: img2,
      category: "Grocery",
    },
    {
      id: 3,
      title: "Sweet Blueberries",
      brand: "BerryKing",
      price: 3.2,
      img: img3,
      category: "Grocery",
    },
    {
      id: 4,
      title: "Brussels Sprouts",
      brand: "GreenValley",
      price: 1.8,
      img: img4,
      category: "Grocery",
    },
    {
      id: 5,
      title: "Celery Sticks",
      brand: "FreshHarvest",
      price: 1.5,
      img: img5,
      category: "Grocery",
    },
    {
      id: 6,
      title: "Clementines",
      brand: "CitrusJoy",
      price: 2.8,
      img: img6,
      category: "Grocery",
    },
    {
      id: 7,
      title: "Golden Corn",
      brand: "GreenHarvest",
      price: 1.9,
      img: img7,
      category: "Grocery",
    },
    {
      id: 8,
      title: "Fresh Cucumber",
      brand: "NatureFresh",
      price: 1.4,
      img: img8,
      category: "Grocery",
    },
    {
      id: 9,
      title: "Organic Dates",
      brand: "DesertDelight",
      price: 4.0,
      img: img9,
      category: "Grocery",
    },
    {
      id: 10,
      title: "Red Apple",
      brand: "NatureFresh",
      price: 2.1,
      img: img4,
      category: "Grocery",
    },
    {
      id: 11,
      title: "Orange Juice",
      brand: "JuiceMakers",
      price: 3.5,
      img: img44,
      category: "Bakery",
    },
    {
      id: 12,
      title: "Purple Grape Juice",
      brand: "JuiceMakers",
      price: 3.8,
      img: img11,
      category: "Bakery",
    },
    {
      id: 13,
      title: "Fresh Milk",
      brand: "DairyPure",
      price: 2.3,
      img: img12,
      category: "Bakery",
    },
    {
      id: 14,
      title: "Mango Milk",
      brand: "TropicalFresh",
      price: 2.7,
      img: img13,
      category: "Bakery",
    },
    {
      id: 15,
      title: "Peach Juice",
      brand: "FruitSplash",
      price: 3.2,
      img: img14,
      category: "Bakery",
    },
    {
      id: 16,
      title: "Red Bottle Drink",
      brand: "ExoticTaste",
      price: 3.0,
      img: img15,
      category: "Bakery",
    },
    {
      id: 17,
      title: "Kaava Tea",
      brand: "HerbalKing",
      price: 4.5,
      img: img16,
      category: "Bakery",
    },
    {
      id: 18,
      title: "Makeup Kit",
      brand: "BeautyPro",
      price: 15,
      img: img17,
      category: "Makeup",
    },
    {
      id: 19,
      title: "Coffee Beans",
      brand: "BrewMaster",
      price: 7.0,
      img: img18,
      category: "Bakery",
    },
    {
      id: 20,
      title: "Premium Coffee",
      brand: "BrewMaster",
      price: 6.8,
      img: img19,
      category: "Bakery",
    },
    {
      id: 21,
      title: "Black Tea",
      brand: "HerbalKing",
      price: 3.6,
      img: img20,
      category: "Bakery",
    },
    {
      id: 22,
      title: "Green Tea",
      brand: "HerbalKing",
      price: 3.9,
      img: img21,
      category: "Bakery",
    },
    {
      id: 23,
      title: "Makeup Kit A",
      brand: "BeautyPro",
      price: 12,
      img: img22,
      category: "Makeup",
    },
    {
      id: 24,
      title: "Makeup Kit B",
      brand: "BeautyPro",
      price: 14,
      img: img23,
      category: "Makeup",
    },
    {
      id: 25,
      title: "Makeup Set",
      brand: "BeautyPro",
      price: 13,
      img: img24,
      category: "Makeup",
    },
    {
      id: 26,
      title: "Cosmetics Pack",
      brand: "BeautyPro",
      price: 15,
      img: img25,
      category: "Makeup",
    },
    {
      id: 27,
      title: "Beauty Essentials",
      brand: "BeautyPro",
      price: 17,
      img: img26,
      category: "Makeup",
    },
    {
      id: 28,
      title: "Compact Makeup Kit",
      brand: "GlamUp",
      price: 1.6,
      img: img27,
      category: "Makeup",
    },
    {
      id: 29,
      title: "Basic Makeup Kit",
      brand: "GlowMagic",
      price: 1.6,
      img: img28,
      category: "Makeup",
    },
    {
      id: 30,
      title: "Travel Makeup Kit",
      brand: "StyleStudio",
      price: 1.6,
      img: img29,
      category: "Makeup",
    },
    {
      id: 31,
      title: "Complete Makeup Set",
      brand: "ShineOn",
      price: 1.6,
      img: img30,
      category: "Makeup",
    },
    {
      id: 32,
      title: "Glow Makeup Kit",
      brand: "RadiantTouch",
      price: 1.6,
      img: img31,
      category: "Makeup",
    },
    {
      id: 33,
      title: "Radiance Makeup Kit",
      brand: "BeautyFlex",
      price: 1.6,
      img: img32,
      category: "Makeup",
    },
    {
      id: 34,
      title: "Cosmetic Handbag",
      brand: "BagHaven",
      price: 1.6,
      img: img38,
      category: "Makeup",
    },
    {
      id: 35,
      title: "Designer Cosmetic Bag",
      brand: "CarryChic",
      price: 1.6,
      img: img34,
      category: "Makeup",
    },
    {
      id: 36,
      title: "Premium Makeup Bag",
      brand: "BagStudio",
      price: 1.6,
      img: img35,
      category: "Makeup",
    },
    {
      id: 37,
      title: "Travel Makeup Bag",
      brand: "StyleBag",
      price: 1.6,
      img: img36,
      category: "Makeup",
    },
    {
      id: 38,
      title: "Compact Cosmetic Bag",
      brand: "EliteCarry",
      price: 1.6,
      img: img37,
      category: "Makeup",
    },
    {
      id: 39,
      title: "Stylish Handbag",
      brand: "ChicCloset",
      price: 1.6,
      img: img46,
      category: "Clothing",
    },
    {
      id: 40,
      title: "Mango Dress",
      brand: "UrbanVogue",
      price: 1.6,
      img: img47,
      category: "Clothing",
    },
    {
      id: 41,
      title: "Forever Style Top",
      brand: "StyleQueen",
      price: 1.6,
      img: img48,
      category: "Clothing",
    },
    {
      id: 42,
      title: "Dorothy Perkins Jacket",
      brand: "PerkinsTrend",
      price: 1.6,
      img: img49,
      category: "Clothing",
    },
    {
      id: 43,
      title: "Fold-Over Jacket",
      brand: "ClassicCoats",
      price: 1.6,
      img: img49,
      category: "Clothing",
    },
    {
      id: 44,
      title: "Solid Notch Coat",
      brand: "EliteWear",
      price: 1.6,
      img: img50,
      category: "Clothing",
    },
    {
      id: 45,
      title: "Notch Lapel Coat",
      brand: "PrimeCloth",
      price: 1.6,
      img: img51,
      category: "Clothing",
    },
    {
      id: 46,
      title: "Seasonal Fruits Pack",
      brand: "FreshHarvest",
      price: 1.6,
      img: img52,
      category: "Daily Needs",
    },
    {
      id: 47,
      title: "Tropical Fruits Mix",
      brand: "NatureBlend",
      price: 1.6,
      img: img53,
      category: "Daily Needs",
    },
    {
      id: 48,
      title: "Fresh Orchard Fruits",
      brand: "FruitLovers",
      price: 1.6,
      img: img54,
      category: "Daily Needs",
    },
    {
      id: 49,
      title: "Citrus Fruit Basket",
      brand: "CitrusBloom",
      price: 1.6,
      img: img55,
      category: "Daily Needs",
    },
    {
      id: 50,
      title: "Exotic Fruit Selection",
      brand: "TropicalDelights",
      price: 1.6,
      img: img56,
      category: "Daily Needs",
    },
    {
      id: 51,
      title: "Seasonal Fruit Basket",
      brand: "FreshHarvest",
      price: 5.0,
      img: img57,
      category: "Daily Needs",
    },
    {
      id: 52,
      title: "Modern Coffee Table",
      brand: "HomeElegance",
      price: 120,
      img: img58,
      category: "Furniture",
    },
    {
      id: 53,
      title: "Luxury Sofa Set",
      brand: "FurniStyle",
      price: 450,
      img: img59,
      category: "Furniture",
    },
    {
      id: 54,
      title: "Classic Wooden Chair",
      brand: "TimberCraft",
      price: 75,
      img: img60,
      category: "Furniture",
    },
    {
      id: 55,
      title: "Elegant Dining Table",
      brand: "DecoLiving",
      price: 350,
      img: img61,
      category: "Furniture",
    },
    {
      id: 56,
      title: "Comfort Recliner Chair",
      brand: "RelaxHome",
      price: 200,
      img: img62,
      category: "Furniture",
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
        {filteredProducts?.slice(0, 42).map((item) => (
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
