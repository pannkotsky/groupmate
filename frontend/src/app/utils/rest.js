import axios from "axios";


export function get(url, data = {}) {
  return axios.get(url, {params: data});
}

export function post(url, data) {
  return axios.post(url, data);
}

export function put(url, data) {
  return axios.put(url, data);
}

export function del(url, data) {
  return axios.delete(url, data);
}
