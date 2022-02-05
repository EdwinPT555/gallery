import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";
import "../App.css";

const WatchVideo = () => {
  const [videoData, setVideoData] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = data.find((item) => item.title === id);
    setVideoData(fetchData);
  }, [id]);

  return (
    <Card className="watch-card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image={videoData && videoData.img}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {videoData && videoData.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {videoData && videoData.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default WatchVideo;
