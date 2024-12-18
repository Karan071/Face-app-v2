import CheckIn from "./component/SuccessPage";
import Dashboard from "./component/Dashboard";
import LandingPage from "./component/LandingPage";
import Navbar from "./component/Navbar";
import SuccessPage from "../src/component/SuccessPage";
import ErrorPage from "../src/component/ErrorPage";
import CheckInPage from "./component/CheckInPage";
import CheckInVisitor from "./component/CheckInVisitor";
import { Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element= {<LandingPage />}/>  
        <Route path="/dashboard" element = {<Dashboard/>}/>
        <Route path="/check-visitor" element = {<CheckInVisitor/>} />
        <Route path="/check-employee" element = {<CheckInPage/>} />
        {/* <SuccessPage/> */}
        {/* <ErrorPage/> */}
      </Routes>
    </>
  );
}

export default App;
