import './TaskListItem.css';


function TaskListItem({value, toDoList}) {

   const removeTask = (e) => {
      const position = toDoList.findIndex(item => item.key);
      toDoList.splice(position, 1);
      e.currentTarget.parentElement.remove();
      console.log(toDoList);
   }

   return(
      <div className="taskListItem">
         <input type="checkbox"/>
         <div className="task">{value}</div>
         <button className='delete' onClick={removeTask}>x</button>
      </div>
   )
}

export default TaskListItem;