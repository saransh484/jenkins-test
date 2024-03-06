import { makeStyles } from "@mui/styles";
import React from "react";
import { Colors } from "../../assets/colors/Colors";
import BlogCard from "./BlogCard";
import ImageFirstImg from "../../assets/image/blogImg/img-1.jpg";
import ImageSecondImg from "../../assets/image/blogImg/img-2.jpg";

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

const Blog = () => {
  const classes = styles();
  return (
    <div className={classes.root} id="blog">
      <div className={classes.container}>
        <p className={classes.para}>Recent Posts?</p>
        <h2 className={classes.heading}>Blog</h2>
      </div>
      <BlogCard
        image={ImageFirstImg}
        heart={234}
        message={123}
        heading="Consectetur adipisicing elit"
        para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit excepturi laborum enim, vitae ipsam atque eum, ad iusto consequuntur voluptas, esse doloribus. Perferendis porro quisquam vitae exercitationem aliquid, minus eos laborum repudiandae, cumque debitis iusto omnis praesentium? Laborum placeat sit adipisci illum tempore maxime, esse qui quae? Molestias excepturi corporis similique doloribus. Esse vitae earum architecto nulla non dolores illum at perspiciatis quod, et deleniti cupiditate reiciendis harum facere, delectus eum commodi soluta distinctio sit repudiandae possimus sunt. Ipsum, rem."
      />
      <BlogCard
        image={ImageSecondImg}
        heart={456}
        message={264}
        heading="Consectetur adipisicing elit"
        para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit excepturi laborum enim, vitae ipsam atque eum, ad iusto consequuntur voluptas, esse doloribus. Perferendis porro quisquam vitae exercitationem aliquid, minus eos laborum repudiandae, cumque debitis iusto omnis praesentium? Laborum placeat sit adipisci illum tempore maxime, esse qui quae? Molestias excepturi corporis similique doloribus. Esse vitae earum architecto nulla non dolores illum at perspiciatis quod, et deleniti cupiditate reiciendis harum facere, delectus eum commodi soluta distinctio sit repudiandae possimus sunt. Ipsum, rem."
      />
    </div>
  );
};

export default Blog;
