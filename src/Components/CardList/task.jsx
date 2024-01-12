export default function FormList({name, desc, status, extract, index, handleEdit, handleDelete})
{
    console.log("TasK", extract)
   return(
        <>
            <div className="card mx-3 mb-3 mt-4" style={{width: "350px", height: "200px", backgroundColor: "rgb(144, 238, 222)"}}>
                <div className="card-body">
                    <p className="card-text">Name : {name}</p>
                    <p className="card-text">Description : {desc}</p>
                    <p className="card-text">Status :
                    {status === "Not Completed"
                        ?
                        <select value="" defaultValue="" name="statusUpdate" id="statusUpdate" 
                            onChange="" style={{marginLeft: "5px"}}>
                            <option value="Not Completed">{status}</option>
                            <option value="Completed">Completed</option>
                        </select>
                        :
                        <select value="" defaultValue="" name="statusUpdate" id="statusUpdate" 
                            onChange="" style={{marginLeft: "5px"}}>
                            <option value="Completed">{status}</option>
                            <option value="Not Completed">Not Completed</option>
                        </select>
                    }   
                    </p>
                </div>
                <div className="card-footer d-flex gap-3 justify-content-end" style={{borderStyle: "none"}}>
                    <button className="form-control btn btn-success" style={{width: "100px", height: "40px", backgroundColor: "rgb(21, 145, 124)"}}
                        onClick={() => handleEdit(index)}>
                    Edit
                    </button>
                    <button className="form-control btn btn-success" style={{width: "100px", height: "40px", backgroundColor: "#e65c00"}}
                        onClick={() => handleDelete(index)}>
                        Delete
                    </button>
                </div>
            </div>
        </>
    )
}


/*export default function Task({name, desc, index, handleEdit, handleDelete})
{
    return(
        <>
            <div className="d-flex">
                <input value = {name} />
                <input value = {desc}/>
                <button className="btn btn-success" onClick={() => handleEdit(index)}>Edit</button>
                <button className="btn btn-success" onClick={() => handleDelete(index)}>Delete</button>
            </div>
        </>
    )
}*/