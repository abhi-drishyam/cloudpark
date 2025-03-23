import React, { useState, useEffect } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        height: isMobile ? "400px" : "700px",
        width: "100vw", // Ensure full viewport width
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "white",
        position: "relative",
        px: isMobile ? 0 : 5,
        overflow: "hidden",
        backgroundImage: !showVideo ? "url('/images/IMG_0431.JPG')" : "none",
        backgroundSize: {xs:"contain",md:"cover",lg:"cover"},
        backgroundPosition: "center",
        backgroundRepeat:"no-repeat",
        transition: "background-image 1s ease-in-out",
        overflow:'hidden  '
      }}
    >
      {showVideo && (
        <video
          autoPlay
          loop
          muted
          // playsInline
          style={{
            position: "absolute",
            top: 0, 
            left: 0,
            width: "100vw", // Full viewport width
            height: "100%", // Full container height
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src="/images/heroVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {!showVideo && (
        <>
          {/* Left Blue Text */}
          <Box
            sx={{
              position: "absolute",
              top: {xs:"5%",md:"10%",lg:"10%"},
              left: "5%",
              zIndex: 1,
              textAlign: isMobile ? "center" : "left",
              width: isMobile ? "100%" : "40%", // Consistent width control
              maxWidth: "600px", // Maximum width for consistency
            }}
          >
{!isMobile && (
  <>
            <Typography
              variant={isMobile ? "h6" : "h3"}
              fontWeight="bold"
              sx={{ color: "#035DB8", lineHeight: 1.1 }}
            >
              WELCOME TO
            </Typography>
            <Typography
              variant={isMobile ? "h5" : "h1"}
              fontSize={isMobile ? "1.5rem" : "5rem"}
              fontWeight="bold"
              sx={{ color: "#035DB8", lineHeight: 1.1 }}
            >
              CLOUDPARK LOGISTICS
            </Typography>
            </>
            )}
          </Box>

          {/* Right Yellow Text */}
          <Box
            sx={{
              position: "absolute",
              bottom: {xs:"2%",md:"10%",lg:"10%"},
              right: isMobile ? "50%" : "5%",
              transform: isMobile ? "translateX(50%)" : "none", // Center on mobile
              textAlign: isMobile ? "center" : "left",
              width: isMobile ? "90%" : "40%", // Consistent width control
              maxWidth: "600px", // Maximum width for consistency
              px: isMobile ? 2 : 0,
              display:{xs:"none",md:"block",lg:"block"}
            }}
          >
            <Typography variant={isMobile ? "h5" : "h4"}>
              <span style={{ color: "#FFBF40", fontWeight: "bold" }}>
                Redefining Cargo Transport Excellence
              </span>
            </Typography>
            <Typography variant={isMobile ? "body1" : "h6"}>
              Our mission is to redefine logistics with innovation, precision and
              exceptional Service, enabling our clients to achieve success!
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Hero;