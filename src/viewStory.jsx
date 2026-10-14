import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
function ViewStory() {
    const { id, tot} = useParams()
    const [story, setStory] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:3000/suggession/${id}`)
            .then(data => data.json())
            .then(data => setStory(data))
            .catch(err => console.log(err))
    }, [id])
    if(id > tot || id < 101)
    {
        navigate('/');
    }
    return (
        <div>
            {story ? <div className="d-flex justify-content-center align-items-center">
                <Link to={`http://localhost:5173/suggession/${Number(id)-1}/${tot}`}><i class="bi bi-arrow-left-circle-fill"></i></Link>
                <img className="vh-100 " src={`/${story.profile_pic}`} alt={story.username} />
                <Link to={`http://localhost:5173/suggession/${Number(id)+1}/${tot}`}><i class="bi bi-arrow-right-circle-fill"></i></Link>
            </div> :
                <div>Loading...</div>}

        </div>
    )
}
export default ViewStory
