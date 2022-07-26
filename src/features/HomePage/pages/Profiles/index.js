import { Box, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleProfile } from "../../Slice";
import { actions } from "./userSlice";

const useStyles = makeStyles({
  root: {
    // position: 'block',
    width: "100%",
    backgroundColor: "#333333",
    borderRadius: "20px 0 0 0",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.5s",
    color: "#ffffff",
  },
  button: {

    margin: "20px 0px 0px 20px",
    "& svg": {
      cursor: "pointer",
      transform: (props) => (!props.open ? "rotate(180deg)" : ""),
      transition: "all 0.5s",
    },
    "& svg:hover path": {
      stroke: "#fff",
    },
  },
  profiles: {
    display: "flex",
    gap: "20px",
  },
  avatar: {
    marginLeft: "40px",
  },
  user: {
    fontSize: "22px",
    fontWeight: 700,
  },
  mail: {
    fontSize: "14px",
    fontWeight: 300,
  },
  list: {
    /* width */
    '&::-webkit-scrollbar': {
      width: '5px',
      borderRadius: '10px',
    },

    /* Track */
    '&::-webkit-scrollbar-track': {
      background: '#000',
    },

    /* Handle */
    '&::-webkit-scrollbar-thumb': {
      background: '#DB202C',
      borderRadius: '10px',
    },
  },
});

export default function Profiles() {
  const { dataLogin, loadingLogin } = useSelector((state) => state.login);
  const { dataListFavorites, loadingListFavorites } = useSelector((state) => state.user);
  console.log(dataLogin)
  console.log(dataListFavorites)
  const dispatch = useDispatch();
  const open = useSelector((state) => state.profile.openProfile);
  const classes = useStyles({ dataLogin });
  const navigate = useNavigate();

  useEffect(() =>{
    if(dataLogin) {
      dispatch(actions.getListFavoritesRequest({history: dataLogin.history}))
    }
  }, [dataLogin])

  const handleClick = () => {
    dispatch(toggleProfile());
    if(dataLogin) {
      dispatch(actions.getListFavoritesRequest({history: dataLogin.history}))
    }
  };

  const handleFilm = (id) => {
    navigate(`/film/${id}`, { replace: true });
  }
  return (
    <Box className={classes.root}>
      <Box className={classes.button} onClick={handleClick}>
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
        {dataLogin ? (
        <>
          <Box className={classes.profiles}>
            <Box className={classes.avatar}>
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
              <Box className={classes.user}>{dataLogin.name}</Box>
              <Box className={classes.mail}>{dataLogin.email}</Box>
            </Box>
          </Box>
          <Box sx={{ marginTop: "20px", display: "flex", flexDirection: "column", height: 'calc(100% - 150px)' }}>
            <Box sx={{ margin: "0px 0px 10px 40px" }}>
              Danh sách yêu thích
            </Box>
            <Box sx={{ display: "flex", flex: 1, flexWrap: 'wrap', margin: "0px 40px", gap: '10px', overflowY: "auto" }} className={classes.list}>
            {dataListFavorites && dataListFavorites.map((item) => (
              <Box sx={{ width: "100px", display: "inline-block", cursor: "pointer"}} onClick={() => handleFilm(item._id)}>
                <Box>
                  <img src={`https://image.tmdb.org/t/p/original${item.image}`} style={{width: "100%", borderRadius: "5px"}} />
                </Box>
                <Box>
                  {item.name}
                </Box>
              </Box>
            ))}
            </Box>
          </Box>
        </>
        ) : 
        <Box sx={{ flex: 1, marginTop: '30px', color: '#fff', fontSize: '24px', marginLeft: "40px",}}>
          <Box>
            Bạn chưa đăng nhập
          </Box>
          <Link href="http://localhost:3000/login" sx={{color: '#DB202C', fontSize: '16px'}} underline="hover">Đăng nhập</Link>
          <Box>Hoặc</Box>
          <Link href="http://localhost:3000/register" sx={{color: '#DB202C', fontSize: '16px'}} underline="hover">Đăng ký</Link>
        </Box>}
    </Box>
  );
}
