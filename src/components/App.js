import React from "react";
import { BrowserRouter } from "react-router-dom";

import AllDataRouter from "./Route";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <AllDataRouter />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
