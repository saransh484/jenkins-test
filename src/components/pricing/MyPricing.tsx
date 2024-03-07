import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import MyPricingCard from "./MyPricingCard";
import ScooterImg from "../../assets/image/pricingImg/scooter.svg";
import ShippedImg from "../../assets/image/pricingImg/shipped.svg";
import StartupImg from "../../assets/image/pricingImg/startup.svg";

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
    color: "#695aa6",
    lineHeight: 1.2,
    textAlign: "center",
  },
  container: {
    paddingBottom: 48,
  },
});

const MyPricing = () => {
  const classes = styles();
  return (
    <div className={classes.root} id="pricing">
      <div className={classes.container}>
        <p className={classes.para}>How Much I Charge ?</p>
        <h2 className={classes.heading}>My Pricing</h2>
      </div>
      <Grid container spacing={2}>
        <MyPricingCard
          image={ScooterImg}
          title="Free"
          para1="accusamus reprehenderit"
          para2="provident dolorem "
          para3="quos neque"
          para4="fugiat quibusdam"
          para7="accusamus laboriosam"
          para8="inventore omnis"
          monthRecharge="0.00"
        />
        <MyPricingCard
          image={ShippedImg}
          title="Basic"
          para1="accusamus reprehenderit"
          para2="provident dolorem "
          para3="quos neque"
          para4="fugiat quibusdam"
          para5="accusamus laboriosam"
          para8="inventore omnis"
          monthRecharge="9.99"
        />
        <MyPricingCard
          image={StartupImg}
          title="remium"
          para1="accusamus reprehenderit"
          para2="provident dolorem "
          para3="quos neque"
          para4="fugiat quibusdam"
          para5="accusamus laboriosam"
          para6="inventore omnis"
          monthRecharge=" 99.9"
        />
      </Grid>
    </div>
  );
};

export default MyPricing;
