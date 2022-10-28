import axios from "axios";
class HttpService {
    BaseUrl = 'http://localhost:3000/api/v1/';

    PostService(url, data, headers) {
        console.log(data);
        return axios.post(this.BaseUrl + url, data, headers)

    }
    Put(url, data, headers) {
        console.log(data);
        return axios.put(this.BaseUrl + url, data, headers)
    }
    Get(url, headers) {
        return axios.get(this.BaseUrl + url, headers)
    }
    Delete(url, data, headers) {
        console.log(data);
        return axios.delete(this.BaseUrl + url, data, headers)
    }
}

export default new HttpService()