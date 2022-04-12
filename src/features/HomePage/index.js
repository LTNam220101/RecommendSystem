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

const useStyles = makeStyles({
  root: {
    backgroundColor: "#0D0D0F",
    width: "100%",
  },
  main: {
    padding: "0 40px 40px",
  },
});

export default function HomePage() {
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
        <Grid className={classes.main} item xs={7}>
          <SearchBtn />
          <Routes>
            <Route path="" element={<Navigate to="home" />} />
            <Route path="home" element={<Main />} />
            <Route path=":search" element={<Search />} />
          </Routes>
          <Footer />
        </Grid>
        <Grid item xs={4} display={tablet ? "block" : "none"}>
          <Profiles />
        </Grid>
      </Grid>
    </>
  );
}
