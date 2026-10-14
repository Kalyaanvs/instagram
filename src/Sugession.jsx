import { useState, useEffect } from "react"
function Sugession() {
    const [profile, setProfile] = useState(null)
    const [suggesions, setSuggesions] = useState(null)

    useEffect(() => {
        fetch("http://localhost:3000/profile")
            .then((data) => data.json())
            .then((data) => setProfile(data))
            .catch(err => console.log(err))

        fetch("http://localhost:3000/suggession")
            .then((data) => data.json())
            .then((data) => setSuggesions(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div >
            <div className="suggession w-75 m-4 ">
                {profile ? (
                    <div className='d-flex'>
                        <img className="db rounded-circle" src={profile.profile_pic} alt="" />
                        <h6>{profile.username}</h6>
                        <small className='ms-auto text-primary'>switch</small>
                    </div>
                ) : (<div>loading...</div>)}
                <div className='d-flex '>
                    <p>Suggestion to all</p>
                    <b className="ms-auto">See All</b>
                </div>

                {suggesions && suggesions.length > 0 ? (
                    <div>
                        {suggesions.map((suggession) => (
                            <div key={suggession.id}>
                                <div className='d-flex '>
                                    <img className="db rounded-circle " src={suggession.profile_pic} alt="" />
                                    <h6>{suggession.username}</h6>
                                    <p className="text-primary ms-auto">Follow</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (<div>loading...</div>)}
            </div>

        </div>
    )
}
export default Sugession