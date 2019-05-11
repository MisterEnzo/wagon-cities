import cities from '../api/cities';

export function loadCities() {
  return {
    type: 'LOAD_CITIES',
    payload: cities
  }
};
