import httpCommon from "./httpCommon";

class AlchemyService {
  getUser(address) {
    return httpCommon.get(`/alchemy/user/${address}`);
  }
  getCollection(address) {
    return httpCommon.get(`/alchemy/collection/${address}`);
  }
  getMetadata(address, tokenId) {
    return httpCommon.get(`/alchemy/metadata/${address}/${tokenId}`);
  }
  getHolders(address) {
    return httpCommon.get(`/alchemy/holders/${address}`);
  }
  getHistory(address) {
    return httpCommon.get(`/alchemy/history/${address}/${tokenId}`);
  }
  getTransfers(address) {
    return httpCommon.get(`/alchemy/transfers/${address}`);
  }
}
export default new AlchemyService();
