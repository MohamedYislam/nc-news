import { useEffect, useState } from "react"
import ApiRequests from "../Utils/ApiRequests"
import CommentCard from "./CommentCard"

const Comments = ({article : {article_id}}) => {
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        ApiRequests.getComment(article_id).then((commentArray) => {
            setComments(commentArray)
            setLoading(false)
        })
    }, [])

    if (loading) return <h5>  Loading...</h5>

    console.log(comments, "<<<comments")
    return <ul className ="Comments"> 
            {comments.map((comment) => {
                return <CommentCard comment={comment} key={comments.comment_id} />
            })}
        </ul>



                


}

export default Comments