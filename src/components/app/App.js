
import './App.css';
import Header from '../Header/Header';
import TaskList from '../TaskList/TaskList';
import { useState } from "react";

function App() {
  const [value, setValue] = useState('');
  const [toDoList, setToDoList] = useState(['first task', 'second task']);
 


  return (
    <div className="App">
     <Header value={value} toDoList={toDoList} setValue={setValue} setToDoList={setToDoList}/>
     <TaskList toDoList={toDoList}/>
    </div>
  );
}



export default App;
