import react from "react";

import Grid from "@material-ui/core/Grid";

import Skills from "./components/skills";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Navbar from "./components/navbar";
import Intro from "./components/intro";

function App() {
  return (
    <Grid container>
      <Grid container>
        <Grid item md={12}>
          <Navbar />
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
