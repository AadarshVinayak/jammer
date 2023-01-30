import "./TrackList.css";
import React from "react";
import Track from "../Track/Track.js";

class TrackList extends React.Component {
  render() {
    return (
      <div class="TrackList">
        {/*<!-- You will add a map method that renders a set of Track components  -->*/}
        <Track />
      </div>
    );
  }
}

export default TrackList;
