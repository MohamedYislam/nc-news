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
    getArticleById(article_id){
        return axios.get(`https://news-app-msy.herokuapp.com/api/articles/${article_id}`)
        .then(({ data : { article }}) => {
            return article
        })
    },
    voteArticle(id, num){
        return axios.patch(`https://news-app-msy.herokuapp.com/api/articles/${id}`,
        {inc_votes: num})
        .then(({ data : article}) => {
            return article
        })
    }
}

export default ApiRequests;