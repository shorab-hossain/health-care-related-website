import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Doctors from './components/Doctor/Doctors';
import Contract from './components/contract/Contract';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Appoinment from './components/Appoinment/Appoinment';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route exact path="/home">
              <Home></Home>
          </Route>
          <Route exact  path="/services">
              <Services></Services>
          </Route>
          <Route path="/doctors">
              <Doctors></Doctors>
          </Route>
          <Route  path="/contract">
              <Contract></Contract>
          </Route>
          <PrivateRoute  path="/about">
              <About></About>
          </PrivateRoute>
          <Route path="/appoinment">
            <Appoinment></Appoinment>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route  path="*">
              <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
