import Fragment from "./component/fragment"
import Map from "./component/map"
import ErrorMsg from "./component/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  let fooditem=[];
  return (
    <>
      <h1 className="text-danger">Food items</h1>
      {/* prop */}
      <ErrorMsg items={fooditem}></ErrorMsg>
      <Fragment></Fragment>
      <Map></Map>
    </>
  )
}

export default App
