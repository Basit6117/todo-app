import React,{useState }from 'react'

function TodoList() {
    const [tasks,setTask] = useState(['Fajar', 'Zahar', 'Asar','Maghrib', 'Isha']);
    const [newTask, setNewTask] = useState("")
   function  handleInputChange(e){
setNewTask(e.target.value);
    }
 function   addTask(){
  if(newTask.trim() !== ""){
  setTask(t=>[...t,newTask]);
  setNewTask("");
    }}
    function deleteTask(index){
const updated = tasks.filter((_, i) => i !== index)
setTask(updated)
    }
    function moveTaskUp(index){
if(index > 0){
  const updatedTasks = [...tasks];
  [updatedTasks[index],updatedTasks[index-1]] =
  [updatedTasks[index-1], updatedTasks[index]];
  setTask(updatedTasks)
}
    }
    function  moveTaskDown(index){ 
      if(index < tasks.length - 1){
        const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index + 1]] =
        [updatedTasks[index + 1], updatedTasks[index]];
        setTask(updatedTasks)
      }
    }
  return (
    <div className='to-do-list'>
      <h2>To-Do List</h2>
      <input
      type='text'
      placeholder='Enter a Task...'
      onChange={handleInputChange}
      />
      <button
      className='add-btn'
      onClick={addTask}
      >Add Tasks</button>
      <ol>
        {tasks.map((task,index) =>
        <li key={index}>
        <span className='text'>{task}</span>
        <button 
        className='delete-btn'
        onClick={()=> deleteTask(index)}
        >Delete</button>
         <button 
        className='up-btn'
        onClick={()=> moveTaskUp(index)}
        ><i className="fa-solid fa-arrow-up"></i>UP
</button>
         <button
        className='down-btn'
        onClick={()=> moveTaskDown(index)}
        ><i className="fa-solid fa-arrow-down"></i>Down</button>
        </li>
        )}
      </ol>
    </div>
  )
}

export default TodoList
