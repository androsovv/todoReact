
import "./Header.css";

function Header({value, setValue, toDoList}) {
   
   function addTask(e) {
      if (value) {
         e.preventDefault();
         setValue(toDoList.push(value));
      }
   }

   return (
      <div className="header">
         <h2>TODO LIST</h2>
         <form action="submit">
           <div className="newTask">

               <input 
                  type="text" 
                  placeholder="Добавить важных дел"
                  value={value}
                  onChange={(event) => setValue(event.target.value)}/>
               <button onClick={addTask}>+</button>
           </div> 
         </form>
      </div>
   );
}

export default Header;