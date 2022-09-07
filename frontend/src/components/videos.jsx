import { Box, Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import ChannelCardRow from "./ChannelCardRow";
import VideoCard from "./VideoCard";

const videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loding...";

  return (
    <Stack
      direction={{xs: direction || "row", sm: "row", md: direction || "row"}}
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
    >
      {videos.map((item, i) => {
        if (!item.id.playlistId && item.snippet) {
          return (
            <Box
              key={i}
              sx={{
                width: {
                  xs: "100%",
                  sm: "320px",
                  display: item.id.channelId ? "flex" : "block",
                  alignItems: "center",
                },
              }}
            >
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && (
                <Link to={`/channel/${item.id.channelId}`}>
                  <ChannelCardRow
                    channel={{
                      img: item?.snippet?.thumbnails?.medium?.url,
                      title: item?.snippet?.channelTitle,
                    }}
                  />
                </Link>
              )}
            </Box>
          );
        }
      })}
    </Stack>
  );
};

export default videos;
