import {
  Card,
  CardActionArea,
  CardContent,
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

const WatchVideo = () => {
  const [videoData, setVideoData] = useState();
  const { id } = useParams();
  const ref = React.useRef(null);

  useEffect(() => {
    const fetchData = data.find((item) => item.title === id);
    setVideoData(fetchData);
  }, [id]);

  const STREAMS = [
    {
      name: "Angel One MPEG-DASH",
      src: "https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd",
    },
    {
      name: "Big Buck Bunny HLS",
      src: "https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths-hls/hls.m3u8",
    },
  ];

  return (
    <Card className="watch-card">
      <Grid container spacing={2}>
        <Grid item lg={8} md={12}>
          <CardActionArea>
            <ShakaPlayer
              ref={ref}
              autoPlay
              src={STREAMS[1].src}
              className="media-card"
            />
          </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {videoData && videoData.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {videoData && videoData.description}
              </Typography>
            </CardContent>
        </Grid>

        <Grid item lg={4} md={12}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {data.map((_item) => (
                <Grid item lg={12} key={_item.title}>
                  <TileCard
                    imgLink={`${_item.img}?w=164&h=164&fit=crop&auto=format`}
                    title={_item.title}
                    description={_item.description}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        
      </Grid>
    </Card>
  );
};

export default WatchVideo;
