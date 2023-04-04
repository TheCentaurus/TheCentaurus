import httpCommon from "./httpCommon";

class StorageService {
  download(uri) {
    return httpCommon.get(`/storage/ipfs/download/${uri}`);
  }
  resolve(uri) {
    return httpCommon.get(`/storage/ipfs/resolve/${uri}`);
  }
  createStorageItem(data) {
    return httpCommon.post("/storage/ipfs/upload", data);
  }
  nftStorageUpload(data) {
    return httpCommon.post("/storage/nftstorage/upload", data);
  }
  nftStorageUploadSingle(data) {
    return httpCommon.post("/storage/nftstorage/upload/single", data);
  }
  updateStorageItem(id, data) {
    return httpCommon.put(`/storage/${id}`, data);
  }
  deleteStorageItem(id) {
    return httpCommon.delete(`/storage/${id}`);
  }
}
export default new StorageService();
