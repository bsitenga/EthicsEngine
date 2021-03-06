import './App.css';
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home.js';
import Quiz from './components/Quiz.js';
import Results from './components/Results.js';
import About from './components/About.js';
import Methodology from './components/Methodology.js';
import Error from './components/Error.js'
import Text from './components/data/Text.js';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

//Main Component with Navbar and React Router
function App() {
  const [language, setLanguage] = useState(localStorage.getItem('ethicsLang') || "English");

  //Sets dropdown title for languages that don't use the Latin alphabet
  const setDropdown = () => {
    if (language === "Korean") {
      return "한국어"
    }
    return language;
  }

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('ethicsLang', lang)
  }

  return (
    <main>
      <Navbar bg="light" variant="light" className="center" >
        <Nav className="mr-auto">
          <Nav.Link href="/">{Text[language].Navigation.Home}</Nav.Link>
          <Nav.Link href="quiz">{Text[language].Navigation.Quiz}</Nav.Link>
          <Nav.Link href="about">{Text[language].Navigation.About}</Nav.Link>
          <Nav.Link href="methodology">{Text[language].Navigation.Methodology}</Nav.Link>
          <NavDropdown title={setDropdown()} id="language-selector">
            <NavDropdown.Item onClick={() => changeLanguage("English")}>English</NavDropdown.Item>
            <NavDropdown.Item onClick={() => changeLanguage("Korean")}>한국어</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
      <Switch>
        <Route path="/" render={(props) => (
          <Home {...props} language={language} />
        )} exact />
        <Route path="/quiz" render={(props) => (
          <Quiz {...props} language={language} />
        )} />
        <Route path="/results" render={(props) => (
          <Results {...props} language={language} />
        )} />
        <Route path="/about" render={(props) => (
          <About {...props} language={language} />
        )} />
        <Route path="/methodology" render={(props) => (
          <Methodology {...props} language={language} />
        )} />
        <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;
