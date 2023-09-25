import { Outlet } from "react-router-dom";
import Nav from "../Components/Header/Nav/Nav";


const Root = () => {
    return (
        <div className="max-w-[1180px] mx-auto">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;