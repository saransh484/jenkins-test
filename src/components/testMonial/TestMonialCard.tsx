import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import React from "react";

const styles = makeStyles({
  root: {
    position: "relative",
    width: " 100%",
    paddingRight: 15,
    paddingLeft: 15,
  },
  imageContainer: {
    minWidth: "45px",
    maxWidth: "45px",
    zIndex: 999,
  },
  image: {
    background: "#fff",
    padding: 4,
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  headingContainer: {
    textAlign: "left",
    border: "1px solid #dee2e6",
    background: "#fff",
    padding: " 20px 20px 20px 60px",
    borderRadius: 0,
  },
  heading: {
    marginTop: 20,
    fontSize: "calc(14px + (18 - 14) * ((100vw - 300px) / (1300 - 300)))",
  },
});

interface ITestMonialCard {
  image: string;
  para: string;
  heading: string;
}

const TestMonialCard = (props: ITestMonialCard) => {
  const { image, para, heading } = props;
  const classes = styles();
  return (
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
      <div className={classes.root}>
        <div
          style={{ marginBottom: 30, display: "flex", alignItems: "center" }}
        >
          <div className={classes.imageContainer}>
            <img src={image} alt="" className={classes.image} />
          </div>
          <div className={classes.headingContainer}>
            <p>{para}</p>
            <h6 className={classes.heading}>{heading}</h6>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default TestMonialCard;
