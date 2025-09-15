import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <AppBar 
      position="sticky"
      sx={{
        background: "linear-gradient(90deg, #6a11cb, #2575fc)",
        paddingY: 1
      }}
    >
      <Toolbar>
        <Typography 
          variant="h5" 
          sx={{ flexGrow: 1, fontWeight: "bold", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          TalkVrshaSpeakAI
        </Typography>
        <Box>
          <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
          <Button color="inherit" onClick={() => navigate("/login")}>Login</Button>
          <Button 
            variant="outlined" 
            sx={{ ml: 1, borderColor: "white", color: "white" }}
            onClick={() => navigate("/login")}
          >
            Signup
          </Button>
          <Button color="inherit">Contact Us</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
