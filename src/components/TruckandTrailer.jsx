import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import truckImage from "../../public/images/halftruck.png";

const TruckAndTrailerRepairServices = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Mobile responsiveness

  return (
    <Box
      sx={{
        width: "100%",
        py: 6,
        backgroundColor: "#f5f5f5",
        paddingLeft: isMobile ? 0 : "6%", // Remove left padding for mobile
        marginBottom: "10%",
        overflow: "hidden",
        textAlign: isMobile ? "center" : "left", // Center align text on mobile
      }}
    >
      <Box sx={{ width: "100%", px: { xs: 2, md: 0 } }}>
        {/* Heading Section */}
        <Box
          sx={{
            display: "inline-block",
            backgroundColor: "#035DB8",
            color: "#ffffff",
            borderRadius: "20px",
            px: 2,
            py: 0.5,
            mb: 4,
          }}
        >
          <Typography variant="h6" color="#FFBF40">
            Truck & Trailer Repair Services
          </Typography>
        </Box>

        <Box
          sx={{
            position: "relative",
            minHeight: "400px",
            display: "flex",
            flexDirection: isMobile ? "column" : "row", // Stack on mobile
            justifyContent: isMobile ? "center" : "flex-start",
            alignItems: "center",
            gap: isMobile ? 3 : 0, // Add spacing between stacked items
          }}
        >
          {/* Cards Section */}
          <Box
            sx={{
              width: isMobile ? "100%" : "70%",
              display: "flex",
              flexDirection: "column",
              gap: 3,
              zIndex: 2,
            }}
          >
            {/* First Row - 3 Cards (Becomes Stacked on Mobile) */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", // Stack cards in mobile
                gap: 3,
              }}
            >
              {/* Card Components */}
              {[
                {
                  title: "Tire Changes",
                  content:
                    "• On-site and roadside tire replacements\n• New and retread tire installation\n• Flat tire repairs and pressure checks",
                },
                {
                  title: "Brake Replacement",
                  content:
                    "• Full brake system inspections\n• Brake pad, drum, and rotor replacements\n• ABS system troubleshooting and repairs",
                },
                {
                  title: "Refrigeration Unit Repairs",
                  content:
                    "• Routine maintenance and diagnostics for reefer units\n• Temperature control system calibration\n• Electrical and mechanical component repairs",
                },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: "#035DB8",
                    color: "#ffffff",
                    borderRadius: "12px",
                    paddingX: 3,
                    paddingY: 5,
                    minWidth: "200px",
                    flex: 1,
                    textAlign: "left",
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    mb="16px"
                    gutterBottom
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" whiteSpace="pre-line">
                    {item.content}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Second Row - 2 Cards (Stacked on Mobile) */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", // 2 cards in a row on desktop
                gap: 3,
                maxWidth: "75%",
                mx: isMobile ? "auto" : "0", // Centering for mobile
              }}
            >
              {[
                {
                  title: "Annual Safety Inspections",
                  content:
                    "• Annual safety inspections and certifications\n• Lighting and electrical system checks\n• Door, seal, and structural integrity assessment",
                },
                {
                  title: "Basic Truck & Trailer Repairs",
                  content:
                    "• Lighting system repairs (LEDs, wiring, faulty connections)\n• Battery testing and replacements\n• Air system and suspension maintenance",
                },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: "#035DB8",
                    color: "#ffffff",
                    borderRadius: "12px",
                    paddingX: 3,
                    paddingY: 5,
                    minWidth: "200px",
                    flex: 1,
                    textAlign: "left",
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    mb="16px"
                    gutterBottom
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" whiteSpace="pre-line">
                    {item.content}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Truck Image - Resizes for Mobile */}
          <Box
            sx={{
              width: isMobile ? "100%" : "30%", // Resize image on mobile
              mx:"0", // Center image on mobile
              textAlign: "center",
            }}
          >
            <img
              src={truckImage}
              alt="Truck"
              style={{
                width: "100%",
                maxWidth: "350px", // Prevents overly large image on desktop
                objectFit: "cover",
                display: { sx: "none" },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TruckAndTrailerRepairServices;
