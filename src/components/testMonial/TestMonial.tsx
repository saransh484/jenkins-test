import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import TestMonialCard from "./TestMonialCard";
import AvatarFirstImg from "../../assets/image/testMonialImg/avatar1.jpg";
import AvatarSecondImg from "../../assets/image/testMonialImg/avatar2.jpg";
import { Colors } from "../../assets/colors/Colors";

const styles = makeStyles({
  root: {
    width: "85%",
    margin: "auto",
    paddingTop: 112,
  },
  para: {
    margin: "0px 0px 6px",
    fontSize: "calc(13px + (15 - 13) * ((100vw - 300px) / (1300 - 300)))",
    fontWeight: 500,
    opacity: 0.6,
    color: "#111",
    letterSpacing: "0.6px",
    lineHeight: 1.5,
    textAlign: "center",
  },
  heading: {
    fontSize: "calc(20px + (35 - 20) * ((100vw - 300px) / (1300 - 300)))",
    margin: "0px 0px 16px",
    fontWeight: 500,
    color: Colors.primaryColor,
    lineHeight: 1.2,
    textAlign: "center",
  },
  container: {
    paddingBottom: 48,
  },
});

const TestMonial = () => {
  const classes = styles();
  return (
    <div className={classes.root} id="textmonial">
      <div className={classes.container}>
        <p className={classes.para}>HWhat Think Client About Me ?</p>
        <h2 className={classes.heading}>Testmonial</h2>
      </div>
      <Grid container spacing={2}>
        <TestMonialCard
          image={AvatarFirstImg}
          para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis adipisci nihil."
          heading="Emily Reb"
        />
        <TestMonialCard
          image={AvatarSecondImg}
          para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis adipisci nihil."
          heading="Emily Reb"
        />
      </Grid>
    </div>
  );
};

export default TestMonial;
