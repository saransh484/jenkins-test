import { Grid } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { makeStyles } from "@mui/styles";
import React from "react";
import PortfolioCard from "./PortfolioCard";
import folioImgFirst from "../../assets/image/portfolioImg/folio-1.jpg";
import folioImgSecond from "../../assets/image/portfolioImg/folio-2.jpg";
import folioImgThird from "../../assets/image/portfolioImg/folio-3.jpg";

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

const Portfolio = () => {
  const classes = styles();
  return (
    <div className={classes.root} id="portfolio">
      <div className={classes.container}>
        <p className={classes.para}>What I Did ?</p>
        <h2 className={classes.heading}> Portfolio</h2>
      </div>

      <Grid container spacing={2}>
        <PortfolioCard imageFirst={folioImgFirst} />
        <PortfolioCard imageFirst={folioImgSecond} />
        <PortfolioCard imageFirst={folioImgThird} />
      </Grid>
    </div>
  );
};

export default Portfolio;
