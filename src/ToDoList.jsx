import React from "react"

function ToDoList() {
    
    const [tasks , setTasks] = React.useState(["test" , "eat mango"]) ;
    const [newTask , setNewTask] = React.useState("") ;

    function handleInputChange(event)
    {
        setNewTask(event.target.value); // to get the input value from the input field.
    }

    function addTask ()
    {
        if (newTask.trim() !== "") // to prevent adding empty tasks.
        { 
        setTasks(t => [...t , newTask]) ;
        setNewTask("") ; // to clear the input field after adding the task to the list.
        }
    }

    function removeTask (index)
    {
        const updatedTasks = tasks.filter((task , i) => i!==index) ; // to remove the task from the list.
        setTasks(updatedTasks) ; // to update the list.
    }

    function moveTaskUp(index)
    {
        if (index >0 )
        {
            const updatedTasks = [...tasks] ; // to make a copy of the list.
            [updatedTasks[index] , updatedTasks[index - 1]] = [updatedTasks[index - 1] , updatedTasks[index]] ; // to swap the task with the previous one.
            setTasks(updatedTasks) ; // to update the list.
        }
    }

    function moveTaskDown(index)
    {
        if (index < tasks.length - 1)
            {
                const updatedTasks = [...tasks] ; // to make a copy of the list.
                [updatedTasks[index] , updatedTasks[index + 1]] = [updatedTasks[index + 1] , updatedTasks[index]] ; // to swap the task with the next one.
                setTasks(updatedTasks) ; // to update the list.
            }
    }

    return(<>

        <div className="to-do-list">
            <h1>To Do List</h1>
            <input type="text" placeholder="Add a new task" onChange={handleInputChange} value={newTask}/>
            <button onClick={addTask} className="addButton">Add</button>
            <ol className="tasks-list">
                {tasks.map((task , index) => 
                    <li key={index} >
                        <span className="text">{task}</span>
                        <button onClick={()=>removeTask(index)} className="deleteButton">Delete</button>
                        <button onClick={()=>moveTaskUp(index)} className="moveButton">up</button>
                        <button onClick={()=>moveTaskDown(index)} className="moveButton">down</button>
                    </li>
                )}
            </ol>
        </div>

    </>)
}


export default ToDoList 