import { BASE_URL } from "../config";
import axios from "axios";
import { store } from "../redux/store";

const BasicApiSettings = () => {
  axios.interceptors.request.use(
    config => {
      console.log("REQUEST....", config);

      let url = convertUrl(config && config.url);
      let headers = config.headers || {};

      if (config.method === "POST") {
        let token = getUserToken();

        token = refreshTokenOnInvalid(token); //check token validity and refresh on invalid Token

        headers = {
          ...headers,
          Authentication: "Bearer " + token
        };
      }

      let newConfig = {
        ...config,
        url,
        headers
      };

      return newConfig;
    },
    err => {
      return Promise.reject(err);
    }
  );

  axios.interceptors.response.use(res => {
    console.log("RESPONSE...", res);
    return res.data;
  });

  // implement retrieving token from localStorage & fetching use details
};

const convertUrl = url => {
  if (url && url.length > 0) {
    if (url[0] === "/") {
      return BASE_URL + url;
    } else {
      return BASE_URL + url.substr(1, url.length);
    }
  }
};

const getUserToken = () => {
  let state = store.getState();
  let userToken = (state && state.user && state.user.token) || "";
  return userToken;
};

const refreshTokenOnInvalid = token => {
  return token;
};

export default BasicApiSettings;
