import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Home/Shared/Header/Header';
import Login from './Pages/Login/Login';
import Footer from './Pages/Home/Shared/Footer/Footer';
import PlacesForm from './Pages/PlacesForm/PlacesForm';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './Pages/useContext/AuthProvider';
import Register from './Pages/Register/Register';
import Activities from './Pages/Activities/Activities';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Booking from './Pages/Home/Bookings/Booking';

import AllOrders from './Pages/AllOrders/AllOrders';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/activity">
              <Activities></Activities>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <AllOrders></AllOrders>
            </PrivateRoute>

            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/placesForm">
              <PlacesForm></PlacesForm>
            </Route>
            <PrivateRoute exact path="/booking/:bookId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
