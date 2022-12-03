import { useEffect, useState} from "react"
import API from "../Utils/API"
import CommentCard from "./CommentCard"
import CommentPost from "./CommentPost"

const Comments = ({article : {article_id}}) => {
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        API.getComment(article_id).then((commentArray) => {
            setComments(commentArray)
            setLoading(false)
        })
    }, [])

    if (loading) return <h5>  Loading...</h5>

    return <>
            <CommentPost article_id={article_id}/>
            <ul className ="Comments"> 
                {comments.map((comment) => {
                    return <CommentCard comment={comment} key={comments.comment_id} />
                })
            }   
        </ul>
    </>



                


}

export default Comments