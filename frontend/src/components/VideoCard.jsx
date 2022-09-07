import { CheckCircle } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video: { snippet, id } }) => {
  return (
    <Card
      sx={{
        // width: "320px",
        boxShadow: "none",
        borderRadius: 0,
        backgroundColor: "#0000",
      }}
    >
      <CardActionArea>
        <Link to={`/video/${id?.videoId}`}>
          <CardMedia
            component="img"
            height="180"
            image={
              snippet?.thumbnails?.medium?.url ||
              "https://i.ibb.co/G2L2Gwp/API-Course.png"
            }
            alt={snippet?.title}
            sx={{ width: { xs: "100%", sm: "320px" }, height: "180px" }}
          />
        </Link>
        <CardContent sx={{ backgroundColor: "#0000", height: "80px" }}>
          <Link to={`/video/${id?.videoId}`}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              color="#fff"
              dangerouslySetInnerHTML={{ __html: snippet?.title.slice(0, 50) }}
            ></Typography>
          </Link>
          <Link to={`/channel/${snippet.channelId}`}>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              color="gray"
              sx={{ display: "flex", alignItems: "center" }}
            >
              {snippet?.channelTitle}
              <CheckCircle sx={{ fontSize: "16px", ml: "5px", mb: "0px" }} />
            </Typography>
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default VideoCard;
