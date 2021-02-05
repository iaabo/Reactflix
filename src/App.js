import { Route, Redirect, Switch } from "react-router-dom";
import MovieList from "./components/MovieList";
import NavMovie from "./components/NavMovie";
import WatchList from "./components/WatchList";
import FooterMovie from "./components/FooterMovie";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div>
      <GlobalProvider>
        <NavMovie />
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route path="/watchlist" component={WatchList} />
          <Redirect to="/" />
        </Switch>
        <FooterMovie />
      </GlobalProvider>
    </div>
  );
}

export default App;
