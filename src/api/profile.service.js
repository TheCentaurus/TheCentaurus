import http from "./httpCommon";

class ProfileService {
  updateProfile(data) {
    return http.put(`/users/${data.id}`, data);
  }

  getProfile(id) {
    return http.get(`/users/${id}`);
  }
}
export default new ProfileService();
