import {useState , useEffect} from 'react'
function Post()
{
        const [Post,SetPost] = useState([])

        useEffect(()=>
        {
            fetch('http://localhost:3000/posts')
            .then((data)=> {return data.json();})
            .then ((data)=>{SetPost(data);console.log(data);})
            .catch(err=>console.log(err))
            
        },[]) 

    return(
        <div className='d-flex justify-content-center'>
            {Post.length > 0 ?(
                <div>
                    {Post.map((post)=>(
                        <div className='my-3' key={post.id}>
                            
                            <div className='d-flex'>
                                <img className="db rounded-circle" src={post.user.profile_pic} alt="" />
                                <h6>{post.user.username}</h6>
                            </div>
                            <img className='post-image' src={post.image} alt="" />
                            <div>
                                <i className="bi bi-heart"></i>
                                <i className="bi bi-chat"></i>
                                <i className="bi bi-send"></i>
                            </div>
                            <div>
                                <b>{post.likes}Likes</b>
                                <p>{post.caption}</p>
                            </div>    
                        </div>
                    ))}
                </div>
           ):(<div>loading...</div>)
            }
        </div>
    )
}
export default Post