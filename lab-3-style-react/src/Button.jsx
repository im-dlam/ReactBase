// import styles from './Button.module.css'

// type 1
// function Button(){

//     return (
//         <button className={styles.button}>Click me</button>
//     );
// }



// type 2

function Button(){
    const styles = {
        backgroundColor: "hsla(231, 100%, 50%, 0.795)",
        padding:"10px 30px",
        color:"white",
        borderRadius: "10px",
        border: "none",
        cursor: "pointer"
    }
    return (
        <button style={styles}>Click me</button>
    );
}
export default Button