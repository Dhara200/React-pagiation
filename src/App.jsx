import ReactPaginate from "react-paginate"
import { useState } from "react"
import Jsondata from "./MOCK_DATA (1).json"

function App() {
 const[users, setUsers] = useState(Jsondata.slice(0,60))
 const[pagenumber, setPagenumber] = useState(0)


 const usersperpage = 10;
const pagesvisited = pagenumber * usersperpage;

const display = users.slice(pagesvisited, pagesvisited+usersperpage).map(user=> {
  return(
    <div className="card">
    <div className="user">
      <h3>{user.first_name}</h3>
      <h3>{user.last_name_name}</h3>
      <h3>{user.email}</h3>
    </div>
    </div>
  )
})
const pageCount = Math.ceil(users.length / usersperpage)

const changePage = ({selected}) =>{
 setPagenumber(selected)
}
  return (
  <>
  
 
  {display}
  <ReactPaginate 

   previousLabel = {'Previous'}
   nextLabel = {'Next'}
   pageCount = {pageCount}
  onPageChange = {changePage}
  containerClassName = {"paginationBtn"}
  previousLinkClassName = {"previousBtn"}
  nextLinkClassName= {"nextBtn"}
  disablesClassName = {"paginationDisables"}
  activeClassName = {"paginationActive"}
   />

  </>
    )
}

export default App
