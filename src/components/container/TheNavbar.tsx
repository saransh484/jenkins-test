import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { Colors } from "../../assets/colors/Colors";
// import { Link } from "react-router-dom";
import logo from "../../assets/image/v-logo-black.png";

const Styles = makeStyles({
  root: {
    width: "100%",
    top: "0px",
    position: "fixed",
    zIndex: 1111,
    // backgroundColor: "#fff",
  },
  fullcontainer: {
    top: "0px !important",
  },
  navbar: {
    width: "95%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5em 1.2em",
    flexWrap: "wrap",

    "@media(max-width:950px)": {
      padding: "0.4em 1.2em",
      display: " block",
      position: "relative",
    },
  },
  downnevbar: {
    width: "100% !important",
    backgroundColor: "#ffffffe8",
    // boxShadow:" #ffffff61 0px 6px 24px 0px, #ffffff61 0px 0px 0px 1px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
  },
  logo: {
    textDecoration: " none",
    color: "#fff",
    display: "flex",
    alignItems: " center",
  },
  logoImg: {
    width: "100%",
    marginRight: "10px",
  },
  nav: {
    "@media(max-width:950px)": {
      display: "none",
    },
  },
  menu: {
    listStyle: "none",
    padding: "0px",
    margin: " 0px",
    display: "flex",
    justifyContent: "space-between",
    "@media(max-width:950px)": {
      display: "block",
    },
  },
  item: {
    textDecoration: " none",
    fontWeight: 500,
    color: Colors.secondaryColor,
    display: "inline-block",
    marginLeft: " 3em",
    fontSize: " 16px",
    scrollBehavior: "smooth",
    "&:hover": {
      color: Colors.secondaryColor,
    },
    "@media(max-width:950px)": {
      padding: "10px 0px",
      marginLeft: " 0px",
      // color: "#fff",
    },
  },
  downitem: {
    color: Colors.black,
  },
  menuBar: {
    display: "none",
    position: "absolute",
    right: "1em",
    top: "12px",
    "@media(max-width:950px)": {
      display: " block",
    },
  },
  menuScroll: {
    right: " 1em !important",
  },
  menuBtn: {
    cursor: " pointer",
    backgroundColor: "transparent",
    border: " none",
  },
  menuIcon: {
    fontSize: "40px !important",
    color: "#000",
  },
  logoSection: {
    width: "44px",
    "@media(max-width:890px)": {
      width: "60px",
    },
  },
});

const TheNavbar = () => {
  const classes = Styles();
  const [show, setshow] = useState(false);
  const handleClose = () => setshow(!show);
  const [width, setwidth] = useState(window.innerWidth);

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setwidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return (
    <>
      <div className={`${classes.root} ${scroll && classes.downnevbar}`}>
        <div className={`${classes.navbar} `}>
          <div className={classes.logoSection}>
            <a href="/">
              <img className={`${classes.logoImg}`} src={logo} alt="logo" />
            </a>
          </div>
          <div className={`${classes.menuBar} ${scroll && classes.menuScroll}`}>
            <button className={classes.menuBtn} onClick={handleClose}>
              <HiBars3 className={`${classes.menuIcon}`} />
            </button>
          </div>
          <div
            style={{
              display: width <= 950 ? (show ? "block " : " none") : "block",
            }}
          >
            <ul className={classes.menu}>
              <li>
                <a
                  className={`${classes.item} ${scroll && classes.downitem}`}
                  href="/#home"
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className={`${classes.item} ${scroll && classes.downitem}`}
                  href="/#about"
                  onClick={() => {
                    handleClose();
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className={`${classes.item} ${scroll && classes.downitem}`}
                  href="/#service"
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  className={`${classes.item} ${scroll && classes.downitem}`}
                  href="/#portfolio"
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className={`${classes.item} ${scroll && classes.downitem}`}
                  href="/#pricing"
                  onClick={() => {
                    handleClose();
                    window.scrollTo(0, 0);
                  }}
                >
                  My Pricing
                </a>
              </li>
              <li>
                <a
                  className={`${classes.item} ${scroll && classes.downitem}`}
                  href="/#testmonial"
                  onClick={() => {
                    handleClose();
                    window.scrollTo(0, 0);
                  }}
                >
                  Testmonial
                </a>
              </li>
              <li>
                <a
                  className={`${classes.item} ${scroll && classes.downitem}`}
                  href="/#blog"
                  onClick={() => {
                    handleClose();
                    window.scrollTo(0, 0);
                  }}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className={`${classes.item} ${scroll && classes.downitem}`}
                  href="/#contact"
                  onClick={() => {
                    handleClose();
                    window.scrollTo(0, 0);
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TheNavbar;
