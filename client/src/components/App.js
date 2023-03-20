import React , { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import "../App.css"
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import LoanPage from "./LoanPage";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('/me')
      .then(response => {
        if(response.ok) {
          response.json()
          .then((user) => setUser(user))
        }
      })
  }, [])

  function onLogIn(loggedInUser) {
    setUser(loggedInUser)
  }

  function onLogOut(){
    setUser(null)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact="true" path="/">
          <Home user={user} onLogOut={onLogOut}/>
          </Route>
          <Route path="/login">
           {(!user) ? <Login onLogIn={onLogIn}/> : null }
          </Route>
          <Route path="/signup">
            <Signup onLogIn={onLogIn} />
            </Route>
            <Route path='/profile'>
              <Profile user={user} onLogIn={onLogIn} onLogOut={onLogOut} />
            </Route>
            <Route path='/loans'>
              <LoanPage  />
            </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
