import { Box } from "@mui/material";
import React from "react";
import ListItem from "../ListItem";
import item from "./item.png";
import mobius from "./mobius.jpg";
import "./style.css"

const Recommend = () => {
  return (
    <div>
      <Box sx={{ margin: "40px 0 0 0" }}>
        <Box sx={{display: "flex", justifyContent:"space-between"}}>
          <Box
            sx={{
              fontSize: "18px",
              fontWeight: 700,
              lineHeight: "22px",
              color: "#ffffff",
              marginBottom: "20px",
            }}
          >
            Recommend for you
          </Box>
          <Box className="seeAll">
            See all{" "}
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.38506 18.7241L15.3851 12.7241L9.38506 6.72414"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Box>
        </Box>
        <ListItem listItem={listItem} api="http://127.0.0.1:8000/combo/" />
      </Box>
    </div>
  );
};

const listItem = [
  { img: item, name: "Doctor Strange 2", year: "2022", rating: "7.5", key: 1 },
  { img: item, name: "Doctor Strange 2", year: "2022", rating: "7.5", key: 2 },
  {
    img: mobius,
    name: "Doctor Strange 2",
    year: "2022",
    rating: "7.5",
    key: 3,
  },
  { img: item, name: "Doctor Strange 2", year: "2022", rating: "7.5", key: 4 },
  {
    img: mobius,
    name: "Doctor Strange 2",
    year: "2022",
    rating: "7.5",
    key: 5,
  },
  {
    img: mobius,
    name: "Doctor Strange 2",
    year: "2022",
    rating: "7.5",
    key: 6,
  },
  { img: item, name: "Doctor Strange 2", year: "2022", rating: "7.5", key: 7 },
  { img: item, name: "Doctor Strange 2", year: "2022", rating: "7.5", key: 8 },
  { img: item, name: "Doctor Strange 2", year: "2022", rating: "7.5", key: 9 },
];

export default Recommend;
