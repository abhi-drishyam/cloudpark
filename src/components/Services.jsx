import React from "react";
import { Box, Typography, Button } from "@mui/material";
import CanadaMap from "../../public/images/9.png"; // Canada map image
import USMap from "../../public/images/8.png"; // US map image
import CanadaFlag from "../../public/images/Wikipedia-Flags-CA-Canada-Flag.1024.png"; // Canada flag image
import USFlag from "../../public/images/american-flag-2144392_640.png"; // US flag image

const Services = () => {
  return (
    <Box
    
      sx={{
        py: 6,
        backgroundColor: "#f5f5f5",
        display:"flex",
        justifyContent:"center" // Light background to match the feel
        
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px", // Adjusted to fit the layout
          display: "flex",
          justifyContent: "space-between",
          alignItems: {xs:"center"},
          flexDirection:{xs:'column',md:'row',lg:"row"}
        }}
      >
        {/* Left Side: Text Content */}
        <Box
          sx={{
            maxWidth: {xs:'100%',md:"60%",lg:"60%"},
            textAlign: {xs:"center",md:"left",lg:"left"},
            paddingRight: {md:"20px", lg:"20px"},
            paddingX:{xs:"20px"}
            
          }}
        >
          {/* Service Areas Label */}
          <Box
            sx={{
              display: "inline-block",
              backgroundColor: "#035DB8",
              color: "#ffffff",
              borderRadius: "20px",
              px: 2,
              py: 0.5,
              mb: 2,
              mt: 14
            }}
          >
            <Typography variant="h6" color="#FFBF40">Service Areas</Typography>
          </Box>

          {/* Main Heading */}
          <Typography
            variant="h4"
            fontWeight="bold"
            color="#035DB8"
            gutterBottom
          >
            Delivering Coast-to-Coast Coverage
          </Typography>

          {/* Subheading */}
          <Typography
            variant="h6"
            mt={2}
            color="#FFBF40"
            gutterBottom
          >
            Seamlessly connecting every corner of Canada and the USA
          </Typography>

          {/* Description */}
          <Typography variant="body1" paragraph sx={{ mt: 4 }}>
            At CloudPark, our expansive network ensures reliable and efficient
            transport across all provinces and states. Whether it’s local
            deliveries or cross-border shipments, we’ve got you covered with
            precision and care.
          </Typography>

          {/* Flag and Text Sections */}
          <Box sx={{ mt: 2, display: {md:"flex",lg:"flex"}, alignItems: "" }}>
            <Box sx={{ display: "flex", alignItems: "flex-start" }}>
              <img
                src={CanadaFlag}
                alt="Canada Flag"
                style={{ width: "60px", marginRight: "10px",  }}
              />
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
                <Typography variant="body2" component="span">
                  From Vancouver to Halifax:
                </Typography>
                <Typography variant="body2" component="span">
                  Serving every province with exceptional
                  logistics solutions, from British Columbia’s west coast to
                  Nova Scotia’s east coast. We deliver reliability across Canada.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-start" }}>
              <img
                src={USFlag}
                alt="USA Flag"
                style={{ width: "60px", marginRight: "10px" }}
              />
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
                <Typography variant="body2" component="span">
                  From California to New York:
                </Typography>
                <Typography variant="body2" component="span">
                  Delivering exceptional logistics
                  solutions across the United States, from the West Coast to the East
                  Coast. We ensure reliability nationwide.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Questions and Button */}
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Questions About Our Services?
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "#ffff",
              color: "#035DB8",
              border: "2px solid #FFBF40",
              "&:hover": {
                backgroundColor: "#f57c00",
              },
              padding: "10px 20px",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            TALK TO OUR SPECIALIST
          </Button>
        </Box>

        {/* Right Side: Maps */}
        <Box
          sx={{
            maxWidth: {md:"40%",lg:"40%"},
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems:{xs:"center"},
            gap: 2,
            marginTop: 6,
          }}
        >
          <img
            src={USMap}
            alt="USA Map"
            style={{ width: "350px", height: "auto" }}
          />
          <img
            src={CanadaMap}
            alt="Canada Map"
            style={{ width: "350px", height: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Services;