import "./TrackList.css";
import React from "react";
import Track from "../Track/Track.js";

class TrackList extends React.Component {
  render() {
    return (
      <div class="TrackList">
        {Array.isArray(this.props.tracks)
          ? this.props.tracks.map((track) => (
              <Track
                key={track.id}
                track={track}
                onAdd={this.props.onAdd}
                onRemove={this.props.onRemove}
                isRemoval={this.props.isRemoval}
              />
            ))
          : null}
      </div>
    );
  }
}

export default TrackList;
