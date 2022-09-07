import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import VideoDetail from "./components/VideoDetail";
import ChannelDetail from "./components/ChannelDetail";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("Home");
  return (
    <BrowserRouter>
      <Box>
        <Navbar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Feed
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            }
          />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
