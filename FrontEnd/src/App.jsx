import CheckIn from "./component/SuccessPage";
import Dashboard from "./component/Dashboard";
import LandingPage from "./component/LandingPage";
import Navbar from "./component/Navbar";
import SuccessPage from "../src/component/SuccessPage";
import ErrorPage from "../src/component/ErrorPage";
import CheckInPage from "./component/CheckInPage";
import CheckInVisitor from "./component/CheckInVisitor";
import { Routes, Route} from "react-router-dom"
import RegisterEmployee from "./component/RegisterVisitor";
import RegisterVisitor from "./component/RegisterVisitor";
import MainPage from "./component/MainPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element= {<LandingPage />}/>  
        <Route path="/main-page" element = {<MainPage/>} />
        <Route path="/dashboard" element = {<Dashboard/>}/>
        <Route path="/check-visitor" element = {<CheckInVisitor/>} />
        <Route path="/check-employee" element = {<CheckInPage/>} />
        <Route path="/register-employee" element = {<RegisterEmployee/>} />
        <Route path="/register-visitor" element = {<RegisterVisitor/>} />
      </Routes>     
    </>
  );
}
export default App;
