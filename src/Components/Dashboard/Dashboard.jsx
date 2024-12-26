import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../Assets/Logo-new.png";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import HeroSec from "../HeroSec";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import FaceIcon from "@mui/icons-material/Face";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import WeekendIcon from "@mui/icons-material/Weekend";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import SlickSlider from "../SlickSlider";
import { Link } from "react-router";
import CartList from "../../CartList/CartList";
import { useLocation } from "react-router";
import ProductCard from "../ProductCard";
import { Accordion, Card, Grid, Typography } from "@mui/material";
import Accord from "../Accordian/Accord";

export default function Dashboard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [category, setCategory] = React.useState("");
  const location = useLocation();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem sx={{ cursor: "pointer", "&:hover": { color: "green" } }}>
        <p>Shops</p>
      </MenuItem>
      <MenuItem sx={{ cursor: "pointer", "&:hover": { color: "green" } }}>
        <p>Offers</p>
      </MenuItem>
      <MenuItem sx={{ cursor: "pointer", "&:hover": { color: "green" } }}>
        <p>Contact</p>
      </MenuItem>
      <MenuItem sx={{ cursor: "pointer", "&:hover": { color: "green" } }}>
        <p>Pages</p>
      </MenuItem>
      <MenuItem>
        <Link to="signupform">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "green",
              color: "white",
              padding: "1px 3px",
              fontSize: "0.75rem",
              marginRight: 1,
            }}
          >
            JOIN
          </Button>
        </Link>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "green",
            color: "white",
            padding: "1px 3px",
            fontSize: "0.75rem",
          }}
        >
          Become a Seller
        </Button>
      </MenuItem>
      <MenuItem>
        <Button variant="contained" sx={{ bgcolor: "#009F7F" }}>
          <CartList />
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ background: "#fff" }}>
        <Toolbar>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <FormControl sx={{ minWidth: 100, ml: 2 }}>
            <Select
              value={category}
              onChange={handleCategoryChange}
              displayEmpty
              inputProps={{ "aria-label": "Category" }}
              sx={{ background: "white", borderRadius: 1, color: "#009F7F" }}
            >
              <MenuItem value="" disabled>
                Select Category
              </MenuItem>
              <MenuItem value="grocery">
                <LocalGroceryStoreIcon sx={{ marginRight: 1 }} />
                Grocery
              </MenuItem>
              <MenuItem value="bakery">
                <BakeryDiningIcon sx={{ marginRight: 1 }} />
                Bakery
              </MenuItem>
              <MenuItem value="makeup">
                <FaceIcon sx={{ marginRight: 1 }} />
                Makeup
              </MenuItem>
              <MenuItem value="clothing">
                <CheckroomIcon sx={{ marginRight: 1 }} />
                Clothing
              </MenuItem>
              <MenuItem value="furniture">
                <WeekendIcon sx={{ marginRight: 1 }} />
                Furniture
              </MenuItem>
              <MenuItem value="daily-needs">
                <AllInboxIcon sx={{ marginRight: 1 }} />
                Daily Needs
              </MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ flexGrow: 1, color: "black" }} />
          <Box sx={{ display: { xs: "none", md: "flex" }, color: "black" }}>
            <Toolbar sx={{ cursor: "pointer", "&:hover": { color: "green" } }}>
              Shops
            </Toolbar>
            <Toolbar sx={{ cursor: "pointer", "&:hover": { color: "green" } }}>
              Offers
            </Toolbar>
            <Toolbar sx={{ cursor: "pointer", "&:hover": { color: "green" } }}>
              Contact
            </Toolbar>
            <Toolbar sx={{ cursor: "pointer", "&:hover": { color: "green" } }}>
              Pages
            </Toolbar>
            <Toolbar>
              <Link to={"/signupform"}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#009F7F",
                    color: "white",
                  }}
                >
                  JOIN
                </Button>
              </Link>
            </Toolbar>
            <Toolbar>
              <Link to={"/signupform"}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#009F7F",
                    color: "white",
                  }}
                >
                  Become a Seller
                </Button>
              </Link>
            </Toolbar>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="gray"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      <Box sx={{ padding: { xs: 2, md: 4 } }}>
        <Box sx={{ flexGrow: 1 }}>
          {location.pathname === "/" && <HeroSec />}
          {location.pathname === "/" && <SlickSlider />}
          {location.pathname === "/" && (
            <Grid container sx={{ mt: "10px" }}>
              <Grid item md={3} sx={{ display: { md: "block", xs: "none" } }}>
                <Accord />
              </Grid>
              <Grid item md={9}>
                <ProductCard selectedCategory={category} />
              </Grid>
            </Grid>
          )}
        </Box>
        <Box
          sx={{
            position: "fixed",
            right: "0",
            top: "60%",
            display: { xs: "none", md: "block" },
          }}
        >
          <Card sx={{ padding: "10px 20px", background: "#019376" }}>
            <CartList />
            <Button
              variant="contained"
              sx={{ background: "#fff", color: "#019376" }}
            >
              $:00
            </Button>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
