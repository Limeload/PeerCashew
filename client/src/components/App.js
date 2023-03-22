import React , { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import "../App.css"
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import LoanPage from "./LoanPage";
import LoanForm from "./LoanForm";
import InvestmentPage from "./InvestmentPage";
import InvestmentForm from "./InvestmentForm";
import Dashboard from "./Dashboard";
import StatusBoard from "./StatusBoard";

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
            <Route path="/dashboard">
            <Dashboard user={user} onLogIn={onLogIn} />
            </Route>
            <Route path='/profile'>
              <Profile user={user} onLogIn={onLogIn} onLogOut={onLogOut} />
            </Route>
            <Route path="/statusBoard">
            <StatusBoard user={user} onLogIn={onLogIn} onLogOut={onLogOut} />
            </Route>
            <Route path='/loans'>
              <LoanPage user={user} onLogIn={onLogIn} onLogOut={onLogOut} />
            </Route>
            <Route path='/loanForm'>
              <LoanForm user={user} onLogIn={onLogIn} onLogOut={onLogOut} />
            </Route>
            <Route path='/investors'>
              <InvestmentPage user={user} onLogIn={onLogIn} onLogOut={onLogOut} />
            </Route>
            <Route path='/investmentForm'>
              <InvestmentForm user={user} onLogIn={onLogIn} onLogOut={onLogOut} />
            </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
