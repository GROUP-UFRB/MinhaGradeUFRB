//import api from "../services/api";
//import jwt from "jwt-decode";

import { NavigateFunction, useNavigate } from "react-router-dom";

class Auth {
  login = async (
    data: { email: string; password: string },
    navigate?: NavigateFunction
  ) => {
    try {
      //    const Response = await api.post("/", data);
      this.saveToken("faketoken");
      navigate && navigate("/");
    } catch (error) {
      return error;
    }
  };

  saveToken = (cvalue: string) => {
    const d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = "SLI-SF=" + cvalue + ";" + expires + ";path=/";
  };

  getToken = () => {
    let name = "SLI-SF=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };

  getHeaders = async (opitions: JSON) => ({
    headers: {
      Authorization: `Bearer ${await this.getToken()}`,
    },
    ...opitions,
  });

  logout = async (navigate?: NavigateFunction) => {
    document.cookie = "SLI-SF=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    console.log("n fun");

    navigate && navigate("/login");
    // history.push("/");
  };

  getUser = (token: string) => {
    try {
      //   const jwtToken = token ? token : this.getToken();
      //   return jwt(jwtToken.replace("Bearer", ""));
    } catch (error) {
      console.log(error);
    }
  };

  isAuthenticated = () => {
    const token = this.getToken();
    if (token !== "") {
      return true;
    }
    return false;
  };
}

export default new Auth();
