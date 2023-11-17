import { Link } from "react-router-dom";

function Nav() {
    return (
        <header>
            <nav>
                <div className="flex flex-row">
                    <div className="px-4 py-4">
                        <img className="w-48" src={require(`../../assets/img/maya-logo.png`)} alt="logo" />
                    </div>
                    <ul className="text-orange-300 flex flex-row">
                        <li className="px-4 py-4"> <Link to='home/'> HOME </Link> </li>
                        <li className="px-4 py-4"> <Link to='about/'> ABOUT US </Link> </li>
                        <li className="px-4 py-4"> <Link to='about/'> ADOPT </Link> </li>
                    </ul>
                </div>
            </nav>
        </header>

    );
}

export default Nav;