import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ResetCSS } from "../styles/ResetCSS.js";
import Homepage from "./Homepage.js";

function App() {
  return (
    <BrowserRouter>
    <ResetCSS />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;