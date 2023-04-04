import httpCommon from "./httpCommon";

class AuthService {
  login(data) {
    return httpCommon.post("/Auth/login", data);
  }

  register(data) {
    return httpCommon.post("/Auth/register", data);
  }
  getProfile(user_id) {
    console.log(user_id, "user_id");
    return httpCommon.get(`/users/${user_id}`);
  }

  logout() {
    return httpCommon.post("/Auth/web3/logout");
  }
  requestMessage(data) {
    return httpCommon.post("/Auth/web3/requestMessage", data);
  }
  verifyMessage(data) {
    return httpCommon.post("/Auth/web3/verifyMessage", data);
  }
  signup(data) {
    return httpCommon.post("/Auth/web3/signup", data);
  }

  getCurrentUser() {
    return httpCommon.get("/Auth/user");
  }
}
export default new AuthService();
