import React, {useState} from "react";

function ToDoList(){
    const [tasks, setTasks] = useState([]);

    function addTask(){
        const e = document.getElementById("taskId");
        const newTask = e.value;
        if (newTask.trim() == "") return ;
        setTasks(t => [...t, newTask]);
        e.value = "";
    }

    function deleteTask(index){
        setTasks(t => t.filter((_, idx) => idx !== index))
    }
    function moveTop(index){
        if(index <= 0) return null;
        const updatedTask = [...tasks];
        updatedTask.forEach((_, idx) => {
            if (idx == index) {
                [updatedTask[idx] , updatedTask[idx - 1]] = [updatedTask[idx - 1] , updatedTask[idx]]
            }
        })
        setTasks(updatedTask);
    }

    function moveBottom(index){
        if(index >= tasks.length) return null;
        const updatedTask = [...tasks];
        updatedTask.forEach((_, idx) => {
            if (idx - 1 == index ) {
                [updatedTask[idx - 1] , updatedTask[idx]] = [updatedTask[idx] , updatedTask[idx - 1]]
            }
        })
        setTasks(updatedTask);
    }
    return (
        <div className="container">
            <h2>To-Do-List</h2>
            <div>
                <input id="taskId" type="text" placeholder="Enter a task..." required/>
                <button className="addButton" onClick={addTask}>Add</button>
            </div>
            <ul>
                {
                    tasks.map((task, index) => <li>
                        <p key={index}>{task}</p>
                        <div className="button">
                            <button className="deleteButton" onClick={() => deleteTask(index)} >Delete</button>
                            <button onClick={() => moveTop(index)}>⬆️</button>
                            <button  onClick={() => moveBottom(index)}>⬇️</button>
                        </div>
                    </li>)
                }
            </ul>
        </div>
    );
}

export default ToDoList