import { useState } from "react"
import API from "../Utils/API"

const Vote = ({setVotes , article}) => {

    const [voteChange, setVoteChange] = useState(0);
    
    const handleVoteChange = (num) => {
        setVoteChange(currentVote => currentVote + num)
        setVotes((currVote) => currVote + num);
        API.voteArticle(article.article_id, 1).catch((err) => {
            setVoteChange(currentVote => currentVote - num)
            setVotes((currCount) => currCount - 1);
            return <> Error </>
        });
    };

  return (
    <>
      <button   className="articleVoteBtn"  onClick={() => handleVoteChange(1)} disabled={voteChange === 1}>
        Like
      </button>
      <button   className="articleVoteBtn"  onClick={() => handleVoteChange(-1)} disabled={voteChange === -1}>
        Dislike
      </button>
    </>
  );
};

export default Vote

