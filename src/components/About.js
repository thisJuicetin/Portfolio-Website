import { Box, makeStyles, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import profilePic from "./../assets/profile-pic.jpg";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#f8f8ff",
    paddingTop: "32px",
    paddingBottom: "32px",
    [`@media (orientation: portrait)`]: { flexDirection: "column" },
  },
  textArea: {
    display: "flex",
    flexDirection: "column",
    padding: "16px",
    maxWidth: "700px",
    "& p": { color: "#555555", paddingBottom: "16px", fontSize: "20px" },
  },
  cartoonImg: {
    width: "200px",
    height: "200px",
    borderRadius: "16px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
  },
  resumeLink: {
    color: "black",
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <section id="about">
      <Box className={classes.container}>
        <Box className={classes.textArea}>
          <Typography variant="h3">About Me 📝</Typography>
          <Typography variant="body1">
            I have experience developing mobile applications with Android Studio
            and writing/deploying Single Page Applications in React. 📱
          </Typography>
          <Typography variant="body1">
            I also have experience working as a system administrator with
            practical experience using Linux. 💻
          </Typography>
          <Typography variant="body1">
            Have a look at my{" "}
            <RouterLink
              className={classes.resumeLink}
              to="/resume"
              target="_blank"
            >
              Resume
            </RouterLink>
            !
          </Typography>
        </Box>
        <img
          className={classes.cartoonImg}
          src={profilePic}
          alt="Cartoon Justin"
        />
      </Box>
    </section>
  );
};

export default About;
