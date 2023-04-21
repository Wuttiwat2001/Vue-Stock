import router from "@/router";
import httpClient from "@/service/httpClient";
import { server } from "@/service/constants";
import * as productApi from "@/service/api_product.js"

const isLoggedIn = () => {
  let token = localStorage.getItem(server.TOKEN_KEY);
  return token != null;
};


const logoff = () => {
  localStorage.removeItem(server.TOKEN_KEY);
  router.push("/login");
};

const login = async values => {
  const result = await httpClient.post(server.LOGIN_URL, values);
  if (result.data.result === "ok") {
    localStorage.setItem(server.USERNAME, values.username);
    localStorage.setItem(server.TOKEN_KEY, result.data.token);
    router.push("/stock");
    return true;
  } else {
    return false;
  }
};

const register = async values => {
  let result = await httpClient.post(server.REGISTER_URL, values);
  if (result.data.result === "ok") {
    router.go(-1);
  } else {
    alert(JSON.stringify(result));
  }
};

export default {
  logoff,
  login,
  register,
  isLoggedIn,
  ...productApi
}
