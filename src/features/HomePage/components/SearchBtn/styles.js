import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {},
  st: {
    position: "fixed",
    margin: "20px auto 0px",
    display: "flex",
    zIndex: 10,
    alignItems: "center",
  },
  logoName: {
    color: "#DB202C",
    fontFamily: "'Bebas Neue', cursive",
    fontSize: "36px",
    marginLeft: "10px",
  },
  searchBox: {
    left: "100%",
    position: "relative",
    right: "0",
    // boxShadow:
    //   "4px 4px 4px rgba(156, 156, 156, 0.1), -2px -2px 4px rgba(208, 208, 208, 0.15)",
    transition: "transform 0.5s",
    "& svg": {
      marginLeft: "-25px",
      verticalAlign: "middle",
    },
  },

  searchBtn: {
    height: "27px",
    width: "163px",
    border: "none",
    outline: "none",
    borderRadius: "45px",
    padding: "0 19px",
    boxSizing: "border-box",
    backgroundColor: "#333333"
  },
});

export { useStyles };
