import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import API from '../Utils/API'


const NavigateTopic = () => {

    const [topics, setTopics] = useState([])
    const [loading, setLoading] = useState([true])

    useEffect(() => {
        API.getTopics().then((topics) => {
            setTopics(topics);
            setLoading(false);
        })
    }, [])

    if(loading) return <h5> Loading.... </h5>


    return (
        <nav className="navigateTopic">
            {topics.map(({slug}) => {
              return (
                <Link className="navigationLink"   key={slug}    to={`/topics/${slug}`} > 
                    {slug.charAt(0).toUpperCase() + slug.slice(1)}
                </Link>
              );
            })}
        </nav>
      );
  
            
        

}

export default NavigateTopic