import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Home/Shared/Header/Header';
import About from './Pages/About/About';
import NewExperiences from './Pages/Home/Home/NewExperiences/NewExperiences';
import Login from './Pages/Login/Login';
import Footer from './Pages/Home/Shared/Footer/Footer';
import PlacesForm from './Pages/PlacesForm/PlacesForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/gift">
            <NewExperiences></NewExperiences>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/placesForm">
            <PlacesForm></PlacesForm>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
