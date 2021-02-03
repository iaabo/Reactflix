import { Route, Redirect, Switch } from "react-router-dom";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div>
      <Navbar />
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
