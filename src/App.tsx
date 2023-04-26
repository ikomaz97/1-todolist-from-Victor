import React from 'react';
import './App.css';
import Todolist, {TaskType} from "./Todolist";

function App() {
    const tasks: TaskType[] = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS/ES6/TS", isDone: true},
        {id: 3, title: "REACT", isDone: true},
    ]
    return (
        <div className="App">
            <Todolist
                tasks={tasks}
                title="What to learn"/>
        </div>
    );
}

export default App;
