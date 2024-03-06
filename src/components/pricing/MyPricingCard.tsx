import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { IconType } from "react-icons/lib";

const styles = makeStyles({
  root: {
    padding: "30px 15px",
    boxShadow:
      "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
  },
  pricingCardHeader: {
    textAlign: "center",
  },
  image: {
    width: "70px",
    marginBottom: 25,
  },
  pricingCardBody: {
    textAlign: "center",
  },
  heading: {
    fontSize: "calc(18px + (35 - 18) * ((100vw - 300px) / (1300 - 300)))",
    marginBottom: 15,
    textAlign: "center",
  },
  para: {
    fontWeight: 500,
    opacity: 0.6,
    marginBottom: 12,
    textAlign: "center",
  },
  pricingCardFooter: {
    margin: "15px 0px",
    textAlign: "center",
  },
  spanFirst: {
    fontSize: "calc(15px + (25 - 15) * ((100vw - 300px) / (1300 - 300)))",
    fontWeight: 600,
    opacity: 0.8,
  },
  spanSecond: {
    fontSize: "calc(18px + (35 - 18) * ((100vw - 300px) / (1300 - 300)))",
    fontWeight: 600,
    opacity: 0.8,
  },
  link: {
    padding: "8px 15px",
    marginTop: 20,
    // borderRadius: "50px",
    cursor: "pointer",
    color: "#fff",
    backgroundColor: "#695aa6",
    fontSize: "1em",
    fontWeight: 400,
    lineHeight: 1.5,
    textDecoration: "none",
    border: "1px solid transparent",
    "&:hover": {
      backgroundColor: "#594c8d",
      border: "1px solid #544885",
    },
  },
  grid: {
    paddingLeft: 0,
    "&:hover": {
      transform: "translateY(-8px)",
    },
  },
});

interface IMyPricingCard {
  image: string;
  title: string;
  para1: string;
  para2: string;
  para3: string;
  para4: string;
  para5?: string;
  para6?: string;
  para7?: string;
  para8?: string;
  // icon:IconType,
  monthRecharge: string;
}

const MyPricingCard = (props: IMyPricingCard) => {
  const {
    image,
    title,
    para1,
    para2,
    para3,
    para4,
    para5,
    para6,
    para7,
    para8,
    monthRecharge,
  } = props;
  const classes = styles();
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={4}
      lg={4}
      xl={4}
      style={{ paddingLeft: 0 }}
      className={classes.grid}
    >
      <div className={classes.root}>
        <div className={classes.pricingCardHeader}>
          <img className={classes.image} src={image} alt="" />
        </div>
        <div className={classes.pricingCardBody}>
          <h6 className={classes.heading}>{title}</h6>
          <div className="pricing-card-list">
            <p className={classes.para}>{para1}</p>
            <p className={classes.para}>{para2}</p>
            <p className={classes.para}>{para3}</p>
            <p className={classes.para}>{para4}</p>
            <p className={classes.para}>{para5}</p>
            <p className={classes.para}>{para6}</p>
            <p className={classes.para}>
              <del>{para7}</del>
            </p>
            <p className={classes.para}>
              <del>{para8}</del>
            </p>
          </div>
        </div>
        <div className={classes.pricingCardFooter}>
          <span className={classes.spanFirst}>$</span>
          <span className={classes.spanSecond}>{monthRecharge}/Month</span>
        </div>
        <div style={{ textAlign: "center" }}>
          <a href="#" className={classes.link}>
            Subscribe
          </a>
        </div>
      </div>
    </Grid>
  );
};

export default MyPricingCard;
