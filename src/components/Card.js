import React from "react";

class Card extends React.Component {
  render() {
    const { mission_name, links } = this.props.image;
    return (
      <div>
        <img alt={mission_name} src={links.mission_patch_small} />
      </div>
    );
  }
}

export default Card;
