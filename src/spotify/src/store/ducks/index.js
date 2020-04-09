import { combineReducers } from "redux";

import error from "./error";
import playlists from "./playlists";
import playlist from "./playlist";
import player from "./player";

export default combineReducers({ error, playlists, playlist, player });
