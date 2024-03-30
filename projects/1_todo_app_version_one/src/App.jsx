import AppName from "./component/AppName"
import Input from "./component/input_list"
import Todo_item1 from "./component/todo_item1"
import Todo_item2 from "./component/todo_item_2"
function App() {

  return <div class="w-50 mx-auto">
    <AppName></AppName>
    <Input></Input>
    <Todo_item1></Todo_item1>
    <Todo_item2></Todo_item2>
  </div> 
}

export default App
