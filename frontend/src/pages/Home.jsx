import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #6a11cb, #2575fc)",
        color: "white",
        textAlign: "center",
        p: 4
      }}
    >
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Improve Your English by Talking with AI Avatars
      </Typography>
      <Typography variant="h6" sx={{ maxWidth: "600px", mb: 3 }}>
        Join a group, practice real conversations, and enhance your speaking skills
        with our interactive AI Meeting Room.
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          background: "white",
          color: "#2575fc",
          fontWeight: "bold",
          px: 4,
          py: 1.5,
          borderRadius: "30px",
          "&:hover": { background: "#f1f1f1" }
        }}
        onClick={() => navigate("/login")}
      >
        Get Started
      </Button>
    </Box>
  );
}
