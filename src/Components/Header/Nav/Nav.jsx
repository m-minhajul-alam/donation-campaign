import { NavLink } from "react-router-dom";

const Nav = () => {
    const links = <>
        <li><NavLink to={"/"}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline font-semibold" : "font-light"
            }> Home </NavLink></li>
        <li><NavLink to={"/donation"}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline font-semibold" : "font-light"
            }> Donation </NavLink></li>
        <li><NavLink to={"/statistics"}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline font-semibold" : "font-light"
            }> Statistics </NavLink></li>
    </>

    return (
        <div className="w-11/12 lg:max-w-[1180px] mx-auto flex flex-col md:flex-row justify-between items-center px-3 mt-2">
            <div>
                <a href="/"><img className="md:w-40" src={"/assets/logo/Logo.png"} alt="" /></a>
            </div>
            <div>
                <ul className="flex justify-evenly items-center my-4 lg:my-0 gap-16 lg:gap-7">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Nav;