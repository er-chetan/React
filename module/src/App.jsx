import Fragment from "./component/fragment"
import Map from "./component/map"
import ErrorMsg from "./component/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  let fooditem=['i'];
  return (
    <>
      <h1 className="text-danger">Food items</h1>
      <ErrorMsg items={fooditem}></ErrorMsg>
      <Fragment></Fragment>
      <Map></Map>
    </>
  )
}

export default App
