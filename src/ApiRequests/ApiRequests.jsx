import axios from "axios";

const ApiRequests = {
    getArticles() {
        return axios.get(`https://news-app-msy.herokuapp.com/api/articles`);
    }
}

export default ApiRequests;