import React from "react";
import { makeStyles } from "@material-ui/core";
import pdfFile from "../assets/JustinMabutas_Resume_2021_v1.2.1.pdf";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100vh",
  },
  pdf: {
    display: "block",
    border: "none",
    width: "100%",
    height: "100%",
  },
});

const Resume = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <iframe src={pdfFile} className={classes.pdf} title="resume" />
    </div>
  );
};

export default Resume;
