import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";

const Navbar = () => {
  return (
    <Box
      component="nav"
      sx={{
        width: "100%",
        backgroundColor: "#f5f5f5",
        py: 2, // padding y
        px: 4, // padding x
        display: "flex",
        // justifyContent: "center",
        gap: 4,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <Typography variant="h6" color="text.primary">
          Accueil
        </Typography>
      </Link>
      <Link to="/news" style={{ textDecoration: "none" }}>
        <Typography variant="h6" color="text.primary">
          Nouvelles
        </Typography>
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        <Typography variant="h6" color="text.primary">
          A propos
        </Typography>
      </Link>
    </Box>
  );
};

export default Navbar;
