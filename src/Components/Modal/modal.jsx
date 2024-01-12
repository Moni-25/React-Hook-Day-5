import { useState } from "react"
import CardList from "../CardList/cardList"

export default function Modal({data = {}})
{
    // const [nameUpdate, setNameUpdate] = useState("")
    // const [descUpdate, setDescUpdate] = useState("")
    
    // function handleUpdateName(e){
    //     setNameUpdate(e.target.value)
    //     console.log(nameUpdate)
    // }
    // function handleUpdateDesc(e){
    //     setDescUpdate(e.target.value)
    //     console.log(descUpdate)
    // }

    // function handleUpdate (nameUpdate, descUpdate) {
    //     const newValue = {
    //         id: Math.random(),
    //     };
    //     const valueCopy = [...value]
    //     valueCopy.push(newValue)
    //     setValue(valueCopy)
    //     //console.log(newValue)
    //     setName("")
    //     setDesc("")
    //     setStatus("")
    // }
    return(
        <>
            <h6>{data.inputId}</h6>
        </>
    )
}