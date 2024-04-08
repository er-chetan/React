import styl from "./Todo_with_map.module.css";

const TodoWithMap=({todoname,tododate})=>{
    return(
        <div className="row mt-3 justify-content-between">
            <h3 className= {`col-4 ${styl.todohead}`} >{todoname}</h3>
            <h3 className="col-4 p-0 todohead">{tododate}</h3>
            <button className="col-2 btn btn-danger">Delete</button>
        </div>
    )
}

export default TodoWithMap;