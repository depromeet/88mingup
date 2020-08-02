const loadingReducer = (
  state: { loading?: boolean } = {},
  action: { type: string },
) => {
  const { type } = action;

  const matches = /(.*)\/(REQUEST|SUCCESS|ERROR)/.exec(type);

  if (!matches) return state;

  const [, requestName, requestState] = matches;

  return {
    ...state,
    loading: requestState === 'REQUEST',
    [requestName]: requestState === 'REQUEST',
  };
};

export default loadingReducer;
