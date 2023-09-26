import { Link, NavLink } from "react-router-dom";

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
        <div>

            <div className="flex flex-col lg:flex-row justify-between items-center px-3 mt-2">
                <div>
                    <Link to={"/"}><img className="lg:w-40" src={"/assets/logo/Logo.png"} alt="" /></Link>
                </div>
                <div>
                    <ul className="flex justify-evenly items-center my-4 lg:my-0 gap-16 lg:gap-7">
                        {links}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Nav;