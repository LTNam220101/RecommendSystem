import { Box, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleProfile } from "../../Slice";
import "./Slider.css";

const SlideItem = ({ src, text, rating, views, id }) => {
  const open = useSelector((state) => state.profile.openProfile);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleFilm = (id) => {
    dispatch(toggleProfile())
    // dispatch(actions.getItemMovieRequest(id))
    navigate(`/film/${id}`, { replace: true });
  }
  return (
    <Box sx={{ position: "relative", margin: "0 10px" }} className="slideItemB" onClick={()=>handleFilm(id)}>
      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          textAlign: "center",
          zIndex: 8,
          display: "none",
        }}
        className="slideItemPlay"
      >
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 58.6666C46.7276 58.6666 58.6667 46.7276 58.6667 32C58.6667 17.2724 46.7276 5.33331 32 5.33331C17.2724 5.33331 5.33334 17.2724 5.33334 32C5.33334 46.7276 17.2724 58.6666 32 58.6666Z"
            stroke="#EB1C24"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M26.6667 21.3333L42.6667 32L26.6667 42.6666V21.3333Z"
            stroke="#EB1C24"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Box>
      <Box>
        <img src={src} className="slideItem" />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "80%",
          marginLeft: "20px",
          color: "#ffffff",
          zIndex: 10,
          //   left: "25px",
          //   overflow: "hidden",
          //   textOverflow: "ellipsis",
          //   display: "-webkit-box",
          //   lineHeight: "16px" /* fallback */,
          //   minHeight: "32px" /* fallback */,
          //   WebkitLineClamp: 2 /* number of lines to show */,
          //   WebkitBoxOrient: "vertical",
        }}
      >
        <Box
          sx={{
            fontSize: open ? "16px" : "20px",
            fontWeight: "700",
            // position: "relative",
            // top: "-80px",
            // fontSize: "20px",
            // marginLeft: "20px",
            //   left: "25px",
            //   overflow: "hidden",
            //   textOverflow: "ellipsis",
            //   display: "-webkit-box",
            //   lineHeight: "16px" /* fallback */,
            //   minHeight: "32px" /* fallback */,
            //   WebkitLineClamp: 2 /* number of lines to show */,
            //   WebkitBoxOrient: "vertical",
          }}
        >
          {text}
        </Box>
        <Box sx={{ fontSize: open ? "12px" : "16px" }}>{views} Views</Box>
        <Box
          sx={{
            display: "flex",
            fontSize: open ? "10px" : "14px",
            fontWeight: 500,
            alignItems: "center",
          }}
        >
          <Box>
            <svg
              width="31"
              height="16"
              viewBox="0 0 31 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_17_174)">
                <path
                  d="M30.9096 1.37516C30.8261 0.670752 30.319 0.109321 29.6733 1.52588e-05C26.843 1.52588e-05 4.20133 1.52588e-05 1.37106 1.52588e-05C0.663755 0.119809 0.122437 0.781713 0.122437 1.57942C0.122437 2.86183 0.122437 13.1189 0.122437 14.4007C0.122437 15.284 0.784762 16 1.60236 16C4.38606 16 26.6583 16 29.442 16C30.1948 16 30.8164 15.3922 30.9096 14.6055C30.9096 11.9596 30.9096 2.69787 30.9096 1.37516Z"
                  fill="#F6C700"
                />
                <path
                  d="M3.83563 3.21513H6.27879V12.9118H3.83563V3.21513Z"
                  fill="black"
                />
                <path
                  d="M10.8953 7.68174C10.6854 6.20392 10.5686 5.38247 10.5456 5.21851C10.4434 4.42743 10.3459 3.73903 10.2527 3.15165C10.0412 3.15165 8.98592 3.15165 7.08514 3.15165V12.8484H9.22525L9.23275 6.44571L10.1333 12.8484H11.6577L12.5117 6.30328L12.5197 12.8484H14.6529V3.15165H11.4612L10.8953 7.68174Z"
                  fill="black"
                />
                <path
                  d="M18.6863 5.16883C18.7131 5.29249 18.727 5.57293 18.727 6.01125C18.727 6.3872 18.727 9.39475 18.727 9.77069C18.727 10.416 18.6863 10.8113 18.6054 10.957C18.5241 11.1028 18.3077 11.1751 17.957 11.1751C17.957 10.5386 17.957 5.44651 17.957 4.81C18.2232 4.81 18.4047 4.83926 18.501 4.89667C18.5974 4.95463 18.6595 5.04517 18.6863 5.16883ZM19.7898 12.7495C20.0806 12.6838 20.3247 12.5679 20.5228 12.4028C20.7204 12.2372 20.8591 12.0081 20.9383 11.715C21.0181 11.4224 21.0652 10.8411 21.0652 9.97163C21.0652 9.63157 21.0652 6.90722 21.0652 6.56661C21.0652 5.64911 21.0304 5.03413 20.9763 4.72167C20.9217 4.40866 20.7862 4.12436 20.5694 3.86931C20.352 3.61426 20.035 3.43099 19.6185 3.31947C19.2014 3.20796 18.5214 3.15165 17.3386 3.15165C17.2171 3.15165 16.6099 3.15165 15.516 3.15165V12.8484H18.4759C19.158 12.8263 19.596 12.7937 19.7898 12.7495Z"
                  fill="black"
                />
                <path
                  d="M25.0071 11.3004C24.9621 11.4235 24.765 11.4859 24.6162 11.4859C24.4705 11.4859 24.3736 11.4263 24.3244 11.3065C24.2751 11.1872 24.251 10.9151 24.251 10.4889C24.251 10.2328 24.251 8.18245 24.251 7.9263C24.251 7.48466 24.2724 7.20919 24.3158 7.09933C24.3586 6.99058 24.4529 6.93538 24.5985 6.93538C24.7474 6.93538 24.9471 6.99776 24.9985 7.12307C25.0493 7.24839 25.075 7.51613 25.075 7.9263C25.075 8.09191 25.075 8.91998 25.075 10.4111C25.0595 10.9217 25.037 11.2182 25.0071 11.3004ZM21.8973 12.7639H24.0968C24.1884 12.3935 24.2387 12.1876 24.2489 12.1461C24.4481 12.3946 24.6671 12.5812 24.9075 12.7048C25.1468 12.829 25.505 12.8909 25.7824 12.8909C26.1684 12.8909 26.5014 12.7865 26.7825 12.5773C27.0631 12.3686 27.2419 12.1213 27.318 11.837C27.394 11.5521 27.432 11.1193 27.432 10.5375C27.432 10.2653 27.432 8.08915 27.432 7.817C27.432 7.23183 27.4192 6.84981 27.394 6.67039C27.3688 6.49098 27.2939 6.30825 27.1691 6.12111C27.0444 5.93396 26.8628 5.78878 26.6251 5.68499C26.3874 5.58121 26.1068 5.52931 25.7834 5.52931C25.5023 5.52931 25.1425 5.58728 24.9026 5.70155C24.6633 5.81583 24.4459 5.98917 24.251 6.22158C24.251 6.01125 24.251 4.96015 24.251 3.06718H21.8973V12.7639Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_17_174">
                  <rect
                    width="30.7872"
                    height="16"
                    fill="white"
                    transform="translate(0.122437)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Box>
          {rating} rating
        </Box>
      </Box>
    </Box>
  );
};

export default SlideItem;
