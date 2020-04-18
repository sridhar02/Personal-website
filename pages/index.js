import react from "react";

import Grid from "@material-ui/core/Grid";
import { Typography, makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import project from "../images/"

const useIntroStyles = makeStyles({
  maincontent: {
    marginTop: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

function Navabar() {
  return <div></div>;
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
    <div>
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

function Experience() {
  return <div></div>;
}

const useSkillsStyles = makeStyles({
  root: {
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
    <React.Fragment>
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
    </React.Fragment>
  );
}

function App() {
  return (
    <Grid container>
      <Grid container>
        <Grid item md={12}>
          <Intro />
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
    </Grid>
  );
}

export default App;
