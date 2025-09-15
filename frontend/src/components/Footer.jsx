import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        textAlign: "center",
        p: 3,
        background: "linear-gradient(90deg, #2575fc, #6a11cb)",
        color: "white",
        mt: 5
      }}
    >
      <Typography variant="body1">© 2025 TalkVrshaSpeakAI - Practice English with AI</Typography>
    </Box>
  );
}
