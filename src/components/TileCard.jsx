import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TileCard = (props) => {
  const navigate = useNavigate();
  const onWatchClick = () => {
    navigate(`watch/${props.title}`);
  };
  return (
    <Card onClick={onWatchClick} sx={{ boxShadow: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={props.imgLink}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TileCard;