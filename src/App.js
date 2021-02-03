import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import MovieList from "./components/MovieList";
import WatchList from "./components/WatchList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div>
      <GlobalProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route path="/watchlist" component={WatchList} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;
