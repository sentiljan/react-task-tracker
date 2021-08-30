import {FaTimes} from 'react-icons/fa'

const Task = ({ task, onDelete ,onToggle }) => {
    return(
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=> onToggle(task.id)}>
            <h5>
                {task.text} <FaTimes onClick={() => onDelete(task.id)} style={{color: "red"}} />
            </h5>
            <p>{task.day}</p>
        </div>
    )
}


export default Task