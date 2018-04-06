import React from "react";
import {render} from "react-dom";
import {BrowserRouter as Router,
        Route,
        Link,
        Switch
      } from "react-router-dom";

//Components
import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {User} from "./components/User";
import {Header} from "./components/Header";

class App extends React.Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    );
  }
}

render(<App />, window.document.getElementById("app"));