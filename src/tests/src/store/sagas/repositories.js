import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as RepositoriesActions } from "../ducks/repositories";

export function* getRepositories() {
  try {
    const response = yield call(api.get, "users/matheusjuvelinop21/repos");
    yield put(RepositoriesActions.success(response.data));
  } catch (error) {
    yield put(RepositoriesActions.failure());
  }
}
