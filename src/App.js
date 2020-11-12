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
  const [language, setLanguage] = useState("English");

  return (
    <main>
      <Navbar bg="light" variant="light" className="center" >
        <Nav className="mr-auto">
          <Nav.Link href="/">{Text[language].Navigation.Home}</Nav.Link>
          <Nav.Link href="quiz">{Text[language].Navigation.Quiz}</Nav.Link>
          <Nav.Link href="about">{Text[language].Navigation.About}</Nav.Link>
          <Nav.Link href="methodology">{Text[language].Navigation.Methodology}</Nav.Link>
          <NavDropdown title={language} id="language-selector">
            <NavDropdown.Item onClick={() => setLanguage("English")}>English</NavDropdown.Item>
            <NavDropdown.Item onClick={() => setLanguage("Korean")}>한국어</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
      <Switch>
        <Route path="/" render={(props) => (
          <Home {...props} language={language} />
        )} exact />
        <Route path="/quiz" component={Quiz} />
        <Route path="/results" component={Results} />
        <Route path="/about" component={About} />
        <Route path="/methodology" component={Methodology} />
        <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;
