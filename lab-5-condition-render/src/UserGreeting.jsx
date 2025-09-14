

function UserGreeting(props){
    const welcomeMessage = <h2 className="welcome-message">Wellcome to website</h2>
    const loginMessage   = <h2 className="login-message">Please login to continue</h2>
    return (props.isLogged ?  welcomeMessage: loginMessage);  
}

export default UserGreeting