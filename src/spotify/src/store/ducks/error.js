export const Types = {
  SET: "error/SET",
  HIDE: "error/HIDE",
};

const INITIAL_STATE = {
  message: null,
  visible: false,
};

export default function error(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET:
      return { ...state, visible: true, message: action.payload.message };

    case Types.HIDE:
      return { ...state, visible: false };

    default:
      return state;
  }
}

export const Creators = {
  setError: (message) => ({ type: Types.SET, payload: { message } }),
  hideError: () => ({ type: Types.HIDE }),
};