export default function ({ $axios }, inject) {
  const api = $axios.create();

  api.setBaseURL('http://localhost:3001');
  inject('api', api);
}
