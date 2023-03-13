import http from "./httpCommon";

class ProfileService {
  createProfile(data) {
    return http.post("/auth/register", data);
  }

  getProfile(walletAddress) {
    console.log(walletAddress, "user_id");
    return http.get(`/users/${walletAddress}`);
  }

  updateProfile(data) {
    return http.put(`/users/${data.user_id}`, data);
  }
}
export default new ProfileService();
