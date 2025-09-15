import React, {useState, useEffect} from "react";

function MyComponent(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("ADDED");

        return () => {
            window.removeEventListener("resize" , handleResize);
            console.log("REMOVED");
        }
    }, [])

    useEffect(() => {
        document.title = `Size: ${width}x${height}`;
    })
    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return (<>
        <p>Window Height: {height}px</p>
        <p>Window Width: {width}px</p>
    </>)
}

export default MyComponent