import HelperFunctions from '../Utils/HelperFunctions'
import { Link } from 'react-router-dom'



const ArticleCard = (props) => {
    const {article} = props

    return  <Link className="navigationLink"  to={`/articles/${article.article_id}`} > 
                <div className = "articleCardClass">
                    <h4 className = "articleTitle"> {article.title} </h4>
                    {HelperFunctions.generateImageByTopic(article.topic)}
                    <h5 className = "articleAuthor"> By {article.author} </h5>
                    <h5 className = "articleVotes" >{article.votes}</h5>
                </div>
            </Link>    
}

export default ArticleCard