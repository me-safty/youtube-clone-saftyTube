import { Box, Card, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";
import Videos from "./videos";
import ChannelCardRow from "./ChannelCardRow";

const ChannelDetail = () => {
  const { id } = useParams();

  const [channel, setChannel] = useState([]);
  const [channelVideos, setChannelVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannel(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=20`).then(
      (data) => setChannelVideos(data?.items)
    );
  }, [id]);

  return (
    <Box>
      <Card>
        <CardMedia
          component="img"
          height="180"
          image={
            channel?.brandingSettings?.image?.bannerExternalUrl ||
            "https://media.istockphoto.com/photos/blue-light-defocused-blurred-motion-abstract-background-picture-id1212284111?k=20&m=1212284111&s=612x612&w=0&h=sYaAKVxAEmsDVmbXs_iMzZkzanRlfB4nMWp7QsULWD0="
          }
          alt={channel?.snippet?.title || "title"}
          sx={{ width: "100%", height: "180px" }}
        />
      </Card>
      <ChannelCardRow
        channel={{
          img: channel?.snippet?.thumbnails?.medium?.url,
          title: channel?.snippet?.title,
          subNum: channel?.statistics?.subscriberCount,
        }}
      />
      <Typography
        sx={{ marginInlineStart: "40px", width: "fit-content" }}
        variant="body2"
        m={1}
        mb={2.5}
        color="gray"
      >
        {channel?.snippet?.description || "description"}
      </Typography>
      <Box p={2} sx={{ overflowY: "auto", backgroundColor: "#0f0f0f" }}>
        <Typography variant="h5" m={1} mb={2} color="#fff" fontWeight="bold">
          {channel?.snippet?.title || "title"}{" "}
          <span style={{ color: "red" }}>Videos</span>
        </Typography>
        <Videos videos={channelVideos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
