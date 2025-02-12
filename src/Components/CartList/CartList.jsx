import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Badge,
  ButtonGroup,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import CloseIcon from "@mui/icons-material/Close";
import img from "../../Assets/zeroPro.jpeg";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  decreaseQuan,
  increaseQuan,
  removeItem,
  selectTotalPrice,
} from "../../features/counter/counterSlice";
import { Link } from "react-router";

export default function CartList() {
  const { cartItems } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 450 }} role="presentation">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton>
          <ShoppingCartIcon sx={{ color: "#009F7F" }} />
          <Typography variant="body1" sx={{ color: "#009F7F" }}>
            {cartItems.length}
          </Typography>
        </IconButton>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon
            sx={{
              color: "#fff",
              background: "#009F7F",
              borderRadius: "50%",
            }}
          />
        </IconButton>
      </Box>
      {cartItems.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img src={img} alt="" width="300px" />
          <Typography variant="h4">Products Not Found</Typography>
        </Box>
      ) : (
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Product ITems
        </Typography>
      )}
      <Divider />
      {cartItems.map((num) => (
        <Box
          key={num.id}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img src={num.img} width={"150px"} alt="" />
              <div>
                <Typography sx={{ color: "#009F7F" }} variant="body1">
                  Qty:{" "}
                  <span style={{ color: "#000", fontWeight: "bold" }}>
                    {num.quantity}{" "}
                  </span>
                </Typography>
              </div>
            </div>

            <div>
              <Typography variant="body1" sx={{}}>
                {num.title}
              </Typography>
              <Typography variant="body1" sx={{}}>
                Price:{num.price}$
              </Typography>
              <ButtonGroup variant="text" aria-label="Basic button group">
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#009F7F" }}
                  onClick={() => dispatch(increaseQuan(num))}
                >
                  <AddCircleIcon />
                </Button>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#009F7F" }}
                  onClick={() => dispatch(decreaseQuan(num))}
                >
                  <RemoveCircleIcon />
                </Button>
              </ButtonGroup>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginRight: "10px",
            }}
          >
            <Typography>${(num.quantity * num.price).toFixed(2)}</Typography>
            <Tooltip title="delete">
              <Button
                size="small"
                onClick={() => {
                  dispatch(removeItem(num));
                }}
              >
                <CloseIcon
                  sx={{ color: "#009F7F", "&:hover": { color: "red" } }}
                />
              </Button>
            </Tooltip>
          </div>
        </Box>
      ))}
      {cartItems.length === 0 ? (
        ""
      ) : (
        <Link to="/checkout">
          <Button
            variant="contained"
            sx={{
              bgcolor: "#009F7F",
              position: "relative",
              left: "7.5rem",
              top: "9px",
              width: "50%",
              padding: "15px 0",
              borderRadius: "25px",
            }}
          >
            Checkout To Proceed
          </Button>
        </Link>
      )}
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <Badge badgeContent={cartItems.length} sx={{ color: "#fff" }}>
          <ShoppingCartIcon sx={{ color: "#fff" }} />
        </Badge>
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
