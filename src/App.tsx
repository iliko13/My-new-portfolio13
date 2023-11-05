import Menu from "./components/Menu";
import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Projects from "./views/Projects";

const App = () => {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Menu />
    </>
  );
};

export default App;
