import { makeStyles } from "@mui/styles";
import React from "react";
import { Grid } from "@mui/material";
import { Colors } from "../../assets/colors/Colors";

const styles = makeStyles({
  root: {
    marginTop: 112,
    backgroundColor: Colors.primaryColor,
  },
  container: {
    width: "85%",
    margin: "auto",
    padding: 20,
  },
  heading: {
    color: Colors.secondaryColor,
    fontSize: "calc(15px + (20 - 15) * ((100vw - 300px) / (1300 - 300)))",
    textAlign: "center",
    fontWeight: 600,
  },
  para: {
    color: Colors.secondaryColor,
    opacity: 0.8,
    textAlign: "center",
  },
  link: {
    padding: "8px 16px",
    color: "#212529",
    background: "#fff",
    fontSize: "1.25rem",
    fontWeight: 700,
    textDecoration: "none",
    fontFamily: "'Baloo Paaji', cursive",
    "&:hover": {
      background: "#e2e6ea",
    },
  },
});

const WorkMe = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Grid container spacing={2} alignItems={"center"}>
          <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
            <h6 className={classes.heading}>Want to work with me?</h6>
            <p className={classes.para}>
              Always feel Free to Contact & Hire me
            </p>
          </Grid>
          <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
            <div style={{ textAlign: "center" }}>
              <a href="/" className={classes.link}>
                Hire Me
              </a>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default WorkMe;
