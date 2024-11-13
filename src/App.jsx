
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Skills } from "./components/skills/Skills";
import { Contact } from "./components/Contact/Contact";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import {Projects} from "./components/Projects/Projects";
import { Experience } from "./components/Experience/Experience";

function App() {
  

  return (
    <div className={styles.app}>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
