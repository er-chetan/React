import CurrentDate from "./components/date";
import AppHeading from "./components/appheading";
import CurrentTime from "./components/time";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
 
function App() {
  return <div className="clock bg-primary text-white text-center">
    <AppHeading></AppHeading>
    <CurrentDate></CurrentDate>
    <CurrentTime></CurrentTime>
  </div>
}

export default App;
