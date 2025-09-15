import React, {useState} from 'react'


function MyComponent(){
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood(){
        const foodE = document.getElementById("foodInput");
        setFoods(f => ([...f, foodE.value]));
        foodE.value = "";
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_ , i) => i !== index));
    }
    return (
        <div>
            <h2>List of Foods</h2>
            <ul>
                {foods.map((food, index) => <li key={index} 
                        onClick={()=>handleRemoveFood(index)}> {food} </li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name" />
            <button onClick={handleAddFood}>Add food</button>
        </div>
    )
}

export default MyComponent