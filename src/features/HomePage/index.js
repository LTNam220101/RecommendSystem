import { Grid, useMediaQuery } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
// import NavBarBottom from 'components/NavBarBottom';
import NavBarLeft from "../../components/NavBarLeft";
import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import Profiles from "./pages/Profiles";
import Main from "./pages/Main";
import Search from "./pages/Search";
import SearchBtn from "./components/SearchBtn";
import Footer from "./pages/Footer";
import Film from "./pages/Film";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#0D0D0F",
    width: "100%",
    transition: "all 0.5s",
  },
  main: {
    padding: "0 40px 40px",
  },
});

export default function HomePage() {
  const open = useSelector((state) => state.profile.openProfile);
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.up("tablet"));
  const classes = useStyles({ tablet });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <>
      <Grid className={classes.root} container>
        <Grid item xs={1} display={tablet ? "block" : "none"}>
          <NavBarLeft />
        </Grid>
        <Grid className={classes.main} item xs={open ? 7 : 10}>
          <SearchBtn />
          <Routes>
            <Route path="" element={<Navigate to="home" />} />
            <Route path="home" element={<Main />}/>
            <Route path=":search" element={<Search />} />
            <Route path="film/:id" element={<Film />} />
          </Routes>
          <Footer />
        </Grid>
        <Grid item xs={open ? 4 : 1} display={tablet ? "block" : "none"}>
          <Profiles />
        </Grid>
      </Grid>
    </>
  );
}
