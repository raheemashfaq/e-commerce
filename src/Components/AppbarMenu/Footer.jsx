import React from "react";
import { Link } from "react-router";
import logo from "../../Assets/Logo-new.png";
import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <div className="container">
      <footer className="row row-cols-5 py-5 my-5 border-top">
        <div className="col">
          <Link
            to="/"
            className="d-flex align-items-center mb-3 link-dark text-decoration-none"
          >
            <img src={logo} alt="" />
          </Link>
          <p className="text-muted">Punjab state Kasur ,Pakistan</p>

          <Typography variant="body1">
            muhammadabdulraheem000@gamil.com
          </Typography>
          <Typography variant="body1">+92 7198757</Typography>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Typography>
              <FacebookIcon />
            </Typography>
            <Typography>
              <TwitterIcon />
            </Typography>
            <Typography>
              <InstagramIcon />
            </Typography>
          </Box>
          <p className="text-muted">© 2024</p>
        </div>

        <div className="col"></div>

        <div className="col">
          <h5>Explore</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-muted">
                Shops
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-muted">
                Authors
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-muted">
                Flash Deals
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-muted">
                Coupoun
              </Link>
            </li>
          </ul>
        </div>

        <div className="col">
          <h5>Customer Service</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-muted">
                FAQ & Helps
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-muted">
                Vendor Refund Policies
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-muted">
                Customer Refund Policies
              </Link>
            </li>
          </ul>
        </div>

        <div className="col">
          <h5>Our information</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-muted">
                Manufacturers
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-muted">
                Privacy policies
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-muted">
                Terms & conditions
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-muted">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
