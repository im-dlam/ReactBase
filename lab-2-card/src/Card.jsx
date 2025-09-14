import profilePic from './assets/profile.jpg';
function Card(){
    return (
        <div className="card">
            <img className="card-img" src={profilePic} alt="profile picture" width={200} ></img>
            <h2 className="card-title">Lam</h2>
            <p className='card-text'>I learn React and Test</p>
        </div>
    );
}

export default Card