const citiesReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }
  switch(action.type){
    case 'LOAD_CITIES':
      return action.payload;
    default:
      return state;
  }
}

const activeCityReducer = (state, action) => {
  if (state === undefined) {
    return {};
  }

  switch(action.type){
    case 'CHANGE_ACTIVE_CITY':
      return action.payload;
    default:
      return state;
  }
}

export { citiesReducer, activeCityReducer };
