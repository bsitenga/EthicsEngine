import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home.js';
import Quiz from './components/Quiz.js';
import About from './components/About.js';
import Methodology from './components/Methodology.js';
import Error from './components/Error.js'

function App() {
  return (
    <main>
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
