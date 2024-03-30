import Kgbutton from "./react_button"
import Hello from "./hello";
import DynamicCompo from "./dynamic_component";
import Random_Number from "./random_number";

function App() {
  return <div>
    <h1>
      Hello World
    </h1>
    <Kgbutton></Kgbutton>
    <Hello></Hello>
    <DynamicCompo></DynamicCompo>
    <h2>this is for created a random number</h2>
    <Random_Number></Random_Number>
    <Random_Number></Random_Number>
    <Random_Number></Random_Number>
    <Random_Number></Random_Number>
    <Random_Number></Random_Number>
  </div>
   
}

export default App;
