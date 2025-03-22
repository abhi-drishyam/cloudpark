import React from "react";
import { Grid, Paper, Typography, Container } from "@mui/material";

const features = [
  { title: "Warehousing & Freight Solutions", description: "Comprehensive ambient and temperature-controlled storage and transportation solutions", icon: "📦" },
  { title: "Nationwide & Cross-Border Coverage", description: "A robust network enabling efficient deliveries across regions, no matter the distance.", icon: "🌎" },
  { title: "Dedicated Customer Success", description: "Your success is our priority, every step of the way", icon: "✅" }
];

const Features = () => {
  return (
    <Container sx={{ py: {xs:5,md:10,lg:10}, textAlign: "center" }}>
      <Typography variant="h3" fontWeight="bold" color="#035DB8" mb={6} fontSize={{xs:40}}>
        Driving Excellence in Every Mile
      </Typography>
      <Grid container spacing={5} alignItems="stretch">
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index} sx={{ display: 'flex' }}>
            <Paper
              elevation={3}
              sx={{
                p: 6,
                textAlign: "center",
                background: "#80808014",
                transition: "all 0.3s ease-in-out",
                cursor: "pointer",
                '&:hover': {
                  backgroundColor: "#1565c0",
                  transform: "scale(1.10)",
                  '& .description': { color: "#fff" }
                },
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
              }}
            >
              <Typography variant="h2">{feature.icon}</Typography>
              <Typography variant="h6" fontWeight="bold" mt={2} sx={{ color: "#FFBF40" }}>
                {feature.title}
              </Typography>
              <Typography
                variant="body1"
                mt={2}
                className="description"
                sx={{ flexGrow: 1, color: "#035DB8" }}
              >
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Features;
