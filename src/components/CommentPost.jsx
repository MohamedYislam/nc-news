import { useState, useContext } from "react"
import { UserContext } from "../Context/userContext";
import ApiRequests from "../Utils/ApiRequests";

const CommentPost = (props) => {
    const { username } = useContext(UserContext);
    const [commentText, setCommentText] = useState("")
    const [button, setButton] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true)
        ApiRequests.postComment(props.article_id, username, commentText).then(() => {
            setCommentText("")
            setButton(true)
            window.location.reload(false);
        })
    }
    if (loading) return <h5>  Loading...</h5>

    return <>
        <form onSubmit={handleSubmit}> 
            <input
            onChange={(e) => setCommentText(e.target.value)}
            placeholder = "Add a comment"
            className = "commentPost"
            required
            />
            <button type="submit"
            disabled = {button}
            className = "submitButton">Submit</button>
        </form>
    </>
}

export default CommentPost

