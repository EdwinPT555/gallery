import React from "react";
import { Box, Grid } from "@mui/material";
import TileCard from "./TileCard";

const GridItem = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {props.data.map((_item) => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={_item.title}>
            <TileCard
              imgLink={`${_item.img}?w=164&h=164&fit=crop&auto=format`}
              title={_item.title}
              description={_item.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GridItem;
