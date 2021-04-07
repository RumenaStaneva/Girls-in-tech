import LoggedHeader from './components/LoggedHeader'
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
import MainNotLogged from './components/MainNotLogged';
import Profile from './components/Profile';
import Register from './components/Authentication/Register';
import { auth } from './services/firebase'
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';


function App() {
  return (

    <div className="App">
      <LoggedHeader />

      <Switch>
        <Route exact path="/" component={Main} ></Route>
        <Route path="/guest" >
          <GuestHeader />
          <MainNotLogged />
        </Route>
        <Route path='/about' component={About} />
        <Route path='/contactUs' component={ContactUs} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/createBlog' component={Createblog} />
        <Route path='/events' component={Events} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/profile' component={Profile} />
        <Route path="/logout" render={props => {
          auth.signOut();
          localStorage.clear()
          return <Redirect to="/guest" />
        }} />
        <Route render={() => <Error />} />
      </Switch>


      <Footer />
    </div>
  );
}

export default App;
