import React from "react";

import { Typography, makeStyles } from "@material-ui/core";

const useProjectStyles = makeStyles({
  main: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center ",
  },
  root: {
    display: "flex",
  },
  image: {
    width: "350px",
    height: "200px",
    margin: "20px",
    border: "2px solid #ddd",
    borderRadius: "15px",
  },
  sourceCode: {
    margin: "40px",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center ",
    // margin: "60px",
  },
});

function Projects() {
  const classes = useProjectStyles();
  return (
    <div id="Projects" className={classes.main}>
      <h4 className={classes.title}>These are some my personal projects</h4>
      <div className={classes.root}>
        <div>
          <a href="https://issue-hub.now.sh/join" target="_blank">
            <img
              className={classes.image}
              src="../project-1.png"
              alt="image of project-1"
            />
          </a>
          <p className={classes.sourceCode}>
            <h4>Issue Tracker Web app</h4>
            <a
              href="https://github.com/sridhar02/issue-tracker"
              target="_blank"
            >
              Click here to see the source code
            </a>
          </p>
        </div>
        <div className={classes.card}>
          <a href="https://ecommerce.sridhar02.now.sh/products" target="_blank">
            <img
              src="../project-2.png"
              alt="image of project-1"
              className={classes.image}
            />
          </a>
          <p className={classes.sourceCode}>
            <h4>Ecommerce website</h4>
            <a href="https://github.com/sridhar02/ecommerce" target="_blank">
              Click here to see the source code
            </a>
          </p>
        </div>
        <div className={classes.card}>
          <a href="https://todo-hooks-sridhar.netlify.app/" target="_blank">
            <img
              src="../project-3.png"
              alt="image of project-1"
              className={classes.image}
            />
          </a>
          <p className={classes.sourceCode}>
            <h4>Simple Todo Application</h4>
            <a
              href="https://github.com/sridhar02/Sample-todoapp-with-react-Hooks"
              target="_blank"
            >
              Click here to see the source code
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
