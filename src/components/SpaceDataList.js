import React from "react";

import Card from "./Card";

import "../Styles/style.css";

const SpaceDataList = (props) => {
  const data = props.images.map((image) => {
  
    return (
      <div key={image.flight_number} className="image-size">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-2">
                <div className="card-deck">
                  <div>
                    <div className="card-img-top">
                      <Card image={image} />
                    </div>

                    <div>
                      <strong>
                        {image.mission_name.substring(0, 10)} #
                        {image.flight_number}
                      </strong>
                    </div>
                    <div>
                      <strong>Launch Year: </strong> {image.launch_year}
                    </div>
                    <div>
                      <strong>Successful Launch: </strong>
                      {image.launch_success.toString()}
                    </div>
                    <div>
                      <strong>
                        Successful <br /> Landing: 
                       </strong>
                      {image.rocket.first_stage.cores[0].land_success != null?image.rocket.first_stage.cores[0].land_success.toString(): ''}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div>{data}</div>
    </div>
  );
};

export default SpaceDataList;
