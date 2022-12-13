const defaultState = {
  header: 0,
  footer: 0,
};

export const layoutReducer = (
  state = defaultState,
  action: { type: string, payload: any },
) => {
  switch (action.type) {
    default:
      return state;
  }
};
