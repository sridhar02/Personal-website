import React from "react";

import { makeStyles } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useContactStyles = makeStyles({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // padding: "3.332rem",
  },
  icons: {
    fontSize: "75px",
    marginLeft: "100px",
    marginRight: "100px",
    marginTop: "50px",
    marginBottom: "50px",
  },
  anchor: {
    textDecoration: "None",
    color: "black",
  },
  iconsLayout: {
    display: "flex",
    justifyContent: "space-around",
  },
});

function Contact() {
  const classes = useContactStyles();
  return (
    <div id="Contact" className={classes.root}>
      <h4>Feel free to reach me out at:</h4>
      <br />
      <div className={classes.iconsLayout}>
        <div>
          <a
            className={classes.anchor}
            href="mailto:kattasridhar02@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailIcon className={classes.icons} />
          </a>
        </div>
        <a
          className={classes.anchor}
          href="https://github.com/sridhar02"
          target="_blank"
        >
          <GitHubIcon className={classes.icons} />
        </a>
        <a
          className={classes.anchor}
          href="https://www.linkedin.com/in/sridhar02"
          target="_blank"
        >
          <LinkedInIcon className={classes.icons} />
        </a>
        <a
          className={classes.anchor}
          href="https://twitter.com/ksridhar02"
          target="_blank"
        >
          <TwitterIcon className={classes.icons} />
        </a>
      </div>
      <br />
      <p>
        You can view my resume by clicking{" "}
        <a href="../resume.pdf" target="_blank">
          here.
        </a>
      </p>
    </div>
  );
}

export default Contact;
