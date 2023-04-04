import httpCommon from "./httpCommon";

class CategoriesService {
  getCategories() {
    return httpCommon.get("/categories");
  }
  getCategory(id) {
    return httpCommon.get(`/categories/${id}`);
  }
  createCategory(data) {
    return httpCommon.post("/categories", data);
  }
  updateCategory(id, data) {
    return httpCommon.put(`/categories/${id}`, data);
  }
  deleteCategory(id) {
    return httpCommon.delete(`/categories/${id}`);
  }
}
export default new CategoriesService();
