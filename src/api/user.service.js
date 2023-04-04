import httpCommon from "./httpCommon";

class User {
  getUser(id) {
    return httpCommon.get(`/users/${id}`);
  }
  followUser(id) {
    return httpCommon.post(`/users/follow/${id}`);
  }
  unfollowUser(id) {
    return httpCommon.post(`/users/unfollow/${id}`);
  }
  likeUser(id) {
    return httpCommon.post(`/users/like/${id}`);
  }
  deleteUser(id) {
    return httpCommon.delete(`/users/${id}`);
  }
  createUser(data) {
    return httpCommon.post(`/users`, data);
  }
  updateUser(id, data) {
    return httpCommon.put(`/users/${id}`, data);
  }
}
export default new User();
