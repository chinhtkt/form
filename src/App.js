import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Navbar,Nav,} from 'react-bootstrap';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
    <Router>
    <Navbar bg='light' variant='light'>
        <Navbar.Brand>Chinhtkt :))</Navbar.Brand>
        <Nav className='mr-auto'>
        <Nav.Link><Link to ="/">Home</Link></Nav.Link>
          <Nav.Link><Link to ="/Login">Login</Link></Nav.Link>
          <Nav.Link><Link to ="/Register">Register</Link></Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
