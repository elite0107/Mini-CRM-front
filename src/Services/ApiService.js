import Axios from 'axios';

class ApiService {
  constructor() {}

  /**
   * Send Api Request
   */
  postRequest(url, payload) {
    try {
      Axios
        .post(url, payload)
        .then(result => {
          return result;
        });
    } catch(exception) {
      console.log("Exception: ", exception);
    }
  }
}

export default new ApiService();