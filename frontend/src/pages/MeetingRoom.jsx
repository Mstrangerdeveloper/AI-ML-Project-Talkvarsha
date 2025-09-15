import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MeetingRoom() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    language: "",
    time: "",
    voice: "",
    avatars: "",
    subtitle: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = () => {
    const { language, time, voice, avatars, subtitle } = formData;
    if (!language || !time || !voice || !avatars || !subtitle) {
      setError("⚠️ All fields are mandatory!");
      return;
    }
    navigate("/conversation", { state: formData });
  };

  const handleCancel = () => {
    setFormData({ language: "", time: "", voice: "", avatars: "", subtitle: "" });
    setError("");
  };

  return (
    <Box sx={{ p: 4, minHeight: "80vh", background: "#f4f7fb" }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 900,
          mx: "auto",
          borderRadius: "16px",
          background: "#fff",
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
          Meeting Room - Configure Your Avatar
        </Typography>
        <Stack spacing={3}>
          {/* Language */}
          <FormControl fullWidth>
            <InputLabel>Choose Language</InputLabel>
            <Select
              name="language"
              value={formData.language}
              onChange={handleChange}
            >
              <MenuItem value="english">English</MenuItem>
              <MenuItem value="hindi">Hindi</MenuItem>
              <MenuItem value="spanish">Spanish</MenuItem>
              <MenuItem value="dutch">Dutch</MenuItem>
              <MenuItem value="french">French</MenuItem>
            </Select>
          </FormControl>

          {/* Time */}
          <FormControl fullWidth>
            <InputLabel>Talk Time (minutes)</InputLabel>
            <Select name="time" value={formData.time} onChange={handleChange}>
              <MenuItem value="5">5 Minutes</MenuItem>
              <MenuItem value="10">10 Minutes</MenuItem>
              <MenuItem value="15">15 Minutes</MenuItem>
              <MenuItem value="20">20 Minutes</MenuItem>
            </Select>
          </FormControl>

          {/* Voice */}
          <FormControl fullWidth>
            <InputLabel>Choose Voice</InputLabel>
            <Select name="voice" value={formData.voice} onChange={handleChange}>
              <MenuItem value="male">Male Avatar</MenuItem>
              <MenuItem value="female">Female Avatar</MenuItem>
            </Select>
          </FormControl>

          {/* Avatars */}
          <FormControl fullWidth>
            <InputLabel>Number of Avatars</InputLabel>
            <Select
              name="avatars"
              value={formData.avatars}
              onChange={handleChange}
            >
              <MenuItem value="1">1 Avatar</MenuItem>
              <MenuItem value="2">2 Avatars</MenuItem>
              <MenuItem value="3">3 Avatars</MenuItem>
              <MenuItem value="4">4 Avatars</MenuItem>
            </Select>
          </FormControl>

          {/* Subtitle */}
          <FormControl fullWidth>
            <InputLabel>Subtitle</InputLabel>
            <Select
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
            >
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </Select>
          </FormControl>

          {/* Error message */}
          {error && (
            <Typography color="error" fontWeight="bold">
              {error}
            </Typography>
          )}

          {/* Buttons */}
          <Stack direction="row" justifyContent="space-between">
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleCancel}
              sx={{ borderRadius: "12px", px: 3 }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{ borderRadius: "12px", px: 3 }}
            >
              Submit & Save
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}
