import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, ButtonGroup, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import CloseIcon from "@mui/icons-material/Close";
import img from "../Assets/zeroPro.jpeg";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  decreaseQuan,
  increaseQuan,
  removeItem,
} from "../features/counter/counterSlice";

export default function CartList() {
  const count = useSelector((state) => state.counter.value);
  const { cartItems } = useSelector((state) => state.counter);
  console.log(cartItems, "cartItems");
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
            {count}
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
      {count === 0 ? (
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
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <img src={num.img} width={"200px"} alt="" />
              <div>
                <Typography sx={{ color: "#009F7F" }}>
                  Quan:{" "}
                  <span style={{ color: "#000", fontWeight: "bold" }}>
                    {num.quantity}{" "}
                  </span>
                </Typography>
              </div>
            </div>

            <div>
              <Typography variant="h6" sx={{ color: "#009F7F" }}>
                {num.title}
              </Typography>
              <Typography variant="h6" sx={{ color: "#009F7F" }}>
                {num.price}
              </Typography>
              <Typography variant="h6">{num.qunatity}</Typography>
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

          <div>
            <Button
              variant="contained"
              sx={{ background: "#009F7F", borderRadius: "10px" }}
              onClick={() => {
                dispatch(removeItem(num));
              }}
            >
              <DeleteIcon />
            </Button>
          </div>
        </Box>
      ))}
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <Badge badgeContent={count} sx={{ color: "#fff" }}>
          <ShoppingCartIcon sx={{ color: "#fff" }} />
        </Badge>
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
