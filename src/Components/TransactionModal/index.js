import React from "react";
import { Component } from "react";
import Test from "./indexTest";


class TransactionModal extends Component {
  render() {
    return (
      <Test open={ this.props.open && this.props.playlistInfo.id } >
              <h1>I´m feeling like... {this.props.mood}</h1>
              <div className="alignInY">
                <a
                  href={this.props.playlistInfo.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="playlistCover coverPlayButton"
                    src={this.props.playlistImg}
                    alt="playbutton"
                  />
                </a>
              </div>
              <div className="alignInY">
                <h5>Playlist name: {this.props.playlistInfo.name}</h5>
                <h6>Followers: {this.props.playlistInfo.followers.total}</h6>
                <h6>Tracks: {this.props.playlistInfo.tracks.total}</h6>
              </div>
              <ul>
                {this.props.playlistInfo.tracks.items.map((element, index) => (
                  <a
                    className="trackList"
                    href={element.track.external_urls.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li>
                      {index + 1} | {element.track.name}
                    </li>
                  </a>
                ))}
              </ul>
      </Test>
    );
  }
}

export default TransactionModal;
