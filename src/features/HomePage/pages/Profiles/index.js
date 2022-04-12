import { Box, useMediaQuery } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    // position: 'block',
    position: "fixed",
    zIndex: 2,
    width: "100%",
    margin: "0 auto",
    backgroundColor: "#333333",
    borderRadius: "20px 0 0 0",
    height: "100%",
    padding: "20px 0 0 30px"
  },
  profiles: {
    display: "flex",
    color: "#ffffff"
  },
  avatar: {
    marginRight: "20px"
  },
  user: {
    fontSize: "22px",
    fontWeight: 700,
  },
  mail: {
    fontSize: "14px",
    fontWeight: 300,
  }
});

export default function Profiles() {
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.up("tablet"));
  const classes = useStyles({ tablet });
  // const cart = useSelector((state) => state.cart.listProduct);
  // const choose = useSelector((state) => state.cart.chooseProduct);

  return (
    <Box className={classes.root}>
      <Box className={classes.profiles}>
        <Box  className={classes.avatar}>
          <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="23" cy="23" r="23" fill="#FF0019" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.678 16.678C19.678 14.6467 21.3246 13 23.3559 13C25.3872 13 27.0339 14.6467 27.0339 16.678C27.0339 18.7092 25.3872 20.3559 23.3559 20.3559C21.3246 20.3559 19.678 18.7092 19.678 16.678ZM23.3559 11C20.2201 11 17.678 13.5421 17.678 16.678C17.678 19.8138 20.2201 22.3559 23.3559 22.3559C26.4918 22.3559 29.0339 19.8138 29.0339 16.678C29.0339 13.5421 26.4918 11 23.3559 11ZM18.678 25.0339C17.1721 25.0339 15.7279 25.6321 14.663 26.6969C13.5982 27.7618 13 29.206 13 30.7119V33.0508C13 33.6031 13.4477 34.0508 14 34.0508C14.5523 34.0508 15 33.6031 15 33.0508V30.7119C15 29.7364 15.3875 28.8009 16.0773 28.1111C16.767 27.4214 17.7025 27.0339 18.678 27.0339H28.0339C29.0094 27.0339 29.9449 27.4214 30.6346 28.1111C31.3244 28.8009 31.7119 29.7364 31.7119 30.7119V33.0508C31.7119 33.6031 32.1596 34.0508 32.7119 34.0508C33.2641 34.0508 33.7119 33.6031 33.7119 33.0508V30.7119C33.7119 29.206 33.1137 27.7618 32.0488 26.6969C30.984 25.6321 29.5398 25.0339 28.0339 25.0339H18.678Z"
              fill="url(#paint0_linear_6_1941)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_6_1941"
                x1="-9.43786"
                y1="-11.4746"
                x2="33.7824"
                y2="31.6751"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.050161" stop-color="#FF8000" />
                <stop
                  offset="0.368422"
                  stop-color="#FF8000"
                  stop-opacity="0.9"
                />
                <stop offset="0.582008" stop-color="#D0D0D0" />
                <stop offset="1" stop-color="#D0D0D0" stop-opacity="0.9" />
              </linearGradient>
            </defs>
          </svg>
        </Box>
        <Box>
          <Box className={classes.user}>Nam Luong</Box>
          <Box className={classes.mail}>namluong220101@gmail.com</Box>
        </Box>
      </Box>
    </Box>
  );
}
