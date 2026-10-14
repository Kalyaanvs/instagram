import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Story() {
const navigate = useNavigate();
    const [Story, setStory] = useState([])

     let tot=100;
    useEffect(() => {

        fetch("http://localhost:3000/suggession")
            .then(data => data.json())
            .then(data => setStory(data))
            .catch(err => console.log(err))

    }, []);

    return (
        <div className="story d-flex mt-3 mb-3 ">
           <div className='d-none'>
            {tot+=Story.length}
            </div> 
            {Story.length > 0 ? (
                Story.map((story) => (
                    <div key={story.id} className="mx-2" onClick={()=>{navigate(`/suggession/${story.id}/${tot}`)}}>
                        <div className="gradient-border" >
                            <img src={story.profile_pic} alt="img" className="story-db  " />

                        </div>
                        <p className="text-truncate" style={{ width: "50px" }}>
                            {story.username}
                        </p>
                    </div>
                ))

            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}
export default Story