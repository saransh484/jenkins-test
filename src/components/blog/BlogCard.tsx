import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { TfiAngleDoubleRight } from "react-icons/tfi";

const styles = makeStyles({
  root: {
    textAlign: "left",
    border: "1px solid #dee2e6",
    marginBottom: 30,
    borderRadius: 0,
    overflow: "hidden",
  },
  blogCardBody: {
    padding: "30px 20px 30px 30px",
  },
  heading: {
    fontSize: "1.25rem",
    fontWeight: 100,
  },
  link: {
    marginRight: 10,
    color: "#444",
    textDecoration: "none",
    display: " inline-block",
    fontWeight: 600,
    opacity: 0.7,
    fontSize: 13,
  },
  blogCardLink: {
    textDecoration: "none",
    marginTop: 20,
    display: "block",
    fontSize: 13,
  },
  bgContainer: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    "@media(max-width:899px)": {
      height: "350px",
    },
  },
});

interface IBlogCard {
  image: string;
  heading: string;
  heart: number;
  message: number;
  para: string;
}

const BlogCard = (props: IBlogCard) => {
  const { image, heading, heart, message, para } = props;
  const classes = styles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
          <div
            className={classes.bgContainer}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          lg={7}
          xl={7}
          style={{ paddingLeft: 0 }}
        >
          <div className={classes.blogCardBody}>
            <h5 className={classes.heading}>{heading}</h5>

            <p style={{ margin: "15px 0px" }}>
              <a href="#" className={classes.link}>
                By: Admin
              </a>
              <a href="#" className={classes.link}>
                <span style={{ color: "#ec185d", width: "15px", fontSize: 13 }}>
                  <AiOutlineHeart />
                </span>{" "}
                {heart}
              </a>
              <a href="/" className={classes.link}>
                <span style={{ width: "15px", fontSize: 13 }}>
                  <BiComment />{" "}
                </span>{" "}
                {message}
              </a>
            </p>
            <p>{para}</p>

            <a href="#" className={classes.blogCardLink}>
              Read more{" "}
              <span>
                <TfiAngleDoubleRight />
              </span>
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default BlogCard;
