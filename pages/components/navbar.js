import React from "react";

import { makeStyles } from "@material-ui/core";

const useNavbarStyles = makeStyles({
  root: {
    display: "flex",
    padding: "10px auto",
    justifyContent: "space-between",
  },
  rightSide: {
    margin: "0 15px",
    textDecoration: "None",
    color: "black",
    fontSize: "20px",
  },
  main: {
    display: "flex",
    justifyContent: "end",
  },
});

function Navabar() {
  const classes = useNavbarStyles();
  return (
    <div className={classes.root}>
      <a href="/" className={classes.rightSide}>
        Sridhar Katta
      </a>
      <div className={classes.rightSide}>
        <a href="#Home" className={classes.rightSide}>
          Home{" "}
        </a>
        <a href="#Experience" className={classes.rightSide}>
          Experience
        </a>
        <a href="#skills" className={classes.rightSide}>
          Skills
        </a>
        <a href="#Projects" className={classes.rightSide}>
          Projects
        </a>
        <a href="#Contact" className={classes.rightSide}>
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navabar;
