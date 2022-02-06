import {
  Card,
  CardActionArea,
  CardContent,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";
import "../App.css";
import { Box, Grid } from "@mui/material";
import ShakaPlayer from "shaka-player-react";
import "shaka-player/dist/controls.css";
import TileCard from "./TileCard";
import {
  ContentCopy,
  ThumbDown,
  ThumbDownOutlined,
  ThumbUp,
  ThumbUpOutlined,
} from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WatchVideo = () => {
  const [videoData, setVideoData] = useState();
  const [like, setLike] = useState(true);
  const { id } = useParams();
  const ref = React.useRef(null);

  useEffect(() => {
    (async () => {
      const data = await fetch(`https://api.pexels.com/videos/videos/${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization:
            "563492ad6f91700001000001039be1c8320f4208b1562d0a03314ecb", //use the apikey you have generated
        },
      });
      const response = await data.json(); //convert the response to json
      setVideoData(response);
    })();
  }, [id]);

  const onlikeClick = () => {
    setLike(!like);
    like
      ? toast.error("You Disliked this Video!", {})
      : toast.success("You liked this Video!");
  };

  const onShareClick = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("link copied!");
  };

  if (!videoData)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </div>
    );

  return (
    <Card className="watch-card">
      <Grid container spacing={2}>
        <Grid item lg={8} md={12}>
          <CardActionArea>
            <ShakaPlayer
              ref={ref}
              autoPlay
              src={videoData.video_files[0].link}
              className="media-card"
            />
          </CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {videoData && videoData.id}
            </Typography>
            <div
              className="reuse-flex"
              style={{ justifyContent: "space-between" }}
            >
              <Typography variant="body2" color="text.secondary">
                156788 views &nbsp;&nbsp;&nbsp;&nbsp;
                {new Date().toLocaleDateString()}
              </Typography>
              <div className="reuse-flex">
                <div className="reuse-flex">
                  <IconButton onClick={onlikeClick} disabled={like}>
                    {like ? <ThumbUp /> : <ThumbUpOutlined />}
                  </IconButton>
                  <Typography variant="h6" color="text.secondary">
                    134k
                  </Typography>
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="reuse-flex">
                  <IconButton onClick={onlikeClick} disabled={!like}>
                    {like ? <ThumbDownOutlined /> : <ThumbDown />}
                  </IconButton>
                  <Typography variant="h6" color="text.secondary">
                    2k
                  </Typography>
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="reuse-flex">
                  <IconButton onClick={onShareClick}>
                    <ContentCopy />
                  </IconButton>
                  <Typography variant="h6" color="text.secondary">
                    Share
                  </Typography>
                </div>
              </div>
            </div>
            <Typography variant="body2" color="text.secondary">
              {videoData && videoData.description}
            </Typography>
            <br />
            <br />
          </CardContent>
        </Grid>

        <Grid item lg={4} md={12}>
          <Typography variant="h6" color="text.secondary">
            Continue Watching
          </Typography>
          <br />
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {data.map((_item) => (
                <Grid item lg={12} key={_item.title}>
                  <TileCard
                    imgLink={`${_item.img}?w=164&h=164&fit=crop&auto=format`}
                    title={_item.title}
                    description={_item.description}
                    sideView={true}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>

      <ToastContainer />
    </Card>
  );
};

export default WatchVideo;
