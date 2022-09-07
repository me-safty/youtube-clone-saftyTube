import { CheckCircle } from "@mui/icons-material";
import { CardMedia, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const ChannelCard = ({
  channel: {
    snippet,
    id: { channelId },
  },
}) => {
  return (
    <Box sx={{ transform: "translateY(30px)" }}>
      <Link to={`/channel/${channelId}`}>
        <div
          className="Box"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <CardMedia
            component="img"
            height="180"
            image={
              snippet?.thumbnails?.medium?.url ||
              "https://i.ibb.co/G2L2Gwp/API-Course.png"
            }
            alt={snippet?.channelTitle}
            sx={{ width: "180px", height: "180px", borderRadius: "50%" }}
          />
          <Typography
            variant="h6"
            fontWeight="bold"
            color="#fff"
            mt={2}
            sx={{ display: "flex", alignItems: "center" }}
          >
            {snippet?.channelTitle}
            <CheckCircle
              sx={{ color: "gray", fontSize: "16px", ml: "5px", mt: "5px" }}
            />
          </Typography>
        </div>
      </Link>
    </Box>
  );
};

export default ChannelCard;
