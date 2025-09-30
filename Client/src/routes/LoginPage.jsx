import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signinAuthUserWithEmailAndPassword } from "../utils/firebase";
import { Box, Button, Container, TextField, Typography, Paper } from "@mui/material";

const LoginPage = () => {
  const [contact, setContact] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((preValue) => ({ ...preValue, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (!contact.email.trim() || !contact.password.trim()) {
        throw new Error("Missing credentials");
      }
      await signinAuthUserWithEmailAndPassword(contact.email, contact.password);
      navigate("/");
    } catch (error) {
      console.log("User login error:", error.message);
      alert("Login failed, please check your credentials.");
    }
  };

  return (
    <Container maxWidth="sm">
      <br />
      <br />
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          component={Link}
          to="/createaccount"
          variant="contained"
          size="large"
          sx={{
            textTransform: "none",
            fontSize: "1rem",
            backgroundColor: "#008080",
            "&:hover": { backgroundColor: "#005353ff" },
          }}
        >
          Sign Up
        </Button>
      </Box>
      <br />
      <br />
      <Paper elevation={3} sx={{ p: 4, backgroundColor: "#20c0ab", color: "white" }}>
        <Typography>Enter Email</Typography>
        <TextField
          fullWidth
          margin="normal"
          sx={{ backgroundColor: "white", borderRadius: 1 }}
          name="email"
          type="email"
          value={contact.email}
          onChange={handleChange}
          autoComplete="username"
        />
        <br />
        <br />
        <Typography>Enter Password</Typography>
        <TextField
          fullWidth
          margin="normal"
          sx={{ backgroundColor: "white", borderRadius: 1 }}
          name="password"
          type="password"
          value={contact.password}
          onChange={handleChange}
          autoComplete="current-password"
        />
        <br />
        <br />
        <br />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              textTransform: "none",
              fontSize: "1rem",
              backgroundColor: "#008080",
              "&:hover": { backgroundColor: "#005353ff" },
            }}
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;