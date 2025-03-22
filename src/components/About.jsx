import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InventoryIcon from "@mui/icons-material/Inventory";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const About = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(./images/doubletruck.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: { xs: 4, md: 12 },
        color: "#fff",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      />
      <Container sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <Typography
          variant="subtitle1"
          sx={{
            bgcolor: "#035DB8",
            display: "inline-block",
            px: 3,
            py: 1,
            borderRadius: "20px",
            mb: {xs:4,md:2,lg:2},
          }}
        >
          ABOUT US
        </Typography>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ fontSize: { xs: 22 } }}
        >
          Our mission is to redefine logistics with innovation, precision
        </Typography>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={4}
          sx={{ fontSize: { xs: 20 } }}
        >
          and exceptional service, enabling our clients to achieve success.
        </Typography>
        <Grid container spacing={4} textAlign="left" mb={8}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1">
              We offer industry-leading logistics services, customized to each
              client's shipping needs. When time is of the essence, we can
              arrange express services with guaranteed delivery times.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1">
              As a trusted partner, we provide reliable transportation services
              to a wide variety of industries that rely on our comprehensive
              logistics services and solutions.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container
        sx={{
          position: { md: "absolute" },
          bottom: -60,
          left: "50%",
          transform: { md: "translateX(-50%)" },
          zIndex: 2,
          width: "100%",
        }}
      >
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {/* First Card */}
          <Grid item xs={6} sm={6} md={3} position="relative">
            <Paper
              elevation={6}
              sx={{
                paddingX: "40px",
                paddingY: "20px",
                bgcolor: "#035DB8",
                color: "#fff",
                borderRadius: "10px",
                textAlign: "left",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  backgroundColor: "#FFBF40",
                  padding: "10px",
                  borderRadius: "50%",
                }}
              >
                <img
                  src="./images/about-icon1.png"
                  width="40px"
                  height="40px"
                />
              </Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: "#FFBF40" ,fontSize:{xs:16} }}
              >
                Fleet Strength
              </Typography>
              <Box sx={{ display: "flex", alignItems: "end" }}>
                <Typography variant="h3" fontWeight="bold" fontSize={{xs:30}}>
                  30+
                </Typography>
                <Typography variant="body2" color="#FFBF40">Trucks </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "end" }}>
                <Typography variant="h4" fontWeight="bold" fontSize={{xs:30}}>
                  60+
                </Typography>
                <Typography variant="body2" color="#FFBF40">Trailers</Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Second Card */}
          <Grid item xs={6} sm={6} md={3} position="relative">
            <Paper
              elevation={6}
              sx={{
                paddingX: {xs:"30px",md:"40px"},
                paddingY: "20px",
                bgcolor: "#035DB8",
                color: "#fff",
                borderRadius: "10px",
                textAlign: "left",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  backgroundColor: "#FFBF40",
                  padding: "10px",
                  borderRadius: "50%",
                }}
              >
                <img
                  src="./images/about-icon2.png"
                  width="40px"
                  height="40px"
                />
              </Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: "#FFBF40", fontSize:{xs:16} }}
              >
                Service Reach
              </Typography>
              <Typography variant="h2" fontWeight="bold" fontSize={{xs:30,md:40}}>
                50K+
              </Typography>
              <Typography variant="body2" color="#FFBF40">Shipments Completed</Typography>
            </Paper>
          </Grid>

          {/* Third Card */}
          <Grid item xs={6} sm={6} md={3} position="relative">
            <Paper
              elevation={6}
              sx={{
                paddingX: "40px",
                paddingY: "20px",
                bgcolor: "#035DB8",
                color: "#fff",
                borderRadius: "10px",
                textAlign: "left",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  backgroundColor: "#FFBF40",
                  padding: "10px",
                  borderRadius: "50%",
                }}
              >
                <img
                  src="./images/about-icon3.png"
                  width="40px"
                  height="40px"
                />
              </Box>
              <Typography variant="h1" fontWeight="bold" fontSize={{xs:30, md:"4rem"}}>
                10+
              </Typography>
              <Typography variant="body2" color="#FFBF40">
                Years of Industry Experience
              </Typography>
            </Paper>
          </Grid>

          {/* Fourth Card */}
          <Grid item xs={6} sm={6} md={3} position="relative">
            <Paper
              elevation={6}
              sx={{
                paddingX: "40px",
                paddingY: "20px",
                bgcolor: "#035DB8",
                color: "#fff",
                borderRadius: "10px",
                textAlign: "left",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  backgroundColor: "#FFBF40",
                  padding: "10px",
                  borderRadius: "50%",
                }}
              >
                <img
                  src="./images/about-icon4.png"
                  width="40px"
                  height="40px"
                />
              </Box>
              <Typography variant="h5" fontWeight="bold" fontSize={{xs:14, md:"1.10rem"}}>
                TEMPERATURE AND AMBIENT WAREHOUSING STORAGE
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
