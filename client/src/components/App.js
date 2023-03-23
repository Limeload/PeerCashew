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
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      fetch('/me', { credentials: 'include' })
        .then(response => {
          if(response.ok) {
            response.json()
              .then((user) => {
                setUser(user);
                localStorage.setItem('user', JSON.stringify(user));
              })
          }
        })
    }
  }, [])


  function onLogIn(loggedInUser) {
    setUser(loggedInUser)
    localStorage.setItem('user', JSON.stringify(loggedInUser));
  }

  function onLogOut(){
    setUser(null)
    localStorage.removeItem('user');
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
