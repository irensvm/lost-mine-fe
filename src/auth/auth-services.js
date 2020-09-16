import axios from "axios";

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    });
    this.service = service;
  }

  signup = (email, password) => {
    return this.service
      .post("/signup", { email, password })
      .then((response) => response.data);
  };

  loggedin = () => {
    return this.service.get("/loggedin").then((response) => response.data);
  };

  login = (email, password) => {
    return this.service
      .post("/login", { email, password })
      .then((response) => response)
      .catch((err) => console.log(err));
  };

  logout = () => {
    return this.service.post("/logout", {}).then((response) => response.data);
  };
}

export default AuthService;
