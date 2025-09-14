
function ProfilePicture(){
    const image = './src/assets/profile.jpg';
    const handleClick = (e) => e.target.style.display = "none";
    return (
        <img onClick={(e) => handleClick(e)} src={image} height={200}></img>
    )
}

export default ProfilePicture