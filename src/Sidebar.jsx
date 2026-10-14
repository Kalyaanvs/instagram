import instagramText from './assets/instagram-text.jpg'
function Sidebar()
{
    return(
      <div className="m-3 position-fixed">  
        <div className="sidebar d-flex flex-column justify-content-between h-100">
            <div className="d-flex flex-column gap-2">
                <img className="logo-text pb-2" src={instagramText} alt="Instagram" />
                <div><i className="bi bi-house-door"></i>Home</div>
                <div><i className="bi bi-search"></i>Search</div>
                <div><i className="bi bi-compass"></i>Explore</div>
                <div><i className="bi bi-collection-play"></i>Reels</div>
                <div><i className="bi bi-chat-dots"></i>Messages</div>
                <div><i className="bi bi-heart"></i>Notification</div>
                <div><i className="bi bi-plus-square"></i>Create</div>
                <div><i className="bi bi-person-circle"></i>Profile</div>
            </div>
            <div className="position-fixed bottom-0 d-flex flex-column gap-2 mb-2">
                <div><i className="bi bi-threads"></i>Threads</div>
                <div><i className="bi bi-list"></i>More</div>
            </div>
        </div>
       </div>
    )

}
export default Sidebar