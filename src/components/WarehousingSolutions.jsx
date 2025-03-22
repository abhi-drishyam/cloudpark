import React from "react";
import { Box, Typography } from "@mui/material";

// Placeholder icons (replace with actual paths)
import coolerIcon from "../../public/images/temperature-control.png";
import warehouseIcon from "../../public/images/warehouse.png";
import leasingIcon from "../../public/images/lease.png";

const WarehousingSolutions = () => {
  return (
    <Box
      sx={{
        py: {md:6,lg:6},
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          marginX: {xs:'30px',md:'124px'},
        }}
      >
        {/* Warehousing Solutions Label */}
        <Box
          sx={{
            display: "inline-block",
            backgroundColor: "#035DB8",
            color: "#ffffff",
            borderRadius: "20px",
            px: 2,
            py: {md:0.5,lg:0.5},
            mb: 4,
          }}
        >
          <Typography variant="h6" color="#FFBF40">
            Warehousing Solutions
          </Typography>
        </Box>

        {/* Main Heading */}
        <Typography
          variant="h3"
          fontWeight="bold"
          color="#035DB8"
          gutterBottom
          sx={{ mb: 2 ,fontSize:{xs:20} }}
        >
          Expanding Your Capacity with Flexible Warehousing Solutions
        </Typography>

        {/* Subheading */}
        <Typography
          variant="body1"
          color="text.primary"
          paragraph
          sx={{ mb: 6, maxWidth: "800px", margin: "0 auto", fontSize: {xs:16,md:20, lg:20} }}
        >
          At CloudPark, we are building scalable warehousing solutions tailored
          for your needs. With storage options, including temperature-controlled
          and dry storage, we are here to ensure your goods are stored safely,
          securely, and are ready for transport.
        </Typography>

        {/* Sections */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            gap: 14,
            flexWrap: "wrap",
            marginTop: "128px",
          }}
        >
          {/* Temperature-Controlled Storage */}
          <Box
            sx={{
              backgroundColor: "#035DB8",
              color: "#ffffff",
              borderRadius: "8px",
              paddingY: 5,
              paddingX: 3,
              flex: 1,
              minWidth: "150px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
            }}
          >
            <Box
              sx={{
                mb: 2,
                backgroundColor: "#ffffff",
                borderRadius: "50%",
                width: 100,
                height: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: 0,
                left: "0",
                transform: "translate(-50%, -50%)",
                transition: "transform 0.3s ease",
                border:"2px solid #FFBF40"
              }}
            >
              <img
                src={coolerIcon}
                alt="Cooler Icon"
                style={{ width: "60px", height: "60px" }}
              />
            </Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Temperature-Controlled Storage
            </Typography>
            <Box
              sx={{
                display: "flex",
                textAlign: "start",
              }}
            >
              <Typography variant="body2">
                • Cooler and Frozen Space Available
                <br />• Maintain the integrity of perishable goods with
                state-of-the-art refrigeration.
              </Typography>
            </Box>
          </Box>

          {/* Dry Storage */}
          <Box
            sx={{
              backgroundColor: "#035DB8",
              color: "#ffffff",
              borderRadius: "8px",
              paddingY: 5,
              paddingX: 3,
              flex: 1,
              minWidth: "300px", // Ensure minimum width for responsiveness
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
            }}
          >
            <Box
              sx={{
                mb: 2,
                backgroundColor: "#ffffff",
                borderRadius: "50%",
                width: 100,
                height: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: 0,
                left: "0",
                transform: "translate(-50%, -50%)",
                transition: "transform 0.3s ease",
                border:"2px solid #FFBF40"
             }}
            >
              <img
                src={warehouseIcon}
                alt="Warehouse Icon"
                style={{ width: "60px", height: "60px" }}
              />
            </Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Dry Storage
            </Typography>
            <Typography variant="body2" textAlign="start">
              • Versatile Space for Non-Perishable Goods
              <br />• Ideal for shelf-stable products, packaging materials and
              more.
            </Typography>
          </Box>

          {/* Short-Term and Long-Term Leasing */}
          <Box
            sx={{
              backgroundColor: "#035DB8",
              color: "#ffffff",
              borderRadius: "8px",
              paddingY: 5,
              paddingX: 3,
              flex: 1,
              minWidth: "300px", // Ensure minimum width for responsiveness
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
            }}
          >
            <Box
              sx={{
                mb: 2,
                backgroundColor: "#ffffff",
                borderRadius: "50%",
                width: 100,
                height: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: 0,
                left: "0",
                transform: "translate(-50%, -50%)",
                transition: "transform 0.3s ease",
                border:"2px solid #FFBF40"
              }}
            >
              <img
                src={leasingIcon}
                alt="Leasing Icon"
                style={{ width: "60px", height: "60px" }}
                padding="12px"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Short-Term and Long-Term Leasing
              </Typography>
              <Typography variant="body2" textAlign="start">
                • Flexible Storage Plans
                <br />• Choose from customizable lease durations to suit
                operational needs.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WarehousingSolutions;
