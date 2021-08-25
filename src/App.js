import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  const [toggled, setToggled] = useState(false);
  window.addEventListener("load", () => {
    document.querySelector(".page--loader").classList.add("fade-out");
    setTimeout(() => {
      document.querySelector(".page--loader").style.display = "none";
    }, 600);
  });
  return (
    <Router>
      <div className="App"> 
      <div className="toggle" onClick={() => {
            setToggled(!toggled);
          }}>
        {/* toggle */}
      </div>
      <div className={`${toggled ? " night" : "day"}`}>
      <div className="page--loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="navbar--page">
          <NavigationBar />
        </div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>
      </div>
      
      </div>
    </Router>
  );
}

export default App;
