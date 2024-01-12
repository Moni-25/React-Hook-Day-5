export default function CardList(){
    return(
        <>
            <select name="" id="" aria-label="Default select example" style={{backgroundColor: "#ff4d4d"}}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="not-completed">Not Completed</option>
            </select>
        </>
    )
}





/*import { useState } from "react"
import Todo from "../FormTodo/formTodo"
import Modal from "../Modal/modal";

export default function CardList({data = {}})
{
    const getInitialState = () => {
        const statusUpdate = "Not Completed";
        return statusUpdate;
      };
    
      const [statusUpdate, setStatusUpdate] = useState(getInitialState);
    
      const handleNotComplete = (e) => {
        setStatusUpdate(e.target.value);
      };
      console.log(statusUpdate)

      const ide = data.id;
      const [newId, setNewID] = useState([])

      function handleEdit(ide){
        const iden = {
            inputId: ide
        }
        const copyId = [...newId]
        copyId.push(iden)
        setNewID(copyId)
        console.log("id:", iden)
      }
      console.log(newId)

    return(
        <>
            <div className="card mx-5 mb-3" style={{width: "350px", height: "200px", backgroundColor: "rgb(144, 238, 222)"}}>
                <div className="card-body">
                    <p className="card-text">Name : {data.input1}</p>
                    <p className="card-text">Description : {data.input2}</p>
                    <p className="card-text">Status :
                        <select value={statusUpdate} defaultValue={statusUpdate} name="statusUpdate" id="statusUpdate" 
                            onChange={handleNotComplete} style={{marginLeft: "5px"}}>
                            <option value="Not Completed">{data.input3}</option>
                            <option value="Radish">Radish</option>
                        </select>
                        <p>{`value ${statusUpdate} ${ide}`}</p>
                    </p>
                </div>
                <div className="card-footer d-flex gap-3 justify-content-end" style={{borderStyle: "none"}}>
                    <button className="form-control btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal"
                     style={{width: "100px", height: "40px", backgroundColor: "rgb(21, 145, 124)"}}
                           onClick={() => handleEdit(ide)}>
                        Edit
                    </button>
                       {newId.map((data) => <Modal data={data}/>)}
                    <button className="form-control btn btn-success" style={{width: "100px", height: "40px", backgroundColor: "#e65c00"}}>
                        Delete
                    </button>
                </div>
            </div>
        </>
    )
}*/