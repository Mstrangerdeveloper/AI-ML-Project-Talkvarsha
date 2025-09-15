import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Avatar,
  Stack,
  Divider,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MicIcon from "@mui/icons-material/Mic";
import StopIcon from "@mui/icons-material/Stop";
import { useLocation, useNavigate } from "react-router-dom";

export default function ConversationWithAvatar() {
  const location = useLocation();
  const navigate = useNavigate();

  const { language, time, voice, avatars, subtitle } = location.state || {};
  const [micActive, setMicActive] = useState(false); // Mic toggle
  const [remainingTime, setRemainingTime] = useState(Number(time) * 60);

  // Timer -> Starts only when micActive = true
  useEffect(() => {
    if (!micActive || !remainingTime) return;
    const interval = setInterval(() => {
      setRemainingTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [micActive, remainingTime]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  // Sample names
  const maleNames = ["John", "Michael", "David", "Robert", "James"];
  const femaleNames = ["Emma", "Sophia", "Olivia", "Ava", "Isabella"];

  return (
    <Box sx={{ p: 1, minHeight: "80vh", background: "#f4f7fb" }}>
      <Paper
        elevation={3}
        sx={{
          p: 2,
          mx: "auto",
          borderRadius: "16px",
          background: "#fff",
        }}
      >
        {/* Summary */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          sx={{
            p: 0,
            borderRadius: "12px",
            background: "#f0f4ff",
            mx:"5px",
            mb: 1,
            flexWrap: "wrap",
          }}
        >
          <IconButton onClick={() => navigate("/meeting")} color="primary">
            <ArrowBackIcon />
          </IconButton>

          <Typography variant="body1">
            <b>Language:</b> {language}
          </Typography>
          <Typography variant="body1">
            <b>Voice:</b> {voice}
          </Typography>
          <Typography variant="body1">
            <b>Avatars:</b> {avatars}
          </Typography>
          <Typography variant="body1">
            <b>Subtitle:</b> {subtitle}
          </Typography>

          {/* Timer (only show after mic starts) */}
          {micActive && (
            <Typography variant="body1" color="error" sx={{ fontWeight: "bold" }}>
              ⏳ {formatTime(remainingTime)}
            </Typography>
          )}
        </Stack>

        <Divider sx={{ mb: 2 }} />

        {/* Chat Section */}
        <Box
          sx={{
            height: "400px",
            border: "1px solid #ddd",
            borderRadius: "12px",
            p: 2,
            mb: 2,
            background: "#fafafa",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {/* Avatars with Names - always visible */}
          <Stack direction="row" spacing={4} mb={3} flexWrap="wrap" justifyContent="center">
            {[...Array(Number(avatars))].map((_, idx) => {
              const isFemale = voice === "female";
              const name = isFemale
                ? femaleNames[idx % femaleNames.length]
                : maleNames[idx % maleNames.length];

              return (
                <Box
                  key={idx}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    variant="square" // <-- rectangular shape
                    src={`https://randomuser.me/api/portraits/${
                      isFemale ? "women" : "men"
                    }/${idx + 10}.jpg`}
                    sx={{
                      width: 280,
                      height: 220,
                      border: "3px solid #1976d2",
                      borderRadius: "12px", // keep a little rounding
                      mb: 1,
                    }}
                  />
                  <Typography variant="subtitle1" fontWeight="bold">
                    {name}
                  </Typography>
                </Box>
              );
            })}
          </Stack>

          {/* Mic + Stop Toggle */}
          <IconButton
            onClick={() => setMicActive((prev) => !prev)}
            sx={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              background: micActive ? "#d32f2f" : "#1976d2",
              color: "#fff",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
              "&:hover": { background: micActive ? "#9a0007" : "#1256a0" },
            }}
          >
            {micActive ? <StopIcon fontSize="large" /> : <MicIcon fontSize="large" />}
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
}
