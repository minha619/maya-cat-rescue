import { Link } from "react-router-dom";

function Nav() {
    return (
        <header>
            <nav>
                <div>
                    <img src={require(`../../assets/img/maya-logo.pngç`)} alt="logo"/>
                </div>
               <ul>
                    <li> <Link to='home/'> HOME </Link> </li>
                    <li> <Link to='about/'> ABOUT US </Link> </li>
                    <li> <Link to='about/'> ADOPT </Link> </li>
                </ul>
            </nav>
        </header>

    );
}

export default Nav;