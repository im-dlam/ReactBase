import { useState , createContext } from "react";
import ComponentB from "./ComponentB"

export const UsersContext = createContext();
function ComponentA(){
    const [user, setUser] = useState("Lamdev");
    return (
        <div className="box">
            <h1>ComponentA</h1>
            <h2>Hello {user}</h2> 
            {/* //Dùng Provider để không cần dùng props */}
            <UsersContext.Provider value={user}>
                <ComponentB user={user}/>
            </UsersContext.Provider>
        </div>

    );
}

export default ComponentA