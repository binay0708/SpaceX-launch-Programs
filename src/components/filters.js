import React from "react";

import "./Filter.css";

class Filter extends React.Component {
  state = { term: "", launch_success: "", land_success:"" };

  onFilteredData = (e, type) => {
    e.preventDefault();
    let url = "";
    if (type && type === 'success') {
      this.setState({ launch_success: e.target.value });
      url = this.state.term
        ? "year=" + this.state.term + "&launch=" + e.target.value
        : "launch=" + e.target.value;
      url = url + (this.state.land_success? '&land='+ this.state.land_success: '') 
      this.props.onSubmit(this.state.term, e.target.value, this.state.land_success);
    } else if(type && type === 'land') {
        this.setState({ land_success: e.target.value });
        url = this.state.term
          ? "year=" + this.state.term + '&': "";
        url =
          url +
          (this.state.launch_success
            ? "&launch=" + this.state.launch_success + '&'
            : "");
        url = url + 'land=' + e.target.value
        this.props.onSubmit(this.state.term, this.state.launch_success , e.target.value);
    }else {
      this.setState({ term: e.target.value });
      url = "year=" + e.target.value + (this.state.launch_success? "&launch=" + this.state.launch_success: "");
      url = url + (this.state.land_success ? "&land=" + this.state.land_success : ""); 
      this.props.onSubmit(e.target.value, this.state.launch_success);
    }
    window.history.pushState("", "", url);
  };

  render() {
    return (
      <div className="button-style">
        <div style={{ paddingLeft: "15px" }}>
          <strong>Filters:</strong>
        </div>

        <div>
          <div className="text-filter">
            <p>Launch year</p>
            <hr />
          </div>
          <div className="filter-button">
            <button
              type="submit"
              className="btn btn-success btn-sm"
              value="2006"
              onClick={this.onFilteredData}
            >
              2006
            </button>

            <button
              type="submit"
              className="btn btn-success btn-sm"
              value="2007"
              onClick={this.onFilteredData}
            >
              2007
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-success btn-sm"
              value="2008"
              onClick={this.onFilteredData}
            >
              2008
            </button>

            <button
              type="submit"
              className="btn btn-success btn-sm"
              value="2009"
              onClick={this.onFilteredData}
            >
              2009
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-success btn-sm"
              value="2010"
              onClick={this.onFilteredData}
            >
              2010
            </button>

            <button
              type="submit"
              className="btn btn-success btn-sm"
              value="2011"
              onClick={this.onFilteredData}
            >
              2011
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-success btn-sm"
              value="2012"
              onClick={this.onFilteredData}
            >
              2012
            </button>

            <button
              type="submit"
              className="btn btn-success btn-sm"
              value="2013"
              onClick={this.onFilteredData}
            >
              2013
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-success btn-sm"
              value="2014"
              onClick={this.onFilteredData}
            >
              2014
            </button>

            <button
              type="submit"
              className="btn btn-success btn-sm"
              value="2015"
              onClick={this.onFilteredData}
            >
              2015
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-success btn-sm"
              value="2016"
              onClick={this.onFilteredData}
            >
              2016
            </button>

            <button
              type="submit"
              className="btn btn-success btn-sm"
              value="2017"
              onClick={this.onFilteredData}
            >
              2017
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-success btn-sm"
              value="2018"
              onClick={this.onFilteredData}
            >
              2018
            </button>

            <button
              type="submit"
              className="btn btn-success btn-sm"
              value="2019"
              onClick={this.onFilteredData}
            >
              2019
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-success btn-sm"
              value="2020"
              onClick={this.onFilteredData}
            >
              2020
            </button>
          </div>

          <div className="text-filter">
            <p>Successful Launch</p>
            <hr />
          </div>

          <div>
            <button
              type="submit"
              className="btn btn-success btn-sm"
              value="true"
              onClick={(e) => this.onFilteredData(e, "success")}
            >
              True
            </button>
            <button
              type="submit"
              className="btn btn-success btn-sm"
              value="false"
              onClick={(e) => this.onFilteredData(e, "success")}
            >
              False
            </button>
          </div>
          <div className="text-filter">
            <p>Successful Landing</p>
            <hr />
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-success btn-sm"
              value="true"
              onClick={(e) => this.onFilteredData(e, "land")}
            >
              True
            </button>
            <button
              type="submit"
              className="btn btn-success btn-sm"
              value="false"
              onClick={(e) => this.onFilteredData(e, "land")}
            >
              False
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
