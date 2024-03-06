import { makeStyles } from "@mui/styles";
import React from "react";
import { Grid } from "@mui/material";
import { Colors } from "../../assets/colors/Colors";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const styles = makeStyles({
  root: {
    width: "85%",
    margin: "auto",
    paddingTop: 112,
    paddingBottom: 112,
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
  formContainer: {
    width: "66.66%",
    margin: "auto",
    "@media(max-width:899px)": {
      width: "100%",
    },
  },
  formText: {
    width: "100%",
    padding: "0.375rem 0.75rem",
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.5,
    color: "#495057",
    backgroundColor: "rgba(0, 0, 0, 0.01)",
    backgroundClip: "padding-box",
    border: " 1px solid #ced4da",
    borderRadius: " 0.25rem",
    "&:focus": {
      color: " #495057",
      backgroundColor: "rgba(0, 0, 0, 0.01)",
      borderColor: "#b4add3",
      outline: 0,
      boxShadow: "0 0 0 0.2rem rgba(105, 90, 166, 0.25)",
    },
  },
  button: {
    padding: "8px 15px",
    borderRadius: "50px",
    cursor: "pointer",
    color: "#695aa6",
    backgroundColor: "#fff",
    fontSize: "1em",
    fontWeight: 400,
    lineHeight: 1.5,
    border: "1px solid #695aa6",
    "&:hover": {
      backgroundColor: "#594c8d",
      border: "1px solid #544885",
    },
  },
  formError: {
    color: "red",
  },
});

let schema = yup.object().shape({
  name: yup.string().required("required"),
  email: yup
    .string()
    .email()
    .matches(/^(?!.*@[^,]*,)/)
    .required("required"),
  message: yup.string().required("required"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (value: any) => {
    console.log(value);
    reset();
  };

  const classes = styles();
  return (
    <div className={classes.root} id="contact">
      <div className={classes.container}>
        <p className={classes.para}>How can you communicate?</p>
        <h2 className={classes.heading}>Contact Me</h2>
      </div>
      <div className={classes.formContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <input
                type="text"
                placeholder="Your Name"
                className={classes.formText}
                {...register("name")}
              />
              <p className={classes.formError}>
                {errors["name"]?.message as string}
              </p>
            </Grid>
            <Grid item xs={6}>
              <input
                type="text"
                placeholder="Enter Email"
                className={classes.formText}
                {...register("email")}
              />
              <br />
              <p className={classes.formError}>
                {errors["email"]?.message as string}
              </p>
              <br />
            </Grid>
          </Grid>
          <textarea
            placeholder="Write Something"
            className={classes.formText}
            cols={30}
            rows={6}
            {...register("message")}
          />
          <p className={classes.formError}>
            {errors["message"]?.message as string}
          </p>
          <br />
          <div style={{ textAlign: "center" }}>
            <button type="submit" className={classes.button}>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
