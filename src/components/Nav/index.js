import { Link } from "react-router-dom";

function Nav() {
    return (
        <header>
            <nav>
                <div className="flex flex-row">
                    <div className="px-4 py-4">
                        <img className="w-48" src={require(`../../assets/img/maya-logo.png`)} alt="logo" />
                    </div>
                    <div className="text-[#FAAF3B] px-4 flex items-end">
                        <ul className="flex flex-row text-lg font-sans font-bold" >
                            <li className="px-4 py-2.5"> <Link to='home/'> HOME </Link> </li>
                            <li className="px-4 py-2.5"> <Link to='about/'> ABOUT US </Link> </li>
                            <li className="px-4 py-2.5"> <Link to='about/'> ADOPT </Link> </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    );
}

export default Nav;