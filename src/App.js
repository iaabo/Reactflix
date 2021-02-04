import { Route, Redirect, Switch } from "react-router-dom";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import WatchList from "./components/WatchList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div>
      <NavBar />
      <GlobalProvider>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route path="/watchlist" component={WatchList} />
          <Redirect to="/" />
        </Switch>
      </GlobalProvider>
    </div>
  );
}

export default App;
