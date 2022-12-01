import HelperFunctions from "../Utils/HelperFunctions"
import ApiRequests from "../Utils/ApiRequests"
import { UserContext } from '../Context/userContext';
import { useContext } from "react";

const CommentCard = (props) => {
    const { username } = useContext(UserContext);
    const { comment : { author, body, created_at, comment_id, votes }} = props

    const handleDelete = () => {
        console.log(comment_id, "<<<comment_id")
        ApiRequests.removeComment(comment_id)
            .then(() => {
                window.location.reload(false);
            })
    }

    return <div className = "commentCardClass"> 
                <p>  {body} </p>
                <h4> {votes} </h4>
                <h5> {author} on {HelperFunctions.generateDate(created_at)}</h5>
                {author === username ? (
                    <button onClick = {handleDelete}>Delete Comment</button>
                ) :  (
                    <></>
                )}
        </div>
        
}

export default CommentCard
