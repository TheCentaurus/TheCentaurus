import httpCommon from "./httpCommon";

class BlockchainsService {
  getBlockchains() {
    return httpCommon.get("/blockchains");
  }
  getBlockchain(id) {
    return httpCommon.get(`/blockchains/${id}`);
  }
  createBlockchain(data) {
    return httpCommon.post("/blockchains", data);
  }
  updateBlockchain(id, data) {
    return httpCommon.put(`/blockchains/${id}`, data);
  }
  deleteBlockchain(id) {
    return httpCommon.delete(`/blockchains/${id}`);
  }
}
export default new BlockchainsService();
