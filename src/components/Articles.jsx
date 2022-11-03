import { useEffect } from "react"
import { useState } from "react"
import ArticleCard from "./ArticleCard"
import ApiRequests from "../Utils/ApiRequests"

const Articles = () => {
    const [articles, setArticles] = useState("")
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        ApiRequests.getArticles()
        .then((articles ) => {
            setArticles(articles)
            setLoading(false);
        })
    }, [])

    if (loading) return <h5>  Loading...</h5>
    
    return  <ul className = "articles"> 
        
            {articles.map((article) => {
                return <ArticleCard article={article} key = {article.article_id} /> 
            })}
            
        </ul>
        

}


export default Articles
