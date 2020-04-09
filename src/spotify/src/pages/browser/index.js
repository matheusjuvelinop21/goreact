import React, { Component } from "react";

import { PropTypes } from "prop-types";

import { bindActionCreators } from "redux";

import { connect } from "react-redux";

import { Creators as PlaylistsActions } from "../../store/ducks/playlists";

import { Container, Title, List, Playlist } from "./styles";

import Loading from "../../components/loading";

class Browse extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          thumbnail: PropTypes.string,
          description: PropTypes.string,
        })
      ),
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render = () => (
    <Container>
      <Title>Navegar {this.props.playlists.loading && <Loading />}</Title>

      <List>
        {this.props.playlists.data.map((playlist) => (
          <Playlist key={playlist.id} to={`/playlists/${playlist.id}`}>
            <img src={playlist.thumbnail} alt={playlist.title} />
            <strong>{playlist.title}</strong>
            <p>{playlist.description}</p>
          </Playlist>
        ))}
      </List>
    </Container>
  );
}

export default connect(
  (state) => ({ playlists: state.playlists }),
  (dispatch) => bindActionCreators(PlaylistsActions, dispatch)
)(Browse);
