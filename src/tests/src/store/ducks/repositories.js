export const Types = {
  REQUEST: "todos/REQUEST",
  SUCCESS: "todos/SUCCESS",
  FAILURE: "todos/FAILURE",
};

const INITIAL_STATE = { data: [] };

export default function Todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export const Creators = {
  request: () => ({
    type: Types.REQUEST,
  }),
  success: (data) => ({
    type: Types.SUCCESS,
    payload: { data },
  }),
  failure: () => ({
    type: Types.FAILURE,
  }),
};
