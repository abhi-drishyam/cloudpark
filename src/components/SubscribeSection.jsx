import React from "react";
import { Box, Typography, TextField, Button, useMediaQuery, useTheme } from "@mui/material";

const SubscribeSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Mobile responsiveness

  return (
    <Box
      sx={{
        textAlign: "center",
        py: 6,
        backgroundColor: "#f8f9fa",
        display: "flex",
        flexDirection: isMobile ? "column" : "row", // Stack content on mobile
        alignItems: "center",
        justifyContent: isMobile ? "center" : "space-between",
        px: isMobile ? 4 : 8,
        gap: isMobile ? 4 : 2, // Increased spacing on mobile
      }}
    >
      {/* Logo Section */}
      <Box>
        <img
          src="/images/logo-01.png"
          alt="Cloudpark Logistics"
          width={isMobile ? 200 : 250} // Adjusted for mobile
        />
      </Box>

      {/* Divider Line (Hidden on Mobile) */}
      {!isMobile && (
        <Box
          sx={{
            width: "2px",
            height: "60px",
            backgroundColor: "#1565c0",
          }}
        />
      )}

      {/* Subscription Heading */}
      <Box textAlign={isMobile ? "center" : "left"}>
        <Typography variant="h5" fontWeight="bold" color="#035DB8">
          Subscribe for Updates
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Track your goods with Cloudpark Logistics
        </Typography>
      </Box>

      {/* Subscription Form */}
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"} // Stack form fields in mobile
        alignItems="center"
        gap={2}
        width={isMobile ? "100%" : "auto"} // Full width on mobile
      >
        <TextField
          placeholder="Email Address"
          variant="outlined"
          sx={{
            bgcolor: "white",
            borderRadius: "5px",
            color: "black",
            "& input": { color: "black", height: "20px" },
            "& fieldset": { borderColor: "#1565c0" },
            width: isMobile ? "100%" : "250px", // Full width on mobile
            height: "45px",
          }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFA000",
            textTransform: "none",
            fontWeight: "bold",
            px: 3,
            color: "white",
            height: "45px",
            width: isMobile ? "100%" : "auto", // Full width on mobile
          }}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};

export default SubscribeSection;
