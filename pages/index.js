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

const useNavbarStyles = makeStyles({
  root: {
    display: "flex",
    margin: "10px auto",
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

function Intro() {
  const classes = useIntroStyles();
  return (
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
  );
}

const useEXperienceStyles = makeStyles({
  root: {
    minHeight: "100vh",
    margin: "auto 0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "3.332rem",
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

const useSkillsStyles = makeStyles({
  root: {
    minHeight: "100vh",
    margin: "auto 0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "3.332rem",
  },
  mainSection: {
    display: "flex",
  },
  subsection: {
    width: "50%",
    margin: "20px",
  },
  list: {
    margin: "20px",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center ",
    margin: "60px",
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
          <ul className={classes.list}>
            <li>HTML</li>
            <li> CSS</li>
            <li>Javascript</li>
            <li>Reactjs</li>
            <li>Go lang</li>
            <li>Nodejs</li>
            <li>PSQL</li>
          </ul>
        </div>
        <div className={classes.subsection}>
          <h5>Trying to learn</h5>
          <ul className={classes.list}>
            <li>Graphql</li>
            <li>Type Script</li>
            <li>Vuejs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const useProjectStyles = makeStyles({
  main: {
    minHeight: "100vh",
    margin: "auto 0px",
    padding: "3.332rem",
  },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center ",
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
    margin: "60px",
  },
});

function Projects() {
  const classes = useProjectStyles();
  return (
    <div id="Projects" className={classes.main}>
      <h4 className={classes.title}>These are some my personal projects</h4>
      <div className={classes.root} id="projects">
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
          href="https://twitter.com/ksridhar02"
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
