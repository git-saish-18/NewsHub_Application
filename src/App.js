import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import { useState } from "react";
import Newonline from "./component/Newonline";
function App() {
  const [Mode, setMode] = useState("Dark Mode");
  const change = () => {
    if (Mode === "Dark Mode") {
      document.body.style.backgroundColor = "blue";
      setMode("light Mode");
      <Login Mode={Mode} />;
    } else {
      document.body.style.backgroundColor = "white";
      setMode("Dark Mode");
      <Login Mode={Mode} />;
    }
  };
  return (
    <>
      <Router>
        <Navbar Mode={Mode} change={change} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Newonline category="general" key="general" />}
          />
          <Route
            exact
            path="/home"
            element={<Newonline category="general" key="general" />}
          />
          <Route
            exact
            path="/Cric"
            element={<Newonline category="sport" key="sport" head="Sport" />}
          />
          <Route
            exact
            path="/film"
            element={
              <Newonline
                category="entertainment"
                key="entertainment"
                head="Entertainment"
              />
            }
          />
          <Route
            exact
            path="/tech"
            element={
              <Newonline
                category="technology"
                key="technology"
                head="Technology"
              />
            }
          />
          <Route
            exact
            path="/busi"
            element={
              <Newonline category="business" key="business" head="Business" />
            }
          />
          <Route
            exact
            path="/health"
            element={<Newonline category="health" key="health" head="Health" />}
          />
          <Route
            exact
            path="/sci"
            element={
              <Newonline category="science" key="science" head="Science" />
            }
          />
          <Route exact path="/login" element={<Login Mode={Mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
