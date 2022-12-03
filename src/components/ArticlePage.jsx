import { useParams } from "react-router-dom"
import ApiRequests from "../Utils/ApiRequests";
import { useState, useEffect } from "react";
import HelperFunctions from "../Utils/HelperFunctions";
import Vote from './Vote';
import Comments from "./Comments";


const ArticlePage = () => {
    const  { article_id }  = useParams();
    const [article, setArticle] = useState([])
    const [loading, setLoading] = useState([true])
    const [votes, setVotes] = useState(article.votes)
    const [error, setError] = useState(false)

    useEffect(() => {
        ApiRequests.getArticleById(article_id).then((article) => {
            setArticle(article)
            setLoading(false)
            setVotes(article.votes)
        }).catch(() => {
            setLoading(false)
            setError(true)
        })
    }, [article_id])

    if(loading) return <h3>Loading...</h3>
    if (error) return <h2 className = "errorClass"> Invalid Article</h2>
    


    return  <>
        <h2 className = "articleTitle"> {article.title} </h2>
        <h6> Posted by {article.author} on {HelperFunctions.generateDate(article.created_at)}</h6>
        {HelperFunctions.generateImageByTopic(article.topic)}
        <h4 className = "articleComment"> {article.body}</h4>
        <h4> {votes}</h4>
        <Vote article={article} setVotes = {setVotes} />
        <Comments article={article} />
     </>
    

}

export default ArticlePage