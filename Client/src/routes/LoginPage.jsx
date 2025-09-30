import { useReducer, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signinAuthUserWithEmailAndPassword } from "../utils/firebase";
import { Box, Button, Container, TextField, Typography, Paper } from "@mui/material";

const initialState = {
  email: "",
  password: "",
  isLoggedIn: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "LOGIN_SUCCESS":
      return { ...state, isLoggedIn: true };
    case "LOGOUT":
      return { ...state, isLoggedIn: false, email: "", password: "" };
    default:
      return state;
  }
};

const LoginPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
    const saved = localStorage.getItem("loginState");
    return saved ? JSON.parse(saved) : initial;
  });

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("loginState", JSON.stringify(state));
  }, [state]);

  const handleChange = ({ target: { name, value } }) =>
    dispatch({ type: "SET_FIELD", field: name, value });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!state.email.trim() || !state.password.trim()) {
      alert("Missing credentials");
      return;
    }
    try {
      await signinAuthUserWithEmailAndPassword(state.email, state.password);
      dispatch({ type: "LOGIN_SUCCESS" });
      navigate("/");
    } catch (error) {
      console.log("User login error:", error.message);
      alert("Login failed, please check your credentials.");
    }
  };

  const handleLogout = () => dispatch({ type: "LOGOUT" });

  let content;
  if (state.isLoggedIn) {
    content = (
      <>
        <Typography sx={{ mb: 2, textAlign: "center" }}>
          Currently logged in as {state.email}
        </Typography>
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
            onClick={handleLogout}
          >
            Log Out
          </Button>
        </Box>
      </>
    );
  }
  else {
    content = (
      <>
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
        <Typography>Enter Email</Typography>
        <TextField
          fullWidth
          margin="normal"
          sx={{ backgroundColor: "white", borderRadius: 1 }}
          name="email"
          type="email"
          value={state.email}
          onChange={handleChange}
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
          value={state.password}
          onChange={handleChange}
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
      </>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <br />
      <br />
      <Paper elevation={3} sx={{ p: 4, backgroundColor: "#20c0ab", color: "white" }}>
        {content}
      </Paper>
    </Container>
  );
};

export default LoginPage;