import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home.js';
import Quiz from './components/Quiz.js';
import About from './components/About.js';
import Methodology from './components/Methodology.js';
import Error from './components/Error.js'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <main>
      <Navbar bg="light" variant="light">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="quiz">Quiz</Nav.Link>
          <Nav.Link href="about">About</Nav.Link>
          <Nav.Link href="methodology">Methodology</Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/quiz" component={Quiz} />
        <Route path="/about" component={About} />
        <Route path="/methodology" component={Methodology} />
        <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;
