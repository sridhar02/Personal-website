import React from "react";

import { Typography, makeStyles } from "@material-ui/core";

const useIntroStyles = makeStyles({
  maincontent: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Intro() {
  const classes = useIntroStyles();
  return (
    <div className={classes.root}>
      <div className={classes.maincontent} id="Home">
        <Typography variant="h1">Hi, I am Sridhar katta</Typography>
        <Typography variant="h2">Software Engineer</Typography>
        <br />
        <p>
          A developer, geek, enthusiast, who loves to solve problems and fix
          things with technology.I am working on 💻frontend web development with
          Javascript and I love contributing to 🌟 open source.
        </p>
        <br />
      </div>
    </div>
  );
}
