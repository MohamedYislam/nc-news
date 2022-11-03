import { useParams } from "react-router-dom"
import ApiRequests from "../Utils/ApiRequests";
import { useState, useEffect } from "react";
import imageCoding from '../Images/topic/imageCoding.png'
import imageCooking from '../Images/topic/imageCooking.png'
import imageFootball from '../Images/topic/imageFootball.png'
import moment from "moment/moment";


const ArticlePage = () => {
    const [article, setArticle] = useState([])
    const [loading, setLoading] = useState([true])
    const  { article_id }  = useParams();

    useEffect(() => {
        ApiRequests.getArticleById(article_id).then((article) => {
            setArticle(article)
            setLoading(false)
        })  
    }, [article_id])

    if(loading) return <h3>Loading...</h3>
    
    return  <>
        <h2 className = "articleTitle"> {article.title} </h2>
        <h6> Posted by {article.author} on {HelperFunctions.generateDate(article.created_at)}</h6>
        {HelperFunctions.generateImageByTopic(article.topic)}
        <h4 className = "articleComment"> {article.body}</h4>
        <h4 className = "articleVotes" >{article.votes}</h4>
        <Vote article={article} setArticle={setArticle}/>
     </>
    

}

export default ArticlePage