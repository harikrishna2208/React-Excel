import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css" 
import Welcome from "./Components/WelcomePage";
import Login from "./Components/LoginPage";
import Header from "./Components/Header";

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <div>
          <Header/>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/welcome" component={Welcome} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
