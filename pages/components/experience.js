import React from "react";

import { makeStyles } from "@material-ui/core";

const useEXperienceStyles = makeStyles({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // padding: "3.332rem",
  },
  mainSection: {
    border: "1px solid #ddd",
    borderRadius: "15px",
    width: "60%",
    display: "flex",
    justifyContent: "space-around",
  },
  image: {
    width: "170px",
    height: "100px",
    // margin: "20px",
  },
  subSection: {
    margin: "40px",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center ",
    margin: "60px",
  },
});

function Experience() {
  const classes = useEXperienceStyles();
  return (
    <div id="Experience" className={classes.root}>
      <h4 className={classes.title}>
        I have worked for a number of projects. But, below are the corporate
        experiences that I have.
      </h4>
      <div className={classes.mainSection}>
        <div>
          <img
            src="CTE-Logo.png"
            alt="Company Logo"
            className={classes.image}
          />
          <h4>Cambridge Technologies</h4>
        </div>
        <div className={classes.subSection}>
          <h4>Javascript Developer</h4>
          <p>Jan 2020 - Present</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
