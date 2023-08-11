import { Route, Routes } from "react-router-dom";
import Users from "./Users";
import ShowUser from "./ShowUser";

const RouterUsers = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Users/>} />
            <Route path='/:email' element={<ShowUser/>}/>
        </Routes>
     );
}
 
export default RouterUsers;