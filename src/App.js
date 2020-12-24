import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router, Link, Switch, Route
} from 'react-router-dom'
import Aboutus from './components/Aboutus';
import Home from './components/Home';
import Header from './components/Header';
import Contact from './components/Contact';
import List from './components/List';
import User from './components/User';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
      <Route path='/about'>
          <Aboutus />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/list'>
          <List />
        </Route>
        <Route path='/users/:id'>
          <User />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
