import React from "react";
import axios from "axios";

import SpaceDataList from "./SpaceDataList";

import Filter from "./filters";
import "./App.css";

class AllData extends React.Component {
  state = { images: [] };

  componentDidMount = async () => {
    const response = await axios.get(
      "https://api.spacexdata.com/v3/launches?limit=100",
      {}
    );
    console.log(response.data);
    this.setState({ images: response.data });
  };

  onFilterSubmit = async (term, launch_success, land_success) => {
    const response = await axios.get(
      "https://api.spacexdata.com/v3/launches?limit=100",
      {
        params: {
          launch_year: term,
          launch_success: launch_success,
          land_success: land_success,
        },
      }
    );

    this.setState({ images: response.data });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="container margin-top-style">
            <h2>SpaceX Launch Programs</h2>
            <div className="row ">
              <div className="col-md-3 float-left filter-allign">
                <Filter onSubmit={this.onFilterSubmit} />
              </div>

              <div className="col-md-9">
                <div className="main-screen">
                  <SpaceDataList images={this.state.images} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AllData;
