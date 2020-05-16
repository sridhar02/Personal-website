import React from "react";

import { makeStyles } from "@material-ui/core";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";

const useSkillsStyles = makeStyles({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  mainSection: {
    display: "flex",
    flexDirection: "column",
  },
  subsection: {
    // margin: "20px",
  },
  list: {
    // margin: "20px",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center ",
    margin: "60px",
  },
  icons: {
    fontSize: "75px",
    margin: "50px",
  },
});

function Skills() {
  const classes = useSkillsStyles();
  return (
    <div className={classes.root} id="skills">
      <h4 className={classes.title}>Skill set that you can expect from me.</h4>
      <div className={classes.mainSection}>
        <div className={classes.subsection}>
          <h5>Languages & FrameWorks</h5>
          <FaHtml5 className={classes.icons} />
          <FaCss3Alt className={classes.icons} />
          <IoLogoJavascript className={classes.icons} />
          <FaReact className={classes.icons} />
          <FaNodeJs className={classes.icons} />
          <DiPostgresql className={classes.icons} />
          {/* <div>Go lang</div> */}
        </div>
        {/* <div className={classes.subsection}>
            <h5>Trying to learn</h5>
            <ul className={classes.list}>
              <li>Graphql</li>
              <li>Type Script</li>
              <li>Vuejs</li>
            </ul>
          </div> */}
      </div>
    </div>
  );
}

export default Skills;
