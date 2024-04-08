import TodoWithMap from "./Todo_with_map";

function Mapitems({items}){
    return  (
        <div class="row mt-3 justify-content-between">
           {items.map((item)=>(
            <TodoWithMap todoname={item.name} tododate={item.date}></TodoWithMap>
           ))}
        </div>
    )
}

export default Mapitems;