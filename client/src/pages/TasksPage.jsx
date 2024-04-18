import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";
import  imagencole  from "../assets/img/imagencole.png";

function TasksPage() {

    const { getTasks, tasks } = useTasks();

    useEffect(() => {
      getTasks();
    }, [ ]);
    if (tasks.length==0)  return (
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
                    
                    <h1 className="text-3xl font-bold my-2">You don't have any Tasks</h1>
                    <img src={imagencole} alt="" />
            </div>
        </div>
    )
    
    
    return(
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
            {
                tasks.map((task) => (
                    <TaskCard task={task}  key={task._id}/>
                ))
            }
        </div>
    )
    
}

export default TasksPage