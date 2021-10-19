import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .btn-modal {
    padding: 10px 20px;
    display: block;
    margin: 100px auto 0;
    font-size: 18px;
  }

  .modalPlaylist,
  .overlayLayer {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
  }

  .overlayLayer {
    background: rgba(49, 49, 49, 0.8);
  }
  .modalPlaylist-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #f1f1f1;
    padding: 14px 28px;
    border-radius: 3px;
    max-width: 600px;
    min-width: 200px;
    max-height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    color: rgb(23, 32, 42);
  }

  .close-modal {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
  }

  .playlistCover {
    width: 200px;
    height: 200px;
    border-radius: 10px;
  }

  .trackList {
    text-decoration: none;
    color: rgb(23, 32, 42);
  }

  .coverPlayButton {
    padding: 0;
    margin: 15px;
    display: flex;
    transition: 400ms;
    cursor: pointer;

    &:hover {
      transform: scale(1.025);
    }
  }
`;

class Test extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.open && (
          <div className="modalPlaylist">
            <div
              className="overlayLayer"
              onClick={this.props.togglePlaylist}
            ></div>
            <div className="modalPlaylist-content">
                {this.props.children}
            </div>
          </div>
        )}
      </Wrapper>
    );
  }
}

export default Test;
