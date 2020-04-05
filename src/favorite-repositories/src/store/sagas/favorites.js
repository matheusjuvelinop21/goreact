import api from "../../services/api";
import { call, put } from "redux-saga/effects";
import { Creators as FavoriteActions } from "../ducks/favorites";

export default function* addFavorite(action) {
  try {
    const { data } = yield call(api.get, `repos/${action.payload.repository}`);

    yield put(
      FavoriteActions.addFavoriteSuccess({
        id: data.id,
        name: data.full_name,
        description: data.description,
        url: data.html_url,
      })
    );
  } catch (error) {
    yield put(
      FavoriteActions.addFavoriteFailure("Error ao adicionar repositório")
    );
  }
}
