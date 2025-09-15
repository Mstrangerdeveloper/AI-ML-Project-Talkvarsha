import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // You can add authentication logic here
    navigate("/meeting");
  };

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #2575fc, #6a11cb)"
      }}
    >
      <Paper elevation={5} sx={{ p: 4, width: 350, borderRadius: 3 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Login
        </Typography>
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          type="password"
          label="Password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            background: "linear-gradient(90deg, #6a11cb, #2575fc)"
          }}
          onClick={handleLogin}
        >
          Submit
        </Button>
      </Paper>
    </Box>
  );
}
