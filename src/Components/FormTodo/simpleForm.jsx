import { useState } from "react"
import "./style.css"
import FormList from "../CardList/task";
import CardList from "../CardList/cardList";
import {Link} from "react-router-dom"

export default function SimpleForm(){
    const [task, setTask] = useState("")
    const [desc, setDesc] = useState("")
    const [taskList, setTaskList] = useState([])
    const [editId, setEditId] = useState(0)
    const [statusForm, setStatus] = useState("Not Completed")
    const [extract, setExtract] = useState("all")

    //console.log(task)
    function AddTask(){
        // Assign New Input Data Update into TaskList
        setTaskList([...taskList, { task, desc, statusForm, extract, index: Math.random()}]);
        setTask('')
        setDesc('')
        setStatus('Not Completed')
        setExtract('')
        if(editId){
            const editTask = taskList.find((i) => i.index == editId)
            console.log(editTask.index, editTask.task)
            const updateTask = taskList.map((t) =>
            // Here task is input box value attribute value
            t.index === editTask.index ? t = {index : t.index, task: task, desc: desc, statusForm: statusForm} 
                                        : {index: t.index, task: t.task, desc: t.desc, statusForm: t.statusForm})
            setTaskList(updateTask)
            setEditId(0)
            return
        }
    }
    console.log(taskList)
    console.log(extract)
    
    function handleEdit(index){
        const editTask = taskList.find((i) => i.index == index)
        console.log(editTask)
        setTask(editTask.task)
        setDesc(editTask.desc)
        setEditId(editTask.index)
    }

    function handleDelete(index){
        const newList = taskList.filter((t) => t.index != index)
        //newList.splice(index,1)
        //console.log("New", newList)
        setTaskList([...newList])
    }
    const com = taskList.filter((e) => e.statusForm=="Not Completed")
    console.log(com, "Hai")
    return(
        <>
            <div className="card">
                <div className="card-header text-center form-head">
                    My Todo
                </div>
                <div className="card-body mx-5">
                {editId === 0 ? 
                    <div className="row d-flex mx-5" style={{justifyContent: "center"}}>
                        <div className="mt-3 mb-3 col-lg-4 col-md-2">
                            <input type='text' className="form-control" placeholder="Todo Name" aria-label="Example text with button addon" aria-describedby="button-addon1"
                                value={task} onChange={(e) => setTask(e.target.value)}/>
                        </div>
                        <div className="mb-3 mt-3 col-lg-4 col-md-2">
                            <input type='text' className="form-control" placeholder="Todo Description" aria-label="Example text with button addon" aria-describedby="button-addon1"
                                value={desc} onChange={(e) => setDesc(e.target.value)}/>
                        </div>    
                        <div className="mb-3 mt-3 col-lg-4 col-md-2">
                            <button className="form-control btn btn-success"
                            style={{width: "200px"}} onClick={() => AddTask()}>
                                Add Todo
                            </button>
                        </div>
                    </div> 
                    : 
                    <div className="row d-flex mx-5" style={{justifyContent: "center"}}>
                        <div className="mt-3 mb-3 col-lg-3 col-md-2">
                            <input type='text' className="form-control" placeholder="Todo Name" aria-label="Example text with button addon" aria-describedby="button-addon1"
                                value={task} onChange={(e) => setTask(e.target.value)}/>
                        </div>
                        <div className="mb-3 mt-3 col-lg-3 col-md-2">
                            <input type='text' className="form-control" placeholder="Todo Description" aria-label="Example text with button addon" aria-describedby="button-addon1"
                                value={desc} onChange={(e) => setDesc(e.target.value)}/>
                        </div>
                        <div className="mb-3 mt-3 col-lg-3 col-md-2">                       
                            <select className="form-select" name="status" value={statusForm} onChange={(e) => setStatus(e.target.value)}>
                                <option value="Not Completed">Not Completed</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>                      
                        <div className="mb-3 mt-3 col-lg-3 col-md-2">
                            <button className="form-control btn btn-success"
                            style={{width: "200px"}} onClick={() => AddTask()}>
                                Add Todo
                            </button>
                        </div>
                    </div>
                    }

                    <div className="row d-flex mt-4" style={{fontWeight : "bold"}}>
                        <div className="col-lg-6" style={{textAlign: "start"}}>My Todos</div>
                        <div className="col-lg-6" style={{textAlign: "end"}}>
                            <label for="form-control" style={{marginRight : "18px"}}>Status Filter</label>
                        {/* <Link to="/card">
                                   <a> All</a>
                                </Link><select 
                         name="" id="" aria-label="Default select example" style={{fontWeight: "700", backgroundColor: "#ff4d4d"}}>
                            
                                <Link to="/card">
                                   <a> <option value="all">All</option></a>
                                </Link>
                            <option value="Completed">Completed</option>
                            <option value="Not Completed">Not Completed</option>
                        </select> */}
                            {/* <button type="button" class="btn btn-primary dropdown-toggle" 
                            style={{width: "110px"}} data-bs-toggle="dropdown">
                                Action
                            </button>    
                            <ul class="dropdown-menu dropdown-menu-end" style={{fontWeight: "700", backgroundColor: "#ff4d4d"}}>
                                <li>
                                    <Link to="/card">
                                        <button class="dropdown-item" type="button">
                                        Completed
                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/card">
                                        <button class="dropdown-item" type="button">
                                        Not Completed
                                        </button>
                                    </Link>
                                </li>     
                            </ul> */}
                        </div>
                    </div>

                    <div className="row d-flex" style={{fontWeight : "bold"}}>
                        {taskList.map((data) => 
                            <FormList name={data.task} desc={data.desc} extract={data.extract} status={data.statusForm} index={data.index} handleEdit={handleEdit}
                                handleDelete={handleDelete}/>
                        )}
                    </div>
                    {/* {extract ?
                    <div className="row d-flex" style={{fontWeight : "bold"}}>
                    {taskList.map((data) => 
                        <FormList name={data.task} desc={data.desc} extract={data.extract} status={data.statusForm} index={data.index} handleEdit={handleEdit}
                            handleDelete={handleDelete}/>
                    )}
                    </div>
                    : (extract=="Not Completed" ? 
                        <div className="row d-flex" style={{fontWeight : "bold"}}>
                            
                    {com.map((com) => 
                        <FormList name={com.task} desc={com.desc} extract={com.extract} status={com.statusForm} index={com.index} handleEdit={handleEdit}
                            handleDelete={handleDelete}/>
                    )}
                    </div>
                     : "Hi")} */}
                     {/* {com.map((com) => 
                        <FormList name={com.task} desc={com.desc} extract={com.extract} status={com.statusForm} index={com.index} handleEdit={handleEdit}
                            handleDelete={handleDelete}/>
                    )} */}
                </div>  
            </div>
        </>
    )
}