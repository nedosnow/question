import "./App.css";
import CardBoard from "./components/CardBoard/CardBoard";
import Header from "./components/Header/Header";
import SignUp from "./components/SignUp/SignUp";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
      <Route exact path="/">
        <div className="game">
          <CardBoard />
        </div>
        </Route>
        <Route exact path="/auth/signup">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
