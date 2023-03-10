import "./Track.css";
import React from "react";

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  render() {
    return (
      <div class="Track">
        <div class="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} | {this.props.track.album}
          </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }

  renderAction() {
    if (this.props.isRemoval) {
      return (
        <button class="Track-action" onClick={this.removeTrack}>
          -
        </button>
      );
    } else {
      return (
        <button class="Track-action" onClick={this.addTrack}>
          +
        </button>
      );
    }
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }
}

export default Track;
