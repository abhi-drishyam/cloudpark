import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 80; // Adjust this based on navbar height
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });

      setMobileOpen(false); // Close mobile menu after clicking a link
    }
  };

  const navItems = [
    { text: "Home", link: "hero" },
    { text: "Services", link: "services" },
    { text: "Our Fleet", link: "fleet" },
    { text: "Contact Us", link: "contact" },
  ];

  return (
    <AppBar position="static" color="default">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: { xs: "space-between", md: "center" },
          gap: 4,
          alignItems: "center",
          paddingX: mobileOpen ? "10px" : "",
        }}
      >
        {/* Left Buttons */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
          {navItems.slice(0, 2).map((item, index) => (
            <Button
              key={index}
              color="inherit"
              // href={item.link}
              onClick={() => handleScroll(item.link)}
              sx={{ fontSize: "18px", fontWeight: "bold" }}
            >
              {item.text}
            </Button>
          ))}
        </Box>

        {/* Logo in Center */}
        <Box>
          <img
            src="/images/logo-01.png"
            alt="Cloudpark Logistics"
            style={{ maxWidth: "180px" }}
          />
        </Box>

        {/* Right Buttons */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
          {navItems.slice(2).map((item, index) => (
            <Button
              key={index}
              color="inherit"
              // href={item.link}
              onClick={() => handleScroll(item.link)}
              sx={{ fontSize: "18px", fontWeight: "bold" }}
            >
              {item.text}
            </Button>
          ))}
        </Box>
        {/* Mobile Menu Button */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", md: "none" } }}
        PaperProps={{
          sx: {
            backgroundColor: "#1565c0",
            color: "white",
            width: 280,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 2,
            color: "#fff",
          }}
        >
          <img
            src="/images/logo-01.png"
            alt="Cloudpark Logistics"
            style={{ maxWidth: "150px", marginBottom: "10px", color: "#fff" }}
          />
        </Box>
        <Divider sx={{ bgcolor: "white" }} />
        <List>
          {navItems.map((item, index) => (
            <ListItem
              button
              key={index}
              component="a"
              // href={item.link}
              onClick={() => handleScroll(item.link)}
              sx={{
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
              }}
            >
              <ListItemText
                primary={item.text}
                sx={{ textAlign: "center", fontWeight: "bold", color: "#fff" }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
