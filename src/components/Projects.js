import { Box, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";

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
    "&:hover": {
      cursor: "pointer",
    },
  },
  longProject: {
    gridColumn: "span 2",
    [`@media (orientation: portrait)`]: {
      gridColumn: "unset",
    },
  },
  fullCard: {
    width: "100%",
    height: "100%",
    borderRadius: "16px",
    backgroundColor: "rgba(17, 17, 17, 0.8)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  innerCard: { width: "95%", color: "#f8f8ff" },
  innerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  skill: {
    padding: "8px",
    borderRadius: "16px",
    color: "black",
    margin: "4px",
  },
  projectLink: {
    padding: "8px",
    borderRadius: "4px",
    backgroundColor: "#ff7171",
    color: "#f8f8ff",
    margin: "4px",
    "&:hover": {
      backgroundColor: "#f8f8ff",
      color: "#ff7171",
    },
  },
});

const Project = (props) => {
  const classes = useStyles();
  const skills = props.skills ? props.skills : [];
  const [fullCard, setFullCard] = useState(false);
  const toggleCard = () => {
    setFullCard(!fullCard);
  };
  const openWebPage = (url) => {
    window.open(url);
  };

  const FullCard = () => {
    return (
      <Box className={classes.fullCard}>
        <Box className={classes.innerCard}>
          <Typography
            variant="h5"
            style={{ textDecoration: "underline" }}
            gutterBottom
          >
            {props.title}
          </Typography>
          <Typography variant="body1">{props.description}</Typography>

          <Box
            className={classes.innerContainer}
            style={{ paddingBottom: "16px" }}
          >
            {skills.map((text) => {
              return (
                <Typography
                  variant="body2"
                  className={classes.skill}
                  style={{ backgroundColor: `${props.bgColor}` }}
                  key={props.title + " " + text}
                >
                  {text}
                </Typography>
              );
            })}
          </Box>
          <Box className={classes.innerContainer}>
            {props.live ? (
              <Typography
                variant="body2"
                className={classes.projectLink}
                onClick={() => {
                  openWebPage(props.live);
                }}
              >
                View Live
              </Typography>
            ) : (
              ""
            )}
            {props.github ? (
              <Typography
                variant="body2"
                className={classes.projectLink}
                onClick={() => {
                  openWebPage(props.github);
                }}
              >
                GitHub
              </Typography>
            ) : (
              ""
            )}
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      className={
        props.long
          ? `${classes.project} ${classes.longProject}`
          : classes.project
      }
      onClick={toggleCard}
      style={{ backgroundColor: `${props.bgColor}` }}
    >
      {fullCard ? (
        <FullCard />
      ) : (
        <Typography variant="h4">{props.title}</Typography>
      )}
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
          <Project
            long
            bgColor="aliceblue"
            title="Android Social Media App"
            description="An Android App that lets you schedule hangouts and communicate with other users in real time."
            skills={["Android Studio", "APIs", "Google Firebase"]}
          />
          <Project
            bgColor="#f6f0ff"
            title="Open Weather"
            description="A Single Page Application to view weather information for multiple cities."
            skills={["React", "Material UI", "CSS3", "APIs"]}
            live="https://minimal-weather-app.netlify.app/"
            github="https://github.com/JTMabutas17/Weather-App"
          />
          <Project
            bgColor="#e9ffff"
            title="Motivational Quotes"
            description="A Single Page Application to view motivational quotes!"
            skills={["React", "Material UI", "CSS3", "APIs"]}
            live="https://motivational-quote-app.netlify.app/"
            github="https://github.com/JTMabutas17/Motivational-Quote-App"
          />
          <Project
            long
            bgColor="#f8f8ff"
            title="P2P File Synchronization App"
            description="Peer-to-Peer terminal application to synchronize files with clients in your network."
            skills={["Python3", "Sockets", "Threads", "Distributed Systems"]}
            github="https://github.com/JTMabutas17/Peer-to-Peer-File-Synchronization-Terminal-Application"
          />
        </Box>
      </Box>
    </section>
  );
};

export default Projects;
