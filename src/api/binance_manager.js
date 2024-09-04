const URL = "url";
const URL_2 = "http://localhost:3004/in/inproducts";

class BinanceManager {
  constructor(axios) {
    this.axios = axios;
  }
  getBinanceCoins() {
    return new Promise((resolve, reject) => {
      this.axios
        .get(URL)
        .then((data) => resolve(data.data))
        .catch((err) => reject(err));
    });
  }

  saveCoin(data) {
    return new Promise((resolve, reject) => {
      let url = URL_2;
      this.axios
        .post(url, data)
        .then((data) => resolve(data.data))
        .catch((err) => reject(err));
    });
  }

  updateCoin(data) {
    return new Promise((resolve, reject) => {
      let url = URL + data._id;
      this.axios
        .put(url, data)
        .then((data) => resolve(data.data))
        .catch((err) => reject(err));
    });
  }

  exitFromCoin(data) {
    return new Promise((resolve, reject) => {
      let url = URL + data._id + "/exit";
      this.axios
        .post(url, {})
        .then((data) => resolve(data.data))
        .catch((err) => reject(err));
    });
  }

  enterIntoCoin(data) {
    return new Promise((resolve, reject) => {
      let url = URL + data._id + "/enter";
      this.axios
        .post(url, {})
        .then((data) => resolve(data.data))
        .catch((err) => reject(err));
    });
  }
}

export default BinanceManager;
