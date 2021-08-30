import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'

const App = () => {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState(
        [
            {
                id:  1,
                text: 'Doctors app',
                day: 'Feb 5 ',
                reminder: true,
            },
            {
                id:  2,
                text: 'Metting app',
                day: 'JAn 5 ',
                reminder: true,
            },
            {
                id:  3,
                text: 'Food app',
                day: 'Dec 5 ',
                reminder: false
            }
        ]
    )

    //add tasks
    const addTask = (task) => {

        const id = Math.floor(Math.random() * 10000)+1
        const newTask = {id, ...task}
        setTasks([...tasks, newTask])
    }

    //delete task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }


    //toggle reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map((task)=>
            task.id === id ? {...task, reminder: !task.reminder} : task
        ))
    }


  return (
    <div className="container">
      <Header
          onAdd={()=> setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
      />
        {showAddTask &&
            <AddTask onAdd={addTask} />

        }
        { tasks.length > 0 ?
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
         : " There are no more tasks"
        }
    </div>
  )
}

export default App;
