import { useState } from 'react';

import './styles.css';

import ListItem from '../../components/ListItem'
import NewTaskInput from '../../components/NewTaskInput'
import Header from '../../components/Header'
import occourence from '../../components/NewOccurrence'

function Home (){
    // const [tasks, setTasks] = useState([]);

    // function addNewTask(task){
    //     const itensCopy = Array.from(tasks);
    //     itensCopy.push({id: tasks.length, value: task});
    //     setTasks(itensCopy);
    // }

    // function updateTask({target}, index) {
    //     const itensCopy = Array.from(tasks);
    //     itensCopy.splice(index, 1, { id: index, value: target.value });
    //     setTasks(itensCopy);
    //   }
    
    //   function deleteTask(index) {
    //     const itensCopy = Array.from(tasks);
    //     itensCopy.splice(index, 1);
    //     setTasks(itensCopy);
    //   }

    return(
        <div className='App'>
            <Header />
            <occourence />
            {/* <div className="App-header">
                <NewTaskInput onSubmit={addNewTask} />
                {tasks.map(({id, value}, index) => (
                <ListItem
                    key={id}
                    value={value}
                    onChange={(event) => updateTask(event, index)}
                    onDelete={() => deleteTask(index)}
                />
                ))}
            </div>              */}         
        </div>
    )
}
 
export default Home;