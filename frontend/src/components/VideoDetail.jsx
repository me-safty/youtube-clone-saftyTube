import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import {
  Stack,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import ChannelCardRow from "./ChannelCardRow";
import Videos from "./videos";
import { KeyboardArrowRightRounded } from "@mui/icons-material";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState({});
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [channel, setChannel] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentsNum, setCommentsNum] = useState(5);

  useEffect(() => {
    fetchFromAPI(
      `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`
    ).then((data) => setVideoDetail(data.items[0]));
    fetchFromAPI(
      `search?relatedToVideoId=${id}&part=id%2Csnippet&type=video&maxResults=10`
    ).then((data) => setRelatedVideos(data.items));
    fetchFromAPI(
      `commentThreads?part=snippet&videoId=${id}&maxResults=100`
    ).then((data) => setComments(data.items));
  }, [id]);

  useEffect(() => {
    fetchFromAPI(
      `channels?part=snippet&id=${videoDetail?.snippet?.channelId}`
    ).then((data) => setChannel(data?.items[0]));
  }, [videoDetail]);

  return (
    <Stack direction={{ xs: "column", md: "row" }}>
      <Box flex={1} sx={{ height: "1px" }}>
        <Box sx={{ width: "100%", position: "sticky", top: "90px" }}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
          />
          <Typography variant="h6" color="#fff" p={1} fontWeight="bold">
            {videoDetail?.snippet?.title ||
              "how to kill how to kill how to kill how to kill how to kill"}
          </Typography>
          <Typography variant="subtitle1" color="#fff" p={1} pt={0}>
            {parseInt(
              videoDetail?.statistics?.viewCount || "100000000"
            ).toLocaleString()}{" "}
            View •{" "}
            {parseInt(
              videoDetail?.statistics?.likeCount || "100000000"
            ).toLocaleString()}{" "}
            Like
          </Typography>
          <Typography variant="subtitle2" color="gray" p={1} pt={0}>
            {videoDetail?.snippet?.description.slice(0, 150) ||
              "  Master modern web development by building a responsive React JS application consisting of stunning video sections, custom categories, channel pages, and, most importantly, you can play videos straight from your YouTube Clone App!"}
          </Typography>
          <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
            <ChannelCardRow
              styles={{
                width: "50px",
                p: 0,
                mt: "5px",
                variant: "body1",
                m: 1,
              }}
              channel={{
                img: channel?.snippet?.thumbnails?.medium?.url,
                title: channel?.snippet?.title,
                subNum: channel?.statistics?.subscriberCount,
              }}
            />
          </Link>
          <Box>
            <Typography variant="body1" color="#fff" p={1} mt={2}>
              {parseInt(
                videoDetail?.statistics?.commentCount || "50000"
              ).toLocaleString()}{" "}
              Comments
            </Typography>
            <Stack direction="column">
              {comments.slice(0, commentsNum).map((e, i) => (
                <Card
                  key={i}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    backgroundColor: "#0000",
                    borderRadius: 0,
                    boxShadow: "none",
                    m: 1,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={
                      e?.snippet?.topLevelComment?.snippet
                        ?.authorProfileImageUrl ||
                      "http://dergipark.org.tr/assets/app/images/buddy_sample.png"
                    }
                    alt={"img"}
                    sx={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                  <CardContent
                    sx={{
                      marginInlineStart: "10px",
                      p: 0,
                      paddingBlockEnd: "10px !important",
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="#fff"
                      mt={0}
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      {e?.snippet?.topLevelComment?.snippet
                        ?.authorDisplayName || "mohamed safty"}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="gray"
                      mt={0.5}
                      dangerouslySetInnerHTML={{
                        __html:
                          e?.snippet?.topLevelComment?.snippet?.textDisplay.slice(
                            0,
                            150
                          ),
                      }}
                    ></Typography>
                  </CardContent>
                </Card>
              ))}
            </Stack>
            <Button
              onClick={() => {
                setCommentsNum((p) => (p === 5 ? 50 : 5));
                if (commentsNum !== 5) {
                  window.scrollTo({
                    top: 300,
                    left: 0,
                    behavior: "smooth",
                  });
                }
              }}
              sx={{
                padding: "6px 4px 6px 10px",
                width: "fit-content",
                display: "flex",
                alignItems: "center",
                scale: ".9",
                color: "#fff",
                "&:hover": {
                  background: "#121212",
                },
              }}
            >
              <span style={{ marginBlockStart: "1.5px" }}>
                show {commentsNum === 5 ? "more" : "less"}
              </span>{" "}
              <KeyboardArrowRightRounded />
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        px={2}
        py={{ md: 1, xs: 5 }}
        justifyContent="center"
        alignItems="center"
      >
        <Videos direction="column" videos={relatedVideos.slice(0, 15)} />
      </Box>
    </Stack>
  );
};

export default VideoDetail;
