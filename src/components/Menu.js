import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, makeStyles, Slide, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link as SmoothScroll } from "react-scroll";

const useStyles = makeStyles({
  menuIcon: {
    position: "fixed",
    top: "0",
    right: "0",
    paddingTop: "16px",
    paddingRight: "20px",
    fontSize: "30px",
    zIndex: "4",
    "&:hover": {
      cursor: "pointer",
    },
  },
  options: {
    position: "fixed",
    width: "100%",
    height: "100vh",
    zIndex: "3",
    backgroundColor: "#707EFF",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "white",
  },
  optionLink: {
    textDecoration: "unset",
    color: "white",
    "&:hover": {
      cursor: "pointer",
      color: "#fff170",
    },
  },
});

const Menu = () => {
  const classes = useStyles();
  const [visible, setVisible] = useState(false);
  const toggleMenu = () => {
    setVisible(visible === false ? true : false);
  };
  const openWebPage = (url) => {
    window.open(url);
  };
  const Option = (props) => {
    return (
      <Typography
        variant={props.component}
        gutterBottom={props.gutterBottom}
        className={classes.optionLink}
        onClick={
          props.url
            ? () => {
                openWebPage(props.url);
              }
            : ""
        }
      >
        {props.children}
      </Typography>
    );
  };
  return (
    <>
      <Box>
        {visible ? (
          <CloseIcon
            className={classes.menuIcon}
            onClick={toggleMenu}
            style={{ color: "white" }}
          />
        ) : (
          <MenuIcon className={classes.menuIcon} onClick={toggleMenu} />
        )}
      </Box>

      <Slide direction="down" in={visible}>
        <Box className={classes.options}>
          <Box
            style={{
              borderBottom: "2px solid white",
              marginBottom: "16px",
              paddingBottom: "16px",
            }}
          >
            <Option component="h2" gutterBottom>
              <SmoothScroll
                to="home"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={toggleMenu}
              >
                Home
              </SmoothScroll>
            </Option>
            <Option component="h2" gutterBottom>
              <SmoothScroll
                to="projects"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={toggleMenu}
              >
                Projects
              </SmoothScroll>
            </Option>
            <Option component="h2">
              <SmoothScroll
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={toggleMenu}
              >
                About Me
              </SmoothScroll>
            </Option>
          </Box>
          <Box>
            <Option to="about" component="h4">
              <RouterLink
                to="/resume"
                target="_blank"
                className={classes.optionLink}
              >
                Resume
              </RouterLink>
            </Option>
            <Option
              to="about"
              component="h4"
              url="https://github.com/JTMabutas17"
            >
              GitHub
            </Option>
            <Option
              to="about"
              component="h4"
              url="https://www.linkedin.com/in/justin-mabutas-62b592188/"
            >
              LinkedIn
            </Option>
          </Box>
        </Box>
      </Slide>
    </>
  );
};

export default Menu;
