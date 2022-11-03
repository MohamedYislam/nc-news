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
    
    const createdAt = moment.utc(article.created_at).format('DD/MM/YYYY')

    return  <>
        <h2 className = "articleTitle"> {article.title} </h2>
        <h6> Posted by {article.author} on {createdAt}</h6>
        {article.topic === 'coding' ? (
            <img className="imagesOfTopic" src={imageCoding} alt="coding" />
        ) : article.topic === 'cooking' ? (
            <img className="imagesOfTopic" src={imageCooking} alt="cooking" />
        ) : (
            <img className="imagesOfTopic" src={imageFootball} alt="football" />
        )}

        <h4 className = "articleComment"> {article.body}</h4>
        <h4 className = "articleVotes" >{article.votes}</h4>
     </>
    

}

export default ArticlePage