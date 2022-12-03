import { useEffect } from "react"
import { useState } from "react"
import ArticleCard from "./ArticleCard"
import ApiRequests from "../Utils/ApiRequests"
import ArticleQuery from "./ArticleQuery"

const Articles = () => {
    const [articles, setArticles] = useState("")
    const [loading, setLoading] = useState(true);
    const [sortBy, setSortBy] = useState('created_at')
    const [order, setOrder] = useState('desc')

    useEffect(() => {
        ApiRequests.getArticles(sortBy, order)
        .then((articles) => {
            setArticles(articles)
            setLoading(false);
        })
    }, [sortBy, order])

    if (loading) return <h5>  Loading...</h5>
    
    return <>
            <ArticleQuery   order={order}   sortBy={sortBy} setOrder={setOrder} setSortBy={setSortBy} /> 
            <ul className = "articles"> 
                    {articles.map((article) => {
                        return <ArticleCard article={article} key = {article.article_id} /> 
                    })}   
            </ul>
    </>
    
        
}


export default Articles
