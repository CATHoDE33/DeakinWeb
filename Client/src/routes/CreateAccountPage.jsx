import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "../utils/firebase";
import { Box, Button, Container, TextField, Typography, Paper } from "@mui/material";

const fields = [
  { label: "Name*", name: "displayName", type: "text", placeholder: "Name" },
  { label: "Email*", name: "email", type: "email", placeholder: "Email" },
  { label: "Password*", name: "password", type: "password", placeholder: "Password" },
  { label: "Confirm Password*", name: "confirmPassword", type: "password", placeholder: "Confirm Password" },
];

const CreateAccountPage = () => {
  const [contact, setContact] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (contact.password !== contact.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(contact.email, contact.password);

      await createUserDocFromAuth(user, {
        displayName: contact.displayName,
        email: contact.email,
        password: contact.password,
      });

      navigate("/login");
    } catch (error) {
      console.log("Error creating user:", error.message);
      alert("Failed to create account. Please try again.");
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 12 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          backgroundColor: "#20c0ab",
          color: "white",
          width: "100%",
          maxWidth: 600,
          margin: "0 auto",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Create a DEV@Deakin Account
        </Typography>
        <br />

        {fields.map(({ label, name, type, placeholder }) => (
          <div key={name}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ width: 150 }}>
                <Typography>{label}</Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <TextField
                  fullWidth
                  margin="normal"
                  sx={{ backgroundColor: "white", borderRadius: 1 }}
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  value={contact[name]}
                  onChange={handleChange}
                />
              </Box>
            </Box>
            <br />
          </div>
        ))}

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
            Create
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default CreateAccountPage;