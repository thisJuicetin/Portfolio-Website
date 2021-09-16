import { Box, makeStyles, Typography, Fade } from "@material-ui/core";
import React from "react";
import cartoonProfilePic from "./../assets/cartoon-profile.jpg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-scroll";
import { COLORS } from "../constants.js";

const useStyles = makeStyles({
  container: {
    backgroundColor: COLORS.homeBackground,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
    [`@media (orientation: portrait)`]: { flexDirection: "column" },
  },
  textArea: {
    display: "flex",
    flexDirection: "column",
    padding: "16px",
    maxWidth: "500px",
    "& h3": { color: COLORS.primary, paddingBottom: "16px" },
    "& p": { color: COLORS.text2, paddingBottom: "16px", fontSize: "20px" },
  },
  cartoonImg: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
  },
  iconContainer: {
    width: "100%",
    position: "absolute",
    zIndex: "2",
    bottom: "0",
    paddingBottom: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: "25px",
    height: "25px",
    "&:hover": { cursor: "pointer" },
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <section id="home">
      <Fade in={true} timeout={1000}>
        <Box className={classes.container}>
          <Box className={classes.textArea}>
            <Typography variant="h3">Hi, I’m Justin. 👋</Typography>
            <Typography variant="body1">
              I’m a recent grad from CSU, Long Beach. 🎓
            </Typography>
            <Typography variant="body1">
              I enjoy programming and am interested in application and software
              development. 🖥️
            </Typography>
          </Box>
          <img
            className={classes.cartoonImg}
            src={cartoonProfilePic}
            alt="Cartoon Justin"
          />
        </Box>
      </Fade>
      <Box className={classes.iconContainer}>
        <Link to="projects" spy={true} smooth={true} duration={1000}>
          <ExpandMoreIcon className={classes.icon} />
        </Link>
      </Box>
    </section>
  );
};

export default Home;
