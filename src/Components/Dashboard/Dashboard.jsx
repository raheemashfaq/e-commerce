import React from "react";
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
import HeroSec from "../HeroSection/HeroSec";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import FaceIcon from "@mui/icons-material/Face";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import WeekendIcon from "@mui/icons-material/Weekend";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import SlickSlider from "../SlickSlider/SlickSlider";
import { Link, NavLink, useNavigate } from "react-router";
import Avatar from "@mui/material/Avatar";
import CartList from "../CartList/CartList";
import { useLocation } from "react-router";
import ProductCard from "../ProductCard/ProductCard";
import profileImg from "../../Assets/avatar.png";
import { Card, Grid, Tooltip } from "@mui/material";
import Accord from "../Accordian/Accord";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [category, setCategory] = React.useState("");
  const location = useLocation();
  const [loggedInUser, setLoggedInUser] = React.useState(null);
  const navigate = useNavigate();
  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    setLoggedInUser(user);
  }, []);
  const { cartItems } = useSelector((state) => state.counter);
  console.log(cartItems, "hight");
  const totalPrice = () => {
    if (!cartItems || cartItems.length === 0) return 0;
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    navigate("/");
  };

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
          <div
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "2px 4px",
              borderRadius: "4px",
              fontSize: "0.75rem",
              marginRight: 1,
            }}
          >
            JOIN
          </div>
        </Link>
        <div
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "2px 4px",
            borderRadius: "4px",
            fontSize: "0.75rem",
            marginRight: 1,
          }}
        >
          Become a Seller
        </div>
      </MenuItem>
      <MenuItem>
        <div
          variant="contained"
          style={{
            backgroundColor: "#009F7F",
            padding: "4px 8px",
            borderRadius: "6px",
          }}
        >
          <CartList />
        </div>
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
              <MenuItem value="bags">
                <BusinessCenterIcon sx={{ marginRight: 1 }} />
                Bags
              </MenuItem>
              <MenuItem value="clothing">
                <CheckroomIcon sx={{ marginRight: 1 }} />
                Clothing
              </MenuItem>
              <MenuItem value="furniture">
                <WeekendIcon sx={{ marginRight: 1 }} />
                Furniture
              </MenuItem>
              <MenuItem value="daily needs">
                <AllInboxIcon sx={{ marginRight: 1 }} />
                Daily Needs
              </MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ flexGrow: 1, color: "black" }} />
          <Box sx={{ display: { xs: "none", md: "flex" }, color: "black" }}>
            <NavLink
              to="/shops"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "green" : "inherit",
              })}
            >
              <Toolbar
                sx={{
                  "&:hover": { color: "green" },
                  textDecoration: "none",
                }}
              >
                Shops
              </Toolbar>
            </NavLink>
            <NavLink
              to="/offers"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "green" : "inherit",
              })}
            >
              <Toolbar
                sx={{ cursor: "pointer", "&:hover": { color: "green" } }}
              >
                Offers
              </Toolbar>
            </NavLink>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "green" : "inherit",
              })}
            >
              <Toolbar
                sx={{ cursor: "pointer", "&:hover": { color: "green" } }}
              >
                Contact
              </Toolbar>
            </NavLink>
            <NavLink
              to="/pages"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "green" : "inherit",
              })}
            >
              <Toolbar
                sx={{ cursor: "pointer", "&:hover": { color: "green" } }}
              >
                Pages
              </Toolbar>
            </NavLink>

            <Toolbar>
              {loggedInUser ? (
                <>
                  <Tooltip title="Logout">
                    <Avatar
                      alt="Travis Howard"
                      src={profileImg}
                      onClick={handleLogout}
                      sx={{ cursor: "pointer" }}
                    />
                  </Tooltip>
                </>
              ) : (
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
              )}
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
      <Box sx={{ padding: { xs: 2, md: 0 } }}>
        <Box sx={{ flexGrow: 1 }}>
          {location.pathname === "/" && <HeroSec selectedCategory={category} />}
          {location.pathname === "/" && <SlickSlider />}
          {location.pathname === "/" && (
            <Grid container sx={{ mt: "10px" }}>
              <Grid
                item
                md={3}
                sx={{
                  display: { md: "block", xs: "none" },
                  position: "sticky",
                  top: "0",
                  left: "0",
                  width: "20%",

                  height: "80vh",
                }}
              >
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
              ${totalPrice().toFixed(2)}
            </Button>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
