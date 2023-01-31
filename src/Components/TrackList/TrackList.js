import "./TrackList.css";
import React from "react";
import Track from "../Track/Track.js";

class TrackList extends React.Component {
  render() {
    return (
      <div class="TrackList">
        {/*<!-- You will add a map method that renders a set of Track components  -->*/}
        {this.props.tracks?.map((track) => (
          <Track
            key={track.id}
            track={track}
            onAdd={this.props.onAdd}
            onRemove={this.props.onRemove}
            isRemoval={this.props.isRemoval}
          />
        ))}
      </div>
    );
  }
}

export default TrackList;