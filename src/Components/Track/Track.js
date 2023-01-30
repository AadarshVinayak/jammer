import "./Track.css";
import React from "react";

class Track extends React.Component {
  render() {
    return (
      <div class="Track">
        <div class="Track-information">
          <h3>track name will go here</h3>
          <p>track artist will go here | track album will go here</p>
        </div>
        <button class="Track-action">{this.renderAction()}</button>
      </div>
    );
  }

  renderAction() {
    if (false) {
      return "-";
    } else {
      return "+";
    }
  }
}

export default Track;
