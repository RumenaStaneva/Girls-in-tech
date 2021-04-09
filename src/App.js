import Header from './components/Header'
import Footer from './components/Footer';
import Main from './components/Main';
import Error from './components/Error';
import Createblog from './components/CreateBlog';
import Login from './components/Authentication/Login';
import ContactUs from './components/ContactUs';
import Events from './components/Events';
import About from './components/About';
import Edit from './components/Edit';
import Profile from './components/Profile';
import Register from './components/Authentication/Register';
import { auth } from './services/firebase'
import React, { useEffect, useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';


function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser)
  }, [])

  return (

    <div className="App">
      <Header isAuthenticated={Boolean(user)} />
      <Switch>
        <Main exact path="/" isAuthenticated={Boolean(user)}></Main>

        <Route path='/about' component={About} />
        <Route path='/contactUs' component={ContactUs} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/createBlog' component={Createblog} isAuthenticated={Boolean(user)} />
        <Route path='/events' component={Events} isAuthenticated={Boolean(user)} />
        <Route path='/edit/:id' component={Edit} isAuthenticated={Boolean(user)} />
        <Route path='/profile' component={Profile} isAuthenticated={Boolean(user)} />
        <Route path="/logout" render={props => {
          auth.signOut();
          localStorage.clear()
          return <Redirect to="/" />
        }} />
        <Route render={() => <Error />} />
      </Switch>


      <Footer />
    </div>
  );
}

export default App;
