import { makeStyles } from "@mui/styles";
import React from "react";
import { Colors } from "../../assets/colors/Colors";

const styles = makeStyles({
  root: {
    width: "85%",
    margin: "auto",
    borderTop: "1px solid #dee2e6",
  },
  para: {
    textAlign: "center",
    fontSize: "16px",
    padding: "30px 0px",
  },
  link: {
    color: Colors.primaryColor,
    "&:hover": {
      color: "green",
    },
  },
});

const Footer = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <p className={classes.para}>
        Designed & Developed by{" "}
        <a href="/" className={classes.link}>
          Meera Solution
        </a>
      </p>
    </div>
  );
};

export default Footer;
