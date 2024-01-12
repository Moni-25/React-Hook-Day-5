// import './App.css'
import CardList from "./Components/CardList/cardList"
import Todo from "./Components/FormTodo/formTodo"
import SimpleForm from "./Components/FormTodo/simpleForm"
import {Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
      {/* <Todo/> */}
      <Routes>
        <Route Component={SimpleForm} path="/"/>
        <Route Component={CardList} path="/card"/>
      </Routes>
      {/* <SimpleForm/> */}
    </>
  )
}

export default App
