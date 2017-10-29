import axios from "axios";
import _ from "underscore";


axios.defaults.headers.post["Content-Type"] = "application/json; charset=utf-8";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.baseURL = "/api/";
axios.defaults.withCredentials = true;
axios.defaults.transformRequest = [
    function(data) {
        if (_.isObject(data)) {
            return JSON.stringify(data);
        }
        return data;
    }
];


export function get(url, data = {}) {
  return axios.get(url, data);
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
