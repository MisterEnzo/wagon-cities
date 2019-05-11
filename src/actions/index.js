import cities from '../api/cities';

export function loadCities() {
  return {
    type: 'LOAD_CITIES',
    payload: cities
  }
};

export function changeActiveCity(city) {
  return {
    type: 'CHANGE_ACTIVE_CITY',
    payload: city
  }
};
