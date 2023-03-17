import React , { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import "../App.css"
import Login from "./Login";
import Signup from "./Signup";

function App() {
  const [user, setUser] = useState(null);
  const handleLogin = (email, password) => {
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        session: {
          email: email,
          password: password,
        },
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Invalid email or password');
        }
      })
      .then((data) => {
        setUser(data.user);
        localStorage.setItem('user', JSON.stringify(data.user));
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };


  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
          <Home user={user} setUser={setUser} />
          </Route>
          <Route path="/login">
           <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/signup">
            <Signup handleLogin={handleLogin} />
            </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
