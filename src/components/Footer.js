import { Box, Link, makeStyles } from "@material-ui/core";
import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#f8f8ff",
    paddingTop: "16px",
    paddingBottom: "16px",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100px",
  },
  link: {
    color: "black",
  },
});
const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.iconContainer}>
        <Link
          href="https://www.linkedin.com/in/justin-mabutas-62b592188/"
          target="_blank"
          className={classes.link}
        >
          <LinkedInIcon />
        </Link>
        <Link
          href="https://github.com/JTMabutas17"
          target="_blank"
          className={classes.link}
        >
          <GitHubIcon />
        </Link>
        <Link
          href="mailto:thisjuicetin@gmail.com"
          target="_blank"
          className={classes.link}
        >
          <EmailIcon />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
