import { useState } from 'react'
import './App.css'
import { AppBar, Toolbar, Box, TextField, Button, Typography } from "@mui/material";

const SignupBar = () => {
  const [contact, setContact] = useState({
    email_address: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setContact((preValue) => ({
      ...preValue,
      [name]: value
    }))
  }

  const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:8003/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email_address: contact.email_address })
      })

      if (!response.ok) {
        alert("Email failed to send")
        return
      }

      await response.json()
      alert("Email sent successfully")
    }
    catch (err) {
      console.error("Error:", err)
    }
  }

  return (
    <AppBar position="static" sx={{ bgcolor: "teal" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Sign Up for Our Daily Insider
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: { xs: 1, sm: 0 } }}>
          <TextField
            name='email_address'
            type='text'
            placeholder="Enter Your Email"
            onChange={handleChange}
            value={contact.email_address}
            variant="outlined"
            size="small"
            sx={{
              bgcolor: "white",
              borderRadius: 1,
              mr: 1,
              input: { px: 1 },
              width: "250px",
            }}
          />
          <Button
            type='submit'
            color="inherit"
            sx={{ ml: 2, textTransform: "none", fontSize: "1rem" }}
            onClick={handleClick}>
            Subscribe
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default SignupBar