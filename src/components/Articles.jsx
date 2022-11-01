import { useEffect } from "react"
import { useState } from "react"
import ArticleCard from "./ArticleCard"
import ApiRequests from "../ApiRequests/ApiRequests"

const Articles = () => {
    const [articles, setArticles] = useState("")
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        ApiRequests.getArticles()
        .then(({data : {articles}}) => {
            setArticles(articles)
            setLoading(false);
        })
    }, [])

    if (loading) {
        return <h5>Articles are loading...</h5>
    }
    return  <ul className = "articles"> 
        
            {articles.map((article) => {
                return <ArticleCard article={article} key = {article.article_id} /> 
            })}
            
        </ul>
        

}


export default Articles
