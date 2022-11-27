import HelperFunctions from "../Utils/HelperFunctions"

const CommentCard = (props) => {

    const { comment : {author, body, created_at, votes }} = props

    return <div className = "commentCardClass"> 
            <p>  {body} </p>
            <h4> {votes} </h4>
            <h5> {author} on {HelperFunctions.generateDate(created_at)}</h5>
        </div>
        
}

export default CommentCard