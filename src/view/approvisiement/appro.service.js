import API from '../api';
export function ajoutcommande(data) {
  return API.post('addcommande', data);
}
