import { useNavigate } from 'react-router-dom'


const ErrorHandling = () => {
  const navigate = useNavigate()
  return (
    <div className="error-page">
      <p>Invalid path</p>
      <button className="Home" onClick={() => navigate('/')}>
        Go Home
      </button>
    </div>
  )
}


export default ErrorHandling