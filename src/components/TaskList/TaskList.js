import TaskListItem from '../TaskListItem/TaskListItem';
import './TaskList.css';




function TaskList({toDoList}) {
   
   const arr = toDoList.map((item, index) => 
         <TaskListItem value={item} key={index} toDoList={toDoList}/>
      )

   console.log(toDoList);
    
      
   return(
      <div className="taskList">
         {arr}
      </div>
   );
}

export default TaskList;