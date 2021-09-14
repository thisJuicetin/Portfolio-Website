import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    backgroundColor: "white",
    paddingTop: "32px",
    paddingBottom: "32px",
  },
  wrapper: {
    paddingTop: "16px",
    display: "grid",
    justifyContent: "center",
    gap: "16px",
    width: "100%",
    gridTemplateColumns: "300px 300px 300px",
    gridAutoRows: "300px 300px",
    [`@media (max-height: 1440px) and (max-width: 990px)`]: {
      gridTemplateColumns: "30% 30% 30%",
      gridAutoRows: "300px",
    },
    [`@media (orientation: portrait)`]: {
      gridTemplateColumns: "80%",
      gridAutoRows: "300px",
    },
  },
  project: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: "16px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
  },
  longProject: {
    gridColumn: "span 2",
    [`@media (orientation: portrait)`]: {
      gridColumn: "unset",
    },
  },
});

const Project = (props) => {
  const classes = useStyles();
  if (props.long)
    return (
      <Box
        className={`${classes.project} ${classes.longProject}`}
        style={{ backgroundColor: `${props.bgColor}` }}
      >
        <Typography variant="h4">{props.children}</Typography>
      </Box>
    );
  else
    return (
      <Box
        className={classes.project}
        style={{ backgroundColor: `${props.bgColor}` }}
      >
        <Typography variant="h4">{props.children}</Typography>
      </Box>
    );
};

const Projects = () => {
  const classes = useStyles();
  return (
    <section id="projects">
      <Box className={classes.container}>
        <Typography variant="h3">⭐ Projects ⭐</Typography>
        <Box className={classes.wrapper}>
          <Project long bgColor="aliceblue">
            Android Social Media App
          </Project>
          <Project bgColor="#f6f0ff">Open Weather</Project>
          <Project bgColor="#e9ffff">Motivational Quotes</Project>
          <Project long bgColor="#f8f8ff">
            P2P File Synchronization App
          </Project>
        </Box>
      </Box>
    </section>
  );
};

export default Projects;
