import axios from "axios";

const ApiRequests = {
    getArticles() {
        return axios.get(`https://news-app-msy.herokuapp.com/api/articles`)
        .then(({ data: { articles }}) => {
            return articles
        })
    },
    getTopics(){
        return axios.get(`https://news-app-msy.herokuapp.com/api/topics`)
            .then(({data : {topics}}) => {
                return topics
            });
    },
    getArticlesByTopic(topic){
        return axios.get(`https://news-app-msy.herokuapp.com/api/articles?topic=${topic}`)
        .then(({data : {articles}})=> {
            return articles
        })
    }
}

export default ApiRequests;