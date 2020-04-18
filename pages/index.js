import react from "react";

import Grid from "@material-ui/core/Grid";
import { Typography, makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import project from "../images/"

const useIntroStyles = makeStyles({
  maincontent: {
    minHeight: "100vh",
    marginTop: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

function Navabar() {
  return (
    <div>
      <div>
        <a href="/">Home </a>
      </div>
      <div>
        <a href="#skills">Skills</a>
      </div>
      <div>
        <a href="#Projects">Projects</a>
      </div>
      <div>
        <a href="#Contact">Contact</a>
      </div>
      <div>
        <a href="#Experience">Experience</a>
      </div>
    </div>
  );
}

function Intro() {
  const classes = useIntroStyles();
  return (
    <div className={classes.maincontent}>
      <Typography variant="h5">Sridhar katta</Typography>
      <br />
      <Typography variant="h5">
        A developer, geek, enthusiast, who loves to solve problems and fix
        things with technology.
      </Typography>
      <br />
    </div>
  );
}

const useAboutStyles = makeStyles({});

function AboutMe() {
  const classes = useAboutStyles();
  return (
    <div id="AboutMe">
      <Typography variant="h5">What I hope to do</Typography>
      <Typography>
        My mission as a developer is to contribute to applications that empower
        and improve lives. I believe that through code we can make the world a
        better place by building products that empower communities. Yes, let's
        change the world together!
      </Typography>
    </div>
  );
}

const useEXperienceStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

function Experience() {
  const classes = useEXperienceStyles();
  return (
    <div id="Experience" className={classes.root}>
      <h4>Work Experience</h4>
      <p>
        I have worked for a number of projects. But, below are the corporate
        experiences that I have.
      </p>
      <div>
        <p>Insert company logo </p>
        <p>Cambridge Technologies</p>
        <div>
          <h4>Reacjs Developer</h4>
          <p>Jan 2020 to April 20202</p>
        </div>
      </div>
    </div>
  );
}

const useSkillsStyles = makeStyles({
  root: {
    minHeight: "100vh",
    minWidth: "275",
  },
});

function Skills() {
  const classes = useSkillsStyles();
  return (
    <div className={classes.root} id="skills">
      <h2>Skills </h2>
      <br />
      <h4>Languages and Frameworks:</h4>
      <p>
        Javascript, HTML5, CSS3, React,Golang, Bootstrap, Node, Express,
        MongoDB, Postgres, Cypress
      </p>
      <br />
      <h4>IDE:</h4>
      <p> Microsoft VS Code and Vim</p>
      <h4>VCS:</h4>
      <p>Git/Github</p>
      <h4>Learning:</h4>
      <p>Graphql and Type Script</p>
    </div>
  );
}

const useProjectStyles = makeStyles({
  main: {
    minHeight: "100vh",
  },
  root: {
    display: "flex",
    // flexDirection: "column",
  },
  card: {
    width: "650px",
    margin: "10px",
    padding: "25px",
    border: "1px solid black",
  },
});

function Projects() {
  const classes = useProjectStyles();
  return (
    <div id="Projects" className={classes.main}>
      <h4>Projects</h4>
      <div className={classes.root} id="projects">
        <div className={classes.card}>
          <h4>Issue Tracker</h4>
          <a href="https://issue-hub.now.sh/join">Live-website </a>
          <img src="../images/project-1.png" alt="image of project-1" />
          <p>Project overview: </p>
          <ul>
            <li>
              This a project based on GitHub system where users can login which
              have repositories, each repository have issues, issues have
              comments, issues can lock, pinned, assigned and the repositories
              can also have collaborators who have every permission that of
              user.
            </li>
            <li>
              The stack which has been used for this project are Nextjs for the
              server-side rendering of frontend, Material-UI for the Styles,
              Golang for API calls and PSQL for database.
            </li>
            <li>
              The project is hosted using GCP for storage, Heruko for backend
              API calls, and Zeit for the frontend.
            </li>
          </ul>
        </div>
        <div className={classes.card}>
          <h4>Ecommerce website</h4>
          <img src="../images/project-1.png" alt="image of project-1" />
          <p>Project overview: </p>
          <ul>
            <li>
              This project based on the Flipkart idea where users who can login
              and logout, you can see the products on the main page which can
              added to cart from the cart you can buy the products.
            </li>
            <li>
              It is built on Nextjs, Reactjs for frontend, and Golang as
              backend, material-UI as CSS library and PSQL as database.
            </li>
            <li>
              The project is live using the GCP for storage, Heruko for backend
              API calls, Zeit for the frontend.
            </li>
          </ul>
        </div>
        <div className={classes.card}>
          <img src="../images/project-1.png" alt="image of project-1" />
          <h4>Todo Application</h4>
          <p>Project overview: </p>
          <p>
            This is a sample todo applicaion which was written using react hooks
            ,state is managed using local browser state and it is deployed in
            netlify.
          </p>
        </div>
      </div>
    </div>
  );
}

const useContactStyles = makeStyles({
  root: {
    minHeight: "100vh",
    margin: "auto 0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "3.332rem",
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
          href="https://twitter.com/sridhar_K_1997"
          target="_blank"
        >
          <TwitterIcon className={classes.icons} />
        </a>
      </div>
      <br />
      <p>
        You can view my resume by clicking{" "}
        <a
          href="https://drive.google.com/file/d/1HNFiw7AdiypVvrfRk-DTa_yvxv3sxQbN/view?usp=sharing"
          target="_blank"
        >
          here.
        </a>
      </p>
    </div>
  );
}

function App() {
  return (
    <Grid container>
      <Grid container>
        <Grid item md={12}>
          <Navabar />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={12}>
          <Intro />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={12}>
          <Experience />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={12}>
          <Skills />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item sm={12} md={12}>
          <Projects />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item sm={12} md={12}>
          <Contact />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
