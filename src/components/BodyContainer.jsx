import React from "react";
import { Route, Routes } from "react-router-dom";
import GridItem from "./GridItem";
import { data } from "../data";
import WatchVideo from "./WatchVideo";
const BodyContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<GridItem data={data} />} />
      <Route path="/watch/:id" element={<WatchVideo />} />
    </Routes>
  );
};

export default BodyContainer;
