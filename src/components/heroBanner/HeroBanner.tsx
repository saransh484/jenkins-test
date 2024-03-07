import { makeStyles } from "@mui/styles";
import React from "react";
import headerImg from "../../assets/image/header.jpg";

const styles = makeStyles({
  root: {
    backgroundImage: `url(${headerImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
    height: "100vh",
  },
  mainContainer: {
    backgroundImage:
      "linear-gradient(to top, #fff 0%, rgba(105, 90, 166, 0.35) 99%, rgba(105, 90, 166, 0.5) 100%)",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "60%",
    margin: "auto",
  },
  heading: {
    margin: "0px",
    opacity: 0.8,
    fontWeight: 700,
  },
  up: {
    fontSize: "calc(30px + (60 - 30) * ((100vw - 300px) / (1300 - 300)))",
    fontWeight: 500,
    color: "#444",
    marginBottom: "5px",
    display: "block",
  },
  down: {
    color: "#212529",
    fontSize: "calc(30px + (75 - 30) * ((100vw - 300px) / (1300 - 300)))",
    display: "block",
  },
  para: {
    fontSize: "calc(10px + (22 - 10) * ((100vw - 300px) / (1300 - 300)))",
    letterSpacing: " calc(1px + (7 - 1) * ((100vw - 300px) / (1300 - 300)))",
    opacity: 0.8,
    paddingBottom: 20,
    margin: "0px",
  },
  button: {
    padding: "8px 15px",
    marginTop: 20,
    borderRadius: "50px",
    cursor: "pointer",
    color: "#fff",
    backgroundColor: "#695aa6",
    display: "block",
    fontSize: "1em",
    fontWeight: 400,
    lineHeight: 1.5,
    border: "1px solid transparent",
    "&:hover": {
      backgroundColor: "#594c8d",
      border: "1px solid #544885",
    },
  },
});

const HeroBanner = () => {
  const classes = styles();
  return (
    <div className={classes.root} id="home">
      <div className={classes.mainContainer}>
        <div className={classes.container}>
          <h1 className={classes.heading}>
            <span className={classes.up}>HI!</span>
            <span className={classes.down}>I am John Doe</span>
          </h1>
          <p className={classes.para}>FRONTEND WEB DESIGNER </p>
          <button className={classes.button}>Visit My Work</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
