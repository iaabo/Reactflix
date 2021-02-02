import { Route, Redirect, Switch } from "react-router-dom";
import MovieList from "./components/MovieList";
import WatchList from "./components/WatchList";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/watchlist" component={WatchList} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
