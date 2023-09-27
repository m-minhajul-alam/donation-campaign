import { Outlet } from "react-router-dom";
import Nav from "../Components/Header/Nav/Nav";
import { createContext, useState } from "react";

export const SearchValue = createContext("")


const Root = () => {

    const [inputSearch, setInputSrarch] = useState("")

    return (
        <div className="max-w-[1180px] mx-auto">
            <SearchValue.Provider value={[inputSearch, setInputSrarch]}>
                <Nav></Nav>
                <Outlet></Outlet>
            </SearchValue.Provider>
        </div>
    );
};

export default Root;