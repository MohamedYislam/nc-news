import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import API from "../Utils/API"
import ArticleCard from "./ArticleCard"

const Topics = () => {
    const { topic } = useParams();
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState([true])
    const [error, setError] = useState(false)

    useEffect(() => {
        API.getArticlesByTopic(topic)
            .then((filteredArticles) => {
                setArticles(filteredArticles)
                setLoading(false)
            })
            .catch((res) => {
                setLoading(false)
                setError(true)
            })
    }, [topic])

    if (loading) return <h5> Loading... </h5>
    if (error) return <h2 className="errorClass"> Invalid Topic </h2>

    return  <ul className = "articles"> 
        {articles.map((article) => {
            return <ArticleCard article={article} />
        })}
    
    </ul>

}

export default Topics

