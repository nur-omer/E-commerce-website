import React, { useState } from "react";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import "./Slider.scss";

const Slider = () => {
  const [currentBackground, setCurrentBackground] = useState(0);

  const data = [
    "https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/6764944/pexels-photo-6764944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  const prevBackground = () => {
    setCurrentBackground(currentBackground === 0 ? 2 : (prev) => prev - 1);
  };
  const nextBackground = () => {
    setCurrentBackground(currentBackground === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentBackground * 100}vw)` }}
      >
        <img src={data[0]} alt="slid1" />
        <img src={data[1]} alt="slid2" />
        <img src={data[2]} alt="slid3" />
      </div>
      <div className="arrs">
        <ArrowCircleLeftOutlinedIcon className="arr" onClick={prevBackground} />
        <ArrowCircleRightOutlinedIcon
          className="arr"
          onClick={nextBackground}
        />
      </div>
    </div>
  );
};

export default Slider;
