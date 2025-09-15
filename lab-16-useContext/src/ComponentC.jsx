import { useContext } from "react";
import { UsersContext } from "./ComponentA";
function ComponentC(){
    const user = useContext(UsersContext);
    return (
        <div className="box">
            <h1>ComponentC</h1>
            <h2>Hello {user} from to ComponentA</h2>
        </div>

    );
}

export default ComponentC