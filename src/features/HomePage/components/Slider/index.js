import React from "react";
import "./Slider.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
// import { v4 } from "uuid";
import slide1 from "./slide1.png";
import slide2 from "./slide2.png";
import slide3 from "./slide3.png";
import {
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SlideItem from "./SlideItem";

export default function SlideShow() {
  const style = {
    textAlign: "center",
    fontSize: "30px",
  };

  const theme = useTheme();
  let isXs = useMediaQuery(theme.breakpoints.down("xs"));

  const properties = {
    duration: 1000,
    transitionDuration: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    indicators: true,
    arrows: false,
    prevArrow: (
      <svg
        width="35"
        height="56"
        viewBox="0 0 35 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.928432 30.5738L26.8294 55.0983C27.4284 55.666 28.2281 55.9788 29.0808 55.9788C29.9335 55.9788 30.7332 55.666 31.3322 55.0983L33.2397 53.2927C34.4808 52.1161 34.4808 50.2038 33.2397 49.029L11.49 28.4348L33.2638 7.81765C33.8628 7.24997 34.1936 6.49321 34.1936 5.68627C34.1936 4.87843 33.8628 4.12167 33.2638 3.55354L31.3564 1.74834C30.7568 1.18066 29.9576 0.867916 29.1049 0.867916C28.2522 0.867916 27.4526 1.18066 26.8535 1.74834L0.928432 26.2953C0.327957 26.8648 -0.00185394 27.6251 3.8147e-05 28.4334C-0.00185394 29.2448 0.327957 30.0047 0.928432 30.5738Z"
          fill="#4E4E4E"
        />
      </svg>
    ),
    nextArrow: (
      <svg
        width="35"
        height="56"
        viewBox="0 0 35 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34.0718 26.2727L8.17088 1.7481C7.57182 1.18042 6.77213 0.867676 5.91945 0.867676C5.06676 0.867676 4.26707 1.18042 3.66801 1.7481L1.76059 3.55375C0.519415 4.73033 0.519415 6.64262 1.76059 7.81741L23.5102 28.4117L1.73646 49.0288C1.1374 49.5965 0.806641 50.3532 0.806641 51.1602C0.806641 51.968 1.1374 52.7248 1.73646 53.2929L3.64388 55.0981C4.24341 55.6658 5.04263 55.9785 5.89531 55.9785C6.748 55.9785 7.54769 55.6658 8.14675 55.0981L34.0718 30.5511C34.6723 29.9816 35.0021 29.2213 35.0002 28.413C35.0021 27.6016 34.6723 26.8417 34.0718 26.2727Z"
          fill="#4E4E4E"
        />
      </svg>
    ),
  };

  return (
    <div>
      <Box sx={{ margin: "80px 0 0 0" }}>
        <Box sx={{ fontSize: "18px", fontWeight: 700, lineHeight: "22px", color: "#ffffff", marginBottom: "20px" }}>
          Trending movies
        </Box>
        <Slide {...properties} className="slide">
          {dataSlider.map((item) => (
            <SlideItem
              key={item.id}
              src={item.src}
              text={item.text}
              sx={style}
              className="slideItem"
            />
          ))}
        </Slide>
      </Box>
    </div>
  );
}

const dataSlider = [
  {
    id: 1,
    src: slide1,
    text: "Doctor Strange 2",
  },
  {
    id: 2,
    src: slide2,
    text: "Doctor Strange 2",
  },
  {
    id: 3,
    src: slide3,
    text: "Doctor Strange 2",
  },
];
