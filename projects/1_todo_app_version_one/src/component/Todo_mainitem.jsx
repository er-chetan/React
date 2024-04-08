function Todo_mainitem({todoname,tododate}){
    return (
    <div class="row mt-3 justify-content-between">
    <h3 class="col-4 p-0">{todoname}</h3>
    <h3 class="col-4 p-0">{tododate}</h3>
    <button class="col-2 btn btn-danger">Delete</button>
    </div>
    )
}

export default Todo_mainitem