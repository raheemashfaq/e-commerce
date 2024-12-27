import React from "react";
import { useParams } from "react-router";
import { Box, Typography, Card, Button } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useDispatch } from "react-redux";
import { addItems, increaseQuan } from "../../features/counter/counterSlice";
import img1 from "../../Assets/Dates.jpg";
import img2 from "../../Assets/BabySpinach.jpg";
import img3 from "../../Assets/blueberries.jpg";
import img4 from "../../Assets/BrusselsSprouts.jpg";
import img5 from "../../Assets/CelerySticks.jpg";
import img6 from "../../Assets/clementines.jpg";
import img7 from "../../Assets/Corn.jpg";
import img8 from "../../Assets/Cucumber.jpg";
import img9 from "../../Assets/Dates.jpg";
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
import img44 from "../../Assets/bag11.jpg";
import img38 from "../../Assets/bag5.jpg";
import img37 from "../../Assets/bag4.jpg";
import img36 from "../../Assets/bag3.jpg";
import img35 from "../../Assets/bag2.jpg";
import img34 from "../../Assets/bag1.jpg";
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
const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const productCard = [
    {
      id: 1,
      title: "Fresh Apple",
      brand: "NatureFresh",
      price: "2.0$",
      img: img1,
      category: "Grocery",
      description:
        "Crisp and juicy fresh apples, perfect for snacking or cooking.",
    },
    {
      id: 2,
      title: "Baby Spinach",
      brand: "GreenValley",
      price: "2.5$",
      img: img2,
      category: "Grocery",
      description:
        "Tender and nutritious baby spinach leaves, great for salads and smoothies.",
    },
    {
      id: 3,
      title: "Sweet Blueberries",
      brand: "BerryKing",
      price: "3.2$",
      img: img3,
      category: "Grocery",
      description:
        "Plump and sweet blueberries, ideal for desserts or healthy snacking.",
    },
    {
      id: 4,
      title: "Brussels Sprouts",
      brand: "GreenValley",
      price: "1.8$",
      img: img4,
      category: "Grocery",
      description: "Fresh Brussels sprouts, perfect for roasting or sautéing.",
    },
    {
      id: 5,
      title: "Celery Sticks",
      brand: "FreshHarvest",
      price: "1.5$",
      img: img5,
      category: "Grocery",
      description:
        "Crunchy celery sticks, a healthy snack or cooking ingredient.",
    },
    {
      id: 6,
      title: "Clementines",
      brand: "CitrusJoy",
      price: "2.8$",
      img: img6,
      category: "Grocery",
      description:
        "Sweet and seedless clementines, perfect for snacking and juicing.",
    },
    {
      id: 7,
      title: "Golden Corn",
      brand: "GreenHarvest",
      price: "1.9$",
      img: img7,
      category: "Grocery",
      description:
        "Sweet and tender golden corn, great for grilling or boiling.",
    },
    {
      id: 8,
      title: "Fresh Cucumber",
      brand: "NatureFresh",
      price: "1.4$",
      img: img8,
      category: "Grocery",
      description:
        "Cool and crisp cucumbers, perfect for salads and hydration.",
    },
    {
      id: 9,
      title: "Organic Dates",
      brand: "DesertDelight",
      price: "4.0$",
      img: img9,
      category: "Grocery",
      description: "Soft and sweet organic dates, a natural energy booster.",
    },
    {
      id: 10,
      title: "Red Apple",
      brand: "NatureFresh",
      price: "2.1$",
      img: img4,
      category: "Grocery",
      description:
        "Fresh red apples with a sweet and tart flavor, perfect for any occasion.",
    },
    {
      id: 11,
      title: "Orange Juice",
      brand: "JuiceMakers",
      price: "3.5$",
      img: img44,
      category: "Bakery",
      description:
        "Freshly squeezed orange juice, rich in vitamin C and flavor.",
    },
    {
      id: 12,
      title: "Purple Grape Juice",
      brand: "JuiceMakers",
      price: "3.8$",
      img: img11,
      category: "Bakery",
      description:
        "Delicious and refreshing purple grape juice with a natural sweetness.",
    },
    {
      id: 13,
      title: "Fresh Milk",
      brand: "DairyPure",
      price: "2.3$",
      img: img12,
      category: "Bakery",
      description:
        "Pure and fresh milk, perfect for drinking, cooking, or baking.",
    },
    {
      id: 14,
      title: "Mango Milk",
      brand: "TropicalFresh",
      price: "2.7$",
      img: img13,
      category: "Bakery",
      description: "Creamy mango-flavored milk, a tropical treat in every sip.",
    },
    {
      id: 15,
      title: "Peach Juice",
      brand: "FruitSplash",
      price: "3.2$",
      img: img14,
      category: "Bakery",
      description: "Sweet and tangy peach juice, packed with fruity goodness.",
    },
    {
      id: 16,
      title: "Red Bottle Drink",
      brand: "ExoticTaste",
      price: "3.0$",
      img: img15,
      category: "Bakery",
      description:
        "Exotic red bottle drink, a unique blend of flavors to refresh your day.",
    },
    {
      id: 17,
      title: "Kaava Tea",
      brand: "HerbalKing",
      price: "4.5$",
      img: img16,
      category: "Bakery",
      description: "Traditional Kaava tea with a soothing herbal aroma.",
    },
    {
      id: 18,
      title: "Makeup Kit",
      brand: "BeautyPro",
      price: "15.0$",
      img: img17,
      category: "Makeup",
      description: "Comprehensive makeup kit for all your beauty needs.",
    },
    {
      id: 19,
      title: "Coffee Beans",
      brand: "BrewMaster",
      price: "7.0$",
      img: img18,
      category: "Bakery",
      description: "Premium quality coffee beans for a rich and aromatic brew.",
    },
    {
      id: 20,
      title: "Premium Coffee",
      brand: "BrewMaster",
      price: "6.8$",
      img: img19,
      category: "Bakery",
      description:
        "Smooth and flavorful premium coffee, perfect for any time of day.",
    },
    {
      id: 21,
      title: "Black Tea",
      brand: "HerbalKing",
      price: "3.6$",
      img: img20,
      category: "Bakery",
      description: "Classic black tea with a bold and invigorating flavor.",
    },
    {
      id: 22,
      title: "Green Tea",
      brand: "HerbalKing",
      price: "3.9$",
      img: img21,
      category: "Bakery",
      description:
        "Refreshing green tea, rich in antioxidants and health benefits.",
    },
    {
      id: 23,
      title: "Makeup Kit A",
      brand: "BeautyPro",
      price: "12.0$",
      img: img22,
      category: "Makeup",
      description:
        "Essential makeup kit with everything you need for a flawless look.",
    },
    {
      id: 24,
      title: "Makeup Kit B",
      brand: "BeautyPro",
      price: "14.0$",
      img: img23,
      category: "Makeup",
      description: "Advanced makeup kit for professional and personal use.",
    },
    {
      id: 25,
      title: "Makeup Set",
      brand: "BeautyPro",
      price: "13.5$",
      img: img24,
      category: "Makeup",
      description:
        "Versatile makeup set with high-quality products for all occasions.",
    },
    {
      id: 26,
      title: "Cosmetics Pack",
      brand: "BeautyPro",
      price: "15.0$",
      img: img25,
      category: "Makeup",
      description:
        "Comprehensive cosmetics pack for an enhanced beauty experience.",
    },
    {
      id: 27,
      title: "Beauty Essentials",
      brand: "BeautyPro",
      price: "17.0$",
      img: img26,
      category: "Makeup",
      description:
        "Complete beauty essentials for a stunning and radiant look.",
    },
    {
      id: 28,
      title: "Compact Makeup Kit",
      brand: "GlamUp",
      price: "1.6$",
      img: img27,
      category: "Makeup",
      description: "Portable and compact makeup kit, ideal for travel.",
    },
    {
      id: 29,
      title: "Basic Makeup Kit",
      brand: "GlowMagic",
      price: "1.6$",
      img: img28,
      category: "Makeup",
      description: "Simple and effective makeup kit for everyday use.",
    },
    {
      id: 30,
      title: "Travel Makeup Kit",
      brand: "StyleStudio",
      price: "1.6$",
      img: img29,
      category: "Makeup",
      description: "Travel-friendly makeup kit for beauty on the go.",
    },
    {
      id: 31,
      title: "Complete Makeup Set",
      brand: "ShineOn",
      price: "1.6$",
      img: img30,
      category: "Makeup",
      description: "All-in-one makeup set for a professional finish.",
    },
    {
      id: 32,
      title: "Glow Makeup Kit",
      brand: "RadiantTouch",
      price: "1.6$",
      img: img31,
      category: "Makeup",
      description: "Glow-enhancing makeup kit for a radiant appearance.",
    },
    {
      id: 33,
      title: "Radiance Makeup Kit",
      brand: "BeautyFlex",
      price: "1.6$",
      img: img32,
      category: "Makeup",
      description:
        "Professional-grade makeup kit to highlight your natural beauty.",
    },
    {
      id: 34,
      title: "Cosmetic Handbag",
      brand: "BagHaven",
      price: "1.6$",
      img: img38,
      category: "Makeup",
      description:
        "Stylish cosmetic handbag to store all your beauty essentials.",
    },
    {
      id: 35,
      title: "Designer Cosmetic Bag",
      brand: "CarryChic",
      price: "1.6$",
      img: img34,
      category: "Makeup",
      description: "Elegant and spacious designer bag for makeup storage.",
    },
    {
      id: 36,
      title: "Premium Makeup Bag",
      brand: "BagStudio",
      price: "1.6$",
      img: img35,
      category: "Makeup",
      description: "Durable and luxurious makeup bag for everyday use.",
    },
    {
      id: 37,
      title: "Travel Makeup Bag",
      brand: "StyleBag",
      price: "1.6$",
      img: img36,
      category: "Makeup",
      description:
        "Convenient travel makeup bag with compartments for organization.",
    },
    {
      id: 38,
      title: "Compact Cosmetic Bag",
      brand: "EliteCarry",
      price: "1.6$",
      img: img37,
      category: "Makeup",
      description: "Compact and lightweight cosmetic bag for quick trips.",
    },
    {
      id: 39,
      title: "Stylish Handbag",
      brand: "ChicCloset",
      price: "1.6$",
      img: img46,
      category: "Clothing",
      description: "Trendy and functional handbag for everyday wear.",
    },
    {
      id: 40,
      title: "Mango Dress",
      brand: "UrbanVogue",
      price: "1.6$",
      img: img47,
      category: "Clothing",
      description:
        "Chic mango-colored dress, perfect for casual and formal occasions.",
    },
    {
      id: 41,
      title: "Forever Style Top",
      brand: "StyleQueen",
      price: "1.6$",
      img: img48,
      category: "Clothing",
      description: "Trendy top with timeless style for modern fashion.",
    },
    {
      id: 42,
      title: "Dorothy Perkins Jacket",
      brand: "PerkinsTrend",
      price: "1.6$",
      img: img49,
      category: "Clothing",
      description: "Classic jacket with a modern twist for versatile styling.",
    },
    {
      id: 43,
      title: "Fold-Over Jacket",
      brand: "ClassicCoats",
      price: "1.6$",
      img: img49,
      category: "Clothing",
      description: "Stylish fold-over jacket for cool and casual days.",
    },
    {
      id: 44,
      title: "Solid Notch Coat",
      brand: "EliteWear",
      price: "1.6$",
      img: img50,
      category: "Clothing",
      description:
        "Elegant coat with a notch lapel design for a polished look.",
    },
    {
      id: 45,
      title: "Notch Lapel Coat",
      brand: "PrimeCloth",
      price: "1.6$",
      img: img51,
      category: "Clothing",
      description: "Premium notch lapel coat, perfect for formal events.",
    },
    {
      id: 46,
      title: "Seasonal Fruits Pack",
      brand: "FreshHarvest",
      price: "1.6$",
      img: img52,
      category: "Daily Needs",
      description: "A mix of seasonal fruits, fresh and ready to enjoy.",
    },
    {
      id: 47,
      title: "Tropical Fruits Mix",
      brand: "NatureBlend",
      price: "1.6$",
      img: img53,
      category: "Daily Needs",
      description: "Delicious tropical fruit mix for a taste of the exotic.",
    },
    {
      id: 48,
      title: "Fresh Orchard Fruits",
      brand: "FruitLovers",
      price: "1.6$",
      img: img54,
      category: "Daily Needs",
      description:
        "Handpicked fresh fruits from the orchard, bursting with natural flavors.",
    },
    {
      id: 49,
      title: "Citrus Fruit Basket",
      brand: "CitrusBloom",
      price: "1.6$",
      img: img55,
      category: "Daily Needs",
      description:
        "A refreshing mix of citrus fruits, perfect for boosting your vitamin C intake.",
    },
    {
      id: 50,
      title: "Exotic Fruit Selection",
      brand: "TropicalDelights",
      price: "1.6$",
      img: img56,
      category: "Daily Needs",
      description:
        "A curated selection of exotic fruits to elevate your fruit experience.",
    },
    {
      id: 51,
      title: "Seasonal Fruit Basket",
      brand: "FreshHarvest",
      price: "5.0$",
      img: img57,
      category: "Daily Needs",
      description:
        "A delightful basket of seasonal fruits, freshly picked for your enjoyment.",
    },
    {
      id: 52,
      title: "Modern Coffee Table",
      brand: "HomeElegance",
      price: "120.0$",
      img: img58,
      category: "Furniture",
      description:
        "A sleek and stylish coffee table to complement any modern living room.",
    },
    {
      id: 53,
      title: "Luxury Sofa Set",
      brand: "FurniStyle",
      price: "450.0$",
      img: img59,
      category: "Furniture",
      description:
        "Premium luxury sofa set with plush comfort and exquisite design.",
    },
    {
      id: 54,
      title: "Classic Wooden Chair",
      brand: "TimberCraft",
      price: "75.0$",
      img: img60,
      category: "Furniture",
      description: "A beautifully crafted wooden chair with timeless elegance.",
    },
    {
      id: 55,
      title: "Elegant Dining Table",
      brand: "DecoLiving",
      price: "350.0$",
      img: img61,
      category: "Furniture",
      description:
        "An elegant dining table designed to enhance your dining experience.",
    },
    {
      id: 56,
      title: "Comfort Recliner Chair",
      brand: "RelaxHome",
      price: "200.0$",
      img: img62,
      category: "Furniture",
      description:
        "A cozy recliner chair offering ultimate comfort and relaxation.",
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
        <Typography variant="body1">Category: {product.category}</Typography>
        <Typography variant="body1">
          Description: {product.description}
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
          }}
        >
          <ShoppingBasketIcon /> Add to Cart
        </Button>
      </Card>
    </Box>
  );
};

export default ProductDetails;
