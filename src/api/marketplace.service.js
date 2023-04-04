import http from "./httpCommon";

class MarketplaceService {
  buyoutListing(data) {
    return http.post("/marketplace/buyoutListing", data);
  }

  buyListing(data) {
    return http.post("/marketplace/buyListing", data);
  }
  makeOffer(data) {
    return http.post("/marketplace/makeOffer", data);
  }
  acceptOffer(data) {
    return http.post("/marketplace/acceptOffer", data);
  }
  createAuction(data) {
    return http.post("/marketplace/createAuction", data);
  }
  createDirectListing(data) {
    return http.post("/marketplace/createDirectListing", data);
  }
  cancelDirectListing(data) {
    return http.post("/marketplace/cancelDirectListing", data);
  }
  cancelAuction(data) {
    return http.post("/marketplace/cancelAuction", data);
  }
  updateListing(data) {
    return http.post("/marketplace/updateListing", data);
  }

  updateMarketplace(data) {
    return http.put(`/users/${data.user_id}`, data);
  }
  getActiveListings(contractAddress) {
    return http.get(`/marketplace/getActiveListings/${contractAddress}`);
  }
  getListings(contractAddress) {
    return http.get(`/marketplace/getListings/${contractAddress}`);
  }
  getListing(contractAddress, listingId) {
    return http.get(`/marketplace/getListing/${contractAddress}/${listingId}`);
  }
  getOffers(contractAddress, listingId) {
    return http.get(`/marketplace/getOffers/${contractAddress}/${listingId}`);
  }
}

export default new MarketplaceService();
