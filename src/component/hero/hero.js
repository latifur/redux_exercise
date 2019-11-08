import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Hero(props) {
  const sliderImg = [];
  if ((props.heroType = "room")) {
    sliderImg = useSelector(state => state.Room);
  }

  return <div></div>;
}

export default Hero;
