import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ApiRequests from "../Utils/ApiRequests"
import ArticleCard from "./ArticleCard"

const Topics = () => {
    const { topic } = useParams();
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState([true])

    useEffect(() => {
        ApiRequests.getArticlesByTopic(topic)
            .then((filteredArticles) => {
                setArticles(filteredArticles)
                setLoading(false)
            })
    }, [topic])

    if (loading) return <h5> Loading... </h5>

    return  <ul className = "articles"> 
        {articles.map((article) => {
            return <ArticleCard article={article} />
        })}
    
    </ul>

}

export default Topics

