const ArticleCard = (props) => {
    console.log(props, "<<<props")
    const {article} = props
    return <>
    <h4 className = "articleTitle"> {article.title} </h4>
    <h5 className = "articleAuthor"> By {article.author} </h5>
    <h5 className = "articleVotes" >{article.votes}</h5>
    </>
    
}

export default ArticleCard