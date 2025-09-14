import React, {useState} from 'react'

function MyComponent(){
    const [name, setName] = useState("Lamkhongbun");
    const [age, setAge]   = useState(0);
    const [isImployed, setIsImployed] = useState(false);
    const updateName = () => {
        setName("Lam");
    }
    const incrementAge = () => {
        setAge(age + 1)
    }
    const toggleImployedStatus = () => {
        setIsImployed(!isImployed);
    }
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Set Age</button>

            <p>Is imployed: {isImployed ? "Yes" : "No"}</p>
            <button onClick={toggleImployedStatus}>Toggle Status</button>
        </div>
    )
}

export default MyComponent