import { Redirect, Route, Switch } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuouteDetail from "./pages/QuouteDetail";

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <Redirect to="/quotes"/>
      </Route>
      <Route path='/quotes' exact>
        <AllQuotes />
      </Route>
      <Route path='/quotes/:quoteId'>
        <QuouteDetail />
      </Route>
      <Route path='/new-quote'>
        <NewQuote />
      </Route>
    </Switch>
  );
}

export default App;