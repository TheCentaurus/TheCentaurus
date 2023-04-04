import httpCommon from "./httpCommon";

class NftService {
  getNfts() {
    return httpCommon.get("/nft/all");
  }
  getNft(id) {
    return httpCommon.get(`/nft/${id}`);
  }
  createNft(data) {
    return httpCommon.post("/nft/createNFTDrop", data);
  }
  createNFTCollection(data) {
    return httpCommon.post("/nft/createNFTCollection", data);
  }
  getNftByContractAddress(contractAddress) {
    return httpCommon.get(`/nft/contractAddress/${contractAddress}`);
  }
  getNFTByWalletAddress(walletAddress) {
    return httpCommon.get(`/nft/walletAddress/${walletAddress}`);
  }
  updateNft(id, data) {
    return httpCommon.put(`/nft/${id}`, data);
  }
  deleteNft(id) {
    return httpCommon.delete(`/nft/${id}`);
  }
}
export default new NftService();
