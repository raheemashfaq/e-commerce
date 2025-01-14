import React from "react";
import Footer from "./Footer";
import { Box, Button, Grid, TextField } from "@mui/material";
import img from "../../Assets/contact-illustration.2f6adc05.svg";
const Contact = () => {
  return (
    <div className="container-fluid mt-4 " style={{ background: "#F3F4F6" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              background: "#fff",
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            <img
              src={img}
              alt=""
              style={{ width: "100%", marginBottom: "16px" }}
            />
            <TextField
              fullWidth
              label="Address"
              defaultValue="+92 3227198757"
              disabled
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Contact Number"
              defaultValue="+92 3227198757"
              disabled
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              defaultValue="muhammadabdulraheem000@gmail.com"
              disabled
              variant="outlined"
              margin="normal"
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={8}>
          <Box
            sx={{
              background: "#fff",
              padding: "16px",
              borderRadius: "8px",
              paddingBottom: "100px",
            }}
          >
            <h2>How can we improve your experience?</h2>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    variant="outlined"
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Description"
                    multiline
                    rows={5}
                    variant="outlined"
                    margin="normal"
                  />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                size="large"
                sx={{ bgcolor: "#009F7F" }}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Contact;
