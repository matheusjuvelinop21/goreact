import api from "../../services/api";
import { call, put, select } from "redux-saga/effects";
import { Creators as FavoriteActions } from "../ducks/favorites";

export default function* addFavorite(action) {
  try {
    const isDuplicated = yield select((state) =>
      state.favorites.data.find(
        (favorite) => favorite.name === action.payload.repository
      )
    );

    if (isDuplicated)
      return yield put(
        FavoriteActions.addFavoriteFailure("Repositório duplicado")
      );

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
    console.error(error);
    yield put(
      FavoriteActions.addFavoriteFailure("Error ao adicionar repositório")
    );
  }
}
