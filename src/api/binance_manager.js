const URL = "localhost";
const URL_2 = "testurl";

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
}

export default BinanceManager;
