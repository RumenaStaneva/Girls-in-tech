//import LoggedHeader from './components/LoggedHeader'
import GuestHeader from './components/GuestHeader'
import Footer from './components/Footer';
import Main from './components/Main';
import Error from './components/Error';
import Createblog from './components/CreateBlog';
import Login from './components/Authentication/Login';
import ContactUs from './components/ContactUs';
import Events from './components/Events';
import About from './components/About';
import Edit from './components/Edit';
import Register from './components/Authentication/Register';
//import { AuthProvider } from './services/Auth'
import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { auth } from "./services/firebase";
import './App.css';
//import PrivateRoute from './services/PrivateRoute';

function App() {
  return (

    <div className="App">
      <GuestHeader />
      {/* <PrivateRoute component={LoggedHeader} /> */}

      <Switch>
        <Route exact path="/" component={Main} />

        <Route path='/about' component={About} />
        <Route path='/contactUs' component={ContactUs} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/createBlog' component={Createblog} />
        <Route path='/events' component={Events} />
        <Route path='/edit/:id' component={Edit} />
        <Route render={() => <Error />} />
      </Switch>


      <Footer />
    </div>
    //</AuthProvider >

  );
}

export default App;
