import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as PlaylistActions } from "../ducks/playlist";
import { Creators as ErrorActions } from "../ducks/error";

export function* getPlaylist(action) {
  try {
    const response = yield call(
      api.get,
      `playlists/${action.payload.id}?_embed=songs`
    );

    yield put(PlaylistActions.getPlaylistSuccess(response.data));
  } catch (error) {
    yield put(
      ErrorActions.setError("Não foi possível obter os detalhes da playlist")
    );
  }
}
