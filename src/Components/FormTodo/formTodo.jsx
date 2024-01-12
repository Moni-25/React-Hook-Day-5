import { useRef, useState} from "react"
import "./style.css"
import PropTypes from "prop-types";
import CardList from "../CardList/cardList";

export default function Todo()
{
    // By using State
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [status, setStatus] = useState("Not Completed")
    const [value, setValue] = useState([])

    function handleForm (name, desc) {
        const newValue = {
            id: Math.random(),
            input1: name,
            input2: desc,
            input3: status
        };
        const valueCopy = [...value]
        valueCopy.push(newValue)
        setValue(valueCopy)
        console.log(newValue)
        setName("")
        setDesc("")
        setStatus("Not Completed")
    }
    function handleName(e){
        setName(e.target.value)
        console.log(name)
    }

    function handleDesc(e){
        setDesc(e.target.value)
        console.log(desc)
    }

    // By Using Reference useRef
    /*const name = useRef(null)
    const desc = useRef(null)
    console.log(name)
    function handleForm(e){
        // Instead of Dom Manipulation we using useRed
        //const names = document.getElementById('name')
        const names = [name.current.value];
        //console.log(names)
        //console.log(name.current.value, desc.current.value)
    }*/
    return(
        <>
            <div className="card">
                <div className="card-header text-center form-head">
                    My Todo
                </div>
                <div className="card-body text-center mx-5">
                    <div className="row d-flex mx-5" style={{justifyContent: "center"}}>
                        <div className="mt-3 mb-3 col-lg-4 col-md-2">
                            {/* By using state */}
                            <input type="text" className="form-control" placeholder="Todo Name" aria-label="Example text with button addon" aria-describedby="button-addon1"
                            name="todo-name" onChange={handleName} value={name}/>  
                            {/* By using useREf 
                            <input type="text" className="form-control" placeholder="Todo Name" aria-label="Example text with button addon" aria-describedby="button-addon1"
                            id="name" name="todo-name" ref={name}/>  */}
                        </div>
                        <div className="mb-3 mt-3 col-lg-4 col-md-2">
                            {/* By using state*/}
                            <input type="text" className="form-control" placeholder="Todo Description" aria-label="Example text with button addon" aria-describedby="button-addon1"
                            name="todo-desc" onChange={handleDesc} value={desc}/>
                            {/* By using useRef
                            <input type="text" className="form-control" placeholder="Todo Description" aria-label="Example text with button addon" aria-describedby="button-addon1"
                            id="describtion" name="todo-desc" ref={desc}/> */}
                        </div> 
                        <div className="mb-3 mt-3 col-lg-4 col-md-2">
                            <button className="form-control btn btn-success"
                            style={{width: "200px"}} onClick={() => handleForm(name, desc, status)}>
                                Add Todo
                            </button>
                        </div>
                    </div>
                    
                    <div className="row d-flex" style={{fontWeight : "bold"}}>
                        <div className="col-lg-6" style={{textAlign: "start"}}>My Todos</div>
                        <div className="col-lg-6" style={{textAlign: "end"}}>
                        <label for="form-control" style={{marginRight : "5px"}}>Status Filter : </label>
                            <select name="" id="" aria-label="Default select example" style={{backgroundColor: "#ff4d4d"}}>
                                <option value="all">All</option>
                                <option value="completed">Completed</option>
                                <option value="not-completed">Not Completed</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div style={{display:"flex"}}>
                    {value.map((data) => <CardList data={data}/>)}
                </div>
            </div>
        </>
    )
}

// Todo.propTypes = {
//     value: PropTypes.string
//   };