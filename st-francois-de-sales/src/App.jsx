import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import News from "./components/News";
import PageFooter from "./components/PageFooter";
import { Box } from "@mui/material"

function App() {
  return (
    <Router>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100dvh" }}>

        <Navbar />

        <Box sx={{flex: 1}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Box>

        <PageFooter />
      </Box>
    </Router>
  );
}

export default App;
