import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Container,
  Paper,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router";
import logo from "../Assets/Logo-new.png";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format.")
    .required("Email is required."),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long.")
    .required("Password is required."),
});

const signupSchema = yup.object().shape({
  fullName: yup.string().required("Full Name is required."),
  email: yup
    .string()
    .email("Invalid email format.")
    .required("Email is required."),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long.")
    .required("Password is required."),
  role: yup.string().required("Role is required."),
});

const SignUpForm = () => {
  const [isLoginForm, setIsLoginForm] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, touchedFields },
    reset,
  } = useForm({
    resolver: yupResolver(isLoginForm ? loginSchema : signupSchema), // Dynamically switch schema
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    console.log("Form submitted: ", data);

    if (isLoginForm) {
      // Login logic
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (user) => user.email === data.email && user.password === data.password
      );

      if (user) {
        alert(`Welcome back, ${user.fullName}!`);
        navigate("/"); // Redirect to home page after successful login
      } else {
        alert("Invalid email or password.");
      }
    } else {
      // Signup logic
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const userExists = users.some((user) => user.email === data.email);

      if (userExists) {
        alert("Email already exists. Please log in.");
      } else {
        users.push(data);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Signup successful! Please log in.");
      }
    }
    reset();
  };

  const handleFormSwitch = () => {
    reset();
    setIsLoginForm((prev) => !prev);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f4f6f8",
      }}
    >
      <Paper sx={{ padding: 4, width: "90%" }}>
        <Typography align="center" gutterBottom sx={{ mb: "20px" }}>
          <img src={logo} alt="Logo" />
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: "#797F8C" }}
          component="h2"
          align="center"
          gutterBottom
        >
          {isLoginForm
            ? "Login with your email & password"
            : "Signup with your details"}
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
          {isLoginForm ? (
            <>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    type="email"
                    fullWidth
                    margin="normal"
                    error={touchedFields.email && !!errors.email}
                    helperText={touchedFields.email && errors.email?.message}
                    variant="outlined"
                  />
                )}
              />

              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    error={touchedFields.password && !!errors.password}
                    helperText={
                      touchedFields.password && errors.password?.message
                    }
                    variant="outlined"
                  />
                )}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Login
              </Button>
              <Button
                onClick={handleFormSwitch}
                sx={{ mt: 2 }}
                fullWidth
                color="secondary"
              >
                Create new account
              </Button>
            </>
          ) : (
            <>
              <Typography
                variant="h6"
                component="h3"
                align="center"
                gutterBottom
              >
                Signup
              </Typography>

              <Controller
                name="fullName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Full Name"
                    fullWidth
                    margin="normal"
                    error={touchedFields.fullName && !!errors.fullName}
                    helperText={
                      touchedFields.fullName && errors.fullName?.message
                    }
                    variant="outlined"
                  />
                )}
              />

              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    type="email"
                    fullWidth
                    margin="normal"
                    error={touchedFields.email && !!errors.email}
                    helperText={touchedFields.email && errors.email?.message}
                    variant="outlined"
                  />
                )}
              />

              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    error={touchedFields.password && !!errors.password}
                    helperText={
                      touchedFields.password && errors.password?.message
                    }
                    variant="outlined"
                  />
                )}
              />

              <Controller
                name="role"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <FormControl
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    error={touchedFields.role && !!errors.role}
                  >
                    <InputLabel>Role</InputLabel>
                    <Select {...field} label="Role">
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="admin">Admin</MenuItem>
                      <MenuItem value="user">User</MenuItem>
                    </Select>
                    {touchedFields.role && (
                      <Typography variant="caption" color="error">
                        {errors.role?.message}
                      </Typography>
                    )}
                  </FormControl>
                )}
              />

              <Button
                type="submit"
                variant="contained"
                color="success"
                fullWidth
                sx={{ mt: 2 }}
              >
                Signup
              </Button>
              <Button
                onClick={handleFormSwitch}
                sx={{ mt: 2 }}
                fullWidth
                color="secondary"
              >
                Already have an account? Login
              </Button>
            </>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default SignUpForm;
