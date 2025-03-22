import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import truckImage from "../../public/images/IMG_0431.png";

const OurFleet = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Mobile view handling

    return (
        <Box
            sx={{
                py: 6,
                backgroundColor: "#f5f5f5",
                width: "100%"
            }}
        >
            <Box
                sx={{
                    maxWidth: "100%",
                    textAlign: "center",
                    position: "relative",
                    width: "full"
                }}
            >
                {/* Our Fleet Label */}
                <Box
                    sx={{
                        display: "inline-block",
                        backgroundColor: "#035DB8",
                        color: "#ffffff",
                        borderRadius: "20px",
                        px: 2,
                        py: 0.5,
                        mb: 1,
                        mt: 10
                    }}
                >
                    <Typography variant="h6" color="#FFBF40">Our Fleet</Typography>
                </Box>

                {/* Main Heading */}
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    color="#035DB8"
                    gutterBottom
                    sx={{ mb: 2, mt: 1 }}
                >
                    Tailored Solutions for Every Logistics Need
                </Typography>

                {/* Grid Layout - Responsive for Mobile */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", // Single column on mobile
                        gap: isMobile ? 3 : 0, // Increased spacing for mobile
                        minHeight: "700px",
                        position: "relative",
                    }}
                >
                    {/* Row 1: Modern Fleet */}
                    <Box
                        sx={{
                            backgroundColor: "#035DB8",
                            color: "#ffffff",
                            padding: 4,
                            minHeight: "300px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: isMobile ? "center" : "flex-start",
                            textAlign: isMobile ? "center" : "left"
                        }}
                    >
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                            MODERN FLEET
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We operate a fleet of over 30 trucks equipped with the latest
                            technology and safety features to ensure efficient and reliable
                            transport.
                        </Typography>
                    </Box>

                    {/* Row 1: Vehicle Types */}
                    <Box
                        sx={{
                            backgroundColor: "#ffffff",
                            padding: 4,
                            minHeight: "300px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: isMobile ? "center" : "flex-end",
                            textAlign: isMobile ? "center" : "right"
                        }}
                    >
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                            VEHICLE TYPES
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Our fleet includes both Dry Vans and Refrigerated (Reefer) units,
                            designed to meet up-to-date market specifications or handling
                            diverse freight needs.
                        </Typography>
                    </Box>

                    {/* Row 2: Secure Storage */}
                    <Box
                        sx={{
                            backgroundColor: "#ffffff",
                            padding: 4,
                            minHeight: "300px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: isMobile ? "center" : "flex-start",
                            textAlign: isMobile ? "center" : "left"
                        }}
                    >
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                            SECURE STORAGE
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We operate a fleet of over 30 trucks equipped with the latest
                            technology and safety features to ensure efficient and reliable
                            transport.
                        </Typography>
                    </Box>

                    {/* Row 2: Comprehensive Capabilities */}
                    <Box
                        sx={{
                            backgroundColor: "#035DB8",
                            color: "#ffffff",
                            padding: 4,
                            minHeight: "300px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: isMobile ? "center" : "flex-end",
                            textAlign: isMobile ? "center" : "right"
                        }}
                    >
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                            COMPREHENSIVE CAPABILITIES
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Our range of services and equipment enables us to transport
                            everything from temperature-sensitive goods to standard dry
                            freight.
                        </Typography>
                    </Box>

                    {/* Truck Image - Adjusted for Mobile */}
                    <Box
                        sx={{
                            position: {md:"absolute",lg:"absolute"},
                            top: isMobile ? "85%" : "50%", // Lowered on mobile
                            left: {md:"50%",lg:"50%"},
                            transform: {md:"translate(-50%, -50%)",lg:"translate(-50%, -50%)"},
                            zIndex: 1,
                            width: "100%", // Adjusted width for mobile
                            maxWidth: "600px",
                            textAlign: "center",
                        }}
                    >
                        <img
                            src={truckImage}
                            alt="Modern Truck"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default OurFleet;
