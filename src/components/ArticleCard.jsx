import imageCoding from '../Images/topic/imageCoding.png'
import imageCooking from '../Images/topic/imageCooking.png'
import imageFootball from '../Images/topic/imageFootball.png'


const ArticleCard = (props) => {
    const {article} = props

    return <div className = "articleCardClass">

        <h4 className = "articleTitle"> {article.title} </h4>

        {article.topic === 'coding' ? (
            <img className="imagesOfTopic" src={imageCoding} alt="coding" />
        ) : article.topic === 'cooking' ? (
            <img className="imagesOfTopic" src={imageCooking} alt="cooking" />
        ) : (
            <img className="imagesOfTopic" src={imageFootball} alt="football" />
        )}
        <h5 className = "articleAuthor"> By {article.author} </h5>
        <h5 className = "articleVotes" >{article.votes}</h5>
    </div>
    
}

export default ArticleCard