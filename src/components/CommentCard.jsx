import HelperFunctions from "../Utils/HelperFunctions"
import API from "../Utils/API"
import { UserContext } from '../Context/userContext';
import { useContext, useState } from "react";

const CommentCard = (props) => {
    const [button, setButton] = useState(false)
    const { username } = useContext(UserContext);
    const { comment : { author, body, created_at, comment_id, votes }} = props

    const handleDelete = () => {
        API.removeComment(comment_id)
            .then(() => {
                setButton(false)
                window.location.reload(false);
            })
    }
    
    return <div className = "commentCardClass"> 
                <p>  {body} </p>
                <h4> {votes} </h4>
                <h5> {author} on {HelperFunctions.generateDate(created_at)}</h5>
                {author === username ? (
                    <button onClick = {handleDelete} disabled={button}>Delete Comment</button>
                ) :  (
                    <></>
                )}
        </div>
        
}

export default CommentCard
