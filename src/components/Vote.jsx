import { useEffect, useState } from "react"
import ApiRequests from "../Utils/ApiRequests"

const Vote = (props) => {
    console.log(props, "<<<props")
    const { setArticle } = props
    const [voteChange, setVoteChange] = useState(0)
    const handleVoteChange = (num) => {

        ApiRequests.voteArticle(34,num).then(((article) => {
            // setArticle(article)
            return 5
        }))
    }
    return <>
        <button type="button"
        disabled = {false}
        onClick = {handleVoteChange(1)}
        >like</button>
        <button type="button">dislike</button>

    </>
}

export default Vote