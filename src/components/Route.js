import React from "react";
import { Route, Switch } from "react-router-dom";
import AllData from "./AllData";

class AllDataRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={AllData} />
      </Switch>
    );
  }
}

export default AllDataRouter;
