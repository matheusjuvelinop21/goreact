import React, { Component } from "react";

import { PropTypes } from "prop-types";

import { bindActionCreators } from "redux";

import { connect } from "react-redux";

import { Creators as PlaylistActions } from "../../store/ducks/playlist";
import { Creators as PlayerActions } from "../../store/ducks/player";

import Loading from "../../components/loading";

import { Container, Header, SongLists, SongItem } from "./styles";

import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";

class Playlist extends Component {
  static propTypes = {
    getPlaylistRequest: PropTypes.func.isRequired,
    loadSong: PropTypes.func.isRequired,
    playlist: PropTypes.shape({
      data: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        description: PropTypes.string,
        songs: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            author: PropTypes.string,
            album: PropTypes.string,
          })
        ),
      }),
      loading: PropTypes.bool,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
    currentSong: PropTypes.shape({
      id: PropTypes.number,
    }),
  };

  state = {
    selectedSong: null,
  };

  componentDidMount() {
    this.loadPlaylist();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id)
      this.loadPlaylist();
  }

  loadPlaylist() {
    const { id } = this.props.match.params;

    this.props.getPlaylistRequest(id);
  }

  renderPlaylist = () => {
    const playlist = this.props.playlist.data;

    return (
      <Container>
        <Header>
          <img src={playlist.thumbnail} alt={playlist.title} />

          <div>
            <span>PLAYLIST</span>
            <h1>{playlist.title}</h1>
            {!!playlist.songs && <p>{playlist.songs.length} músicas</p>}

            <button type="button">PLAY</button>
          </div>
        </Header>

        <SongLists cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th />
              <th>Título</th>
              <th>Artista</th>
              <th>Álbum</th>
              <th>
                <img src={ClockIcon} alt="duração" />
              </th>
            </tr>
          </thead>
          <tbody>
            {!playlist.songs ? (
              <tr>
                <td colSpan={5}>Nenhuma música cadastrada</td>
              </tr>
            ) : (
              playlist.songs.map((song) => (
                <SongItem
                  key={song.id}
                  onClick={() => this.setState({ selectedSong: song.id })}
                  onDoubleClick={() =>
                    this.props.loadSong(song, playlist.songs)
                  }
                  selected={this.state.selectedSong === song.id}
                  playing={
                    this.props.currentSong &&
                    this.props.currentSong.id === song.id
                  }
                >
                  <td>
                    <img src={PlusIcon} alt="adicionar" />
                  </td>
                  <td>{song.title}</td>
                  <td>{song.author}</td>
                  <td>{song.album}</td>
                  <td>3:26</td>
                </SongItem>
              ))
            )}
          </tbody>
        </SongLists>
      </Container>
    );
  };

  render = () =>
    this.props.playlist.loading ? (
      <Container loading="true">
        <Loading />
      </Container>
    ) : (
      this.renderPlaylist()
    );
}

export default connect(
  (state) => ({
    playlist: state.playlist,
    currentSong: state.player.currentSong,
  }),
  (dispatch) =>
    bindActionCreators({ ...PlaylistActions, ...PlayerActions }, dispatch)
)(Playlist);
