import axios from "axios";


const api = axios.create({ baseURL: 'https://news-app-msy.herokuapp.com/api' })
 
const ApiRequests = {
    getArticles(sortBy='created_at', order='desc') {
        return api.get(`/articles?sortBy=${sortBy}&&order=${order}`)
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
        return api.get(`/articles/${article_id}`)
        .then(({ data : { article }}) => {
            return article
        })
    },
    voteArticle(article_id, num){
        return api.patch(`/articles/${article_id}`,
        {inc_votes: num})
        .then(({ data : article}) => {
            return article
        })
    },
    getComment(article_id){
        return api.get(`/articles/${article_id}/comments`)
        .then(({data : comments }) => {
            return comments
        })
    },
    postComment(article_id, username, comment){
        return api.post(`/articles/${article_id}/comments`,
        {username: username, body: comment})
    },
    removeComment(comment_id){
        return api.delete(`/comments/${comment_id}`)
    }
}

export default ApiRequests;