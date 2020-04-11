import { runSaga } from "redux-saga";

import MockAdapter from "axios-mock-adapter";

import api from "../../services/api";

import { getRepositories } from "../../store/sagas/repositories";

import { Creators as RepositoriesActions } from "../../store/ducks/repositories";

const apiMock = new MockAdapter(api);

describe("Repositories Saga", () => {
  it("should be able to fetch repositories", async () => {
    const dispatched = [];

    apiMock
      .onGet("users/matheusjuvelinop21/repos")
      .reply(200, ["repo 1", "repo 2"]);

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      getRepositories
    ).toPromise();

    expect(dispatched).toContainEqual(
      RepositoriesActions.success(["repo 1", "repo 2"])
    );
  });
});
