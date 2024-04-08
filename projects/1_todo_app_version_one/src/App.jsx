import AppName from "./component/AppName"
import Input from "./component/input_list"
import Todo_item1 from "./component/todo_item1"
import Todo_item2 from "./component/todo_item_2"
import Todo_mainitem from "./component/Todo_mainitem"
import Mapitems from "./component/mapitems"

function App() {

  let item=[
    {name:"buy milk",date:"23/05/2024"},
    {name:"go to chandigarh",date:"23/05/2024"},
    {name:"todo item with map",date:"23/05/2024"}
  ]

  return <div class="w-50 mx-auto">
    <AppName></AppName>
    <Input></Input>
    <Mapitems items={item}></Mapitems>
    <Todo_mainitem todoname="rice" tododate="23/04/2003"></Todo_mainitem>
    <Todo_mainitem todoname="yes" tododate="23/04/2003"></Todo_mainitem>
    <Todo_item1></Todo_item1>
    <Todo_item2></Todo_item2>
  </div> 
}

export default App
