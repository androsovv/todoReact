import './TaskListItem.css';

function TaskListItem({value}) {
   return(
      <div className="taskListItem">
         <input type="checkbox"/>
         <div className="task">{value}</div>
         <button className='delete'>x</button>
      </div>
   )
}

export default TaskListItem;