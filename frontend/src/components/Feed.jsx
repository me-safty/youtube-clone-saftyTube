import { Stack, Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromApi";
import Videos from "./videos";

const Feed = ({ selectedCategory, setSelectedCategory }) => {
  const [videos, setVideos] = useState([]);

  const url =
    selectedCategory === "Home"
      ? "search?relatedToVideoId=LdJbP0NbFRw&part=id%2Csnippet&type=video&maxResults=30"
      : `search?part=snippet&q=${selectedCategory}&maxResults=30`;

  useEffect(() => {
    fetchFromAPI(url).then((data) => setVideos(data.items));
  }, [selectedCategory]);

  return (
    <Stack>
      <Box p={2} sx={{ overflowY: "auto" }}>
        <Typography
          variant="h4"
          mb={2}
          fontWeight="bold"
          sx={{ color: "#fff", fontSize: "20px" }}
        >
          {selectedCategory} <span style={{ color: "red" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
