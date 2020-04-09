import { all, takeLatest } from "redux-saga/effects";
import { Types as PlaylistsTypes } from "../ducks/playlists";
import { getPlaylists } from "./playlists";
import { Types as PlaylistTypes } from "../ducks/playlist";
import { getPlaylist } from "./playlist";

export default function* rootSaga() {
  yield all([
    takeLatest(PlaylistsTypes.GET_REQUEST, getPlaylists),
    takeLatest(PlaylistTypes.GET_REQUEST, getPlaylist),
  ]);
}
