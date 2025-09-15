import React, {useEffect , useState , useRef} from "react"
function MyComponent(){
    // let [count, setCount] = useState(0);
    const inputRef = useRef(null);
    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });
    function handleClick(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "green";
    }
    return (
        <div>
            <button onClick={handleClick}>Click me</button> 
            <input ref={inputRef} />
        </div>
    )
}

export default MyComponent