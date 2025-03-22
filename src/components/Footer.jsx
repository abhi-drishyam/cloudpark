import React from "react";
import { Box, Typography, Paper, Button, useMediaQuery, useTheme } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Mobile responsiveness

  return (
    <Box sx={{ backgroundColor: "#035DB8", color: "white", py: 4, mt: 4 }}>
      {/* Footer Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row", // Stack on mobile
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gap: 3,
          px: isMobile ? 2 : 10, // Adjusted padding for mobile
          textAlign: isMobile ? "center" : "left",
        }}
      >
        {/* Left Section */}
        <Paper
          sx={{
            width: isMobile ? "100%" : "20rem", // Full width on mobile
            p: 3,
            bgcolor: "white",
            textAlign: "center",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: "120px",
            gap: 1,
          }}
        >
          <Typography variant="h4" fontWeight="bold" color="primary" fontSize={18}>
            Get The Best Rate For Your Freight Transport
          </Typography>
          <Typography variant="body2" color="textSecondary">
            24/7 customer support
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              textTransform: "none",
              backgroundColor: "#FFBF40",
              color: "white",
              fontWeight: "bold",
              px: 3,
            }}
          >
            Get the best rates ✅
          </Button>
        </Paper>

   <Box sx={{display:"flex",flexDirection:"column",alignItems:"start"}}>
         {/* Contact Information Cards */}
         <Box
          sx={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", // Stack cards in mobile
            gap: 2,
            width: "100%",
          }}
        >
          {/* Customer Service Card */}
          <Paper
            sx={{
              p: 2,
              bgcolor: "#FFBF40",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
            }}
          >
            <LocalPhoneIcon sx={{ color: "#035DB8", fontSize: "30px" }} />
            <Box>
              <Typography fontWeight="bold" color="#fff">
                24/7 Customer Service
              </Typography>
              <Typography variant="body2" color="#035DB8">+1 416-900-8673</Typography>
            </Box>
          </Paper>

          {/* Email Contact Card */}
          <Paper
            sx={{
              p: 2,
              bgcolor: "#FFBF40",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            <EmailIcon sx={{ color: "#035DB8", fontSize: "30px" }} />
            <Box>
              {[
                { label: "General Inquiry", email: "info@cloudpark.ca" },
                { label: "Karamvir G", email: "kgill@cloudpark.ca" },
                { label: "Aman S.", email: "askerhi@cloudpark.ca" },
                { label: "Sal B.", email: "sal@cloudpark.ca" },
              ].map((contact, index) => (
                <Box key={index} sx={{ display: "flex" }}>
                  <Typography variant="body2" color="#fff">
                    {contact.label}
                  </Typography>
                  <Typography variant="body2" paddingLeft="15px" color="#035DB8">{contact.email}</Typography>
                </Box>
              ))}
            </Box>
          </Paper>

          {/* Location Card */}
          <Paper
            sx={{
              p: 2,
              bgcolor: "#FFBF40",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
            }}
          >
            <HomeIcon sx={{ color: "#035DB8", fontSize: "30px" }} />
            <Box>
              <Typography variant="body2" color="#fff">
                Calgary Yard: <span style={{color:"#035DB8"}}>9050 Innovation Ave SE, Calgary, AB T3S 0A2</span>
              </Typography>
              <Typography variant="body2" color="#fff">
                GTA Yard: <span style={{color:"#035DB8"}}>7499 Auburn Road, Milton, ON, L9T 7V9</span>
              </Typography>
            </Box>
          </Paper>
        </Box>
          {/* Navigation Links */}
      <Box
        sx={{
          display: "flex",
          flexDirection:"row", // Stack links on mobile
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
          mt: 3,
          textAlign: "center",
        }}
      >
        {["Home", "Services", "Our Fleet", "Contact Us"].map((link, index) => (
          <Typography key={index}>{link}</Typography>
        ))}
      </Box>
   </Box>
      </Box>

    

      {/* Footer Bottom Section */}
      <Box
        mt={4}
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row", // Stack content on mobile
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
          px: isMobile ? 2 : "80px",
          gap: isMobile ? 2 : 0,
        }}
      >
        <Typography variant="body2">Cloudpark Logistics | All rights reserved</Typography>

        {/* Footer Links */}
        <Box
          sx={{
            display: "flex",
            flexDirection:"row",
            justifyContent: "center",
            gap:2,
          }}
        >
          {["Privacy", "Terms & Conditions", "Site Map", "Contact"].map((link, i) => (
            <Typography
              key={i}
              sx={{
                cursor: "pointer",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              {link}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
