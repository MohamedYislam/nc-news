import axios from "axios";


const api = axios.create({ baseURL: 'https://news-app-msy.herokuapp.com/api' })
 
const ApiRequests = {
    getArticles() {
        return api.get(`/articles`)
        .then(({ data: { articles }}) => {
            return articles
        })
    },
    getTopics(){
        return api.get(`/topics`)
        .then(({data : { topics }}) => {
            return topics
        });
    },
    getArticlesByTopic(topic){
        return api.get(`/articles?topic=${topic}`)
        .then(({data : { articles }})=> {
            return articles
        })
    },
    getArticleById(id){
        return api.get(`https://news-app-msy.herokuapp.com/api/articles/${id}`)
        .then(({ data : { article }}) => {
            return article
        })
    }
}

export default ApiRequests;