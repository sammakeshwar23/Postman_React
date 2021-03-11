import logo from './logo.svg';
import './App.css';
import Home from "./component/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

            {/* https://jsonplaceholder.typicode.com/posts */}
function App() {
  return (
    <Router>
        <Switch>
          <Route exact path={["/","/Home"]} component={Home} />
        </Switch>
      </Router>
  );
}

export default App;
