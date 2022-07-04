import { Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";

import NotFound from "../common/NotFound";

import Dashboard from "./Dashboard";
import FavoriteImageList from "../favoriteImages/FavoriteImageList";

function App() {
  return (
    <Container style={{ padding: 30 }}>
      {/* <Navi></Navi> */}
      <Switch>
        <Route path="/" exact component={Dashboard}></Route>

        <Route
          path="/favoriteImages"
          exact
          component={FavoriteImageList}
        ></Route>

        <Route component={NotFound}></Route>
      </Switch>

      {/* <Dashboard></Dashboard> */}
    </Container>
  );
}

export default App;
