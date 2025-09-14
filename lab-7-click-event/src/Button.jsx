
function Button(){
    let count = 0;
    const handleClick = (e) => e.target.textContent = "Ouch !"; // xu kien va thay doi text cua Button
    // () => function : prevent call / ngăn cản hàm chạy khi gọi
    return (
        <button onDoubleClick={(e) => handleClick(e)} className="btn-event">Click me 😂</button>
        // <button onClick={(e) => handleClick(e)} className="btn-event">Click me 😂</button>
    )
}

export default Button 