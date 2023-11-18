import { Link } from "react-router-dom";

function Nav() {

    return (
        <header>
            <nav>
                <div className="flex flex-row">
                    <div className="px-4 py-4">
                        <button>
                            <Link to='home/'> <img className="w-40" src={require(`../../assets/img/maya-logo.png`)} alt="logo" /> </Link>
                        </button>
                    </div>
                    <div className="text-bgyellow flex items-end right-4">
                        <div className="flex flex-row text-lg font-sans font-bold" >
                            <button className="px-4 py-2 mb-2 hover:bg-bgyellow hover:text-hoverwhite"> <Link to='about/'>  ABOUT US  </Link> </button>
                            <button className="px-4 py-2 mb-2 hover:bg-bgyellow hover:text-hoverwhite"> <Link to='about/'> ADOPT  </Link> </button>
                            {/* <button className="px-4 py-4 hover:bg-bgyellow hover:text-hoverwhite"> <Link to='help/'> WAYS TO HELP </Link> </button> */}
                            <button className="px-4 py-2 mb-2 hover:bg-bgyellow hover:text-hoverwhite"> <Link to='contat/'> CONTACT US </Link> </button>
                            <button className="px-4 py-2 mb-2 ml-4 bg-bgyellow text-hoverblack rounded-full hover:text-hoverwhite"> <Link to='donate/'> DONATE  </Link> </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header >
    );
}

export default Nav;


/* <ul className="flex flex-row text-lg font-sans font-bold " >
    <li className="px-4 py-2.5"> <Link to='home/'> <button> HOME </button> </Link> </li>
    <li className="px-4 py-2.5"> <Link to='about/'> <button className="bg-sky-500 hover:sky-500"> ABOUT US </button>  </Link> </li>
    <li className="px-4 py-2.5"> <Link to='about/'> <button> ADOPT </button> </Link> </li>
    <li className="px-4 py-2.5"> <Link to='help/'> <button> WAYS TO HELP </button> </Link> </li>
    <li className="px-4 py-2.5"> <Link to='contat/'> <button> CONTACT US </button> </Link> </li>
    <li className="px-4 py-2.5"> <Link to='donate/'> <button> DONATE </button> </Link> </li>
</ul> */

// <button className="px-4 py-2.5 hover:bg-bgyellow hover:text-white"> <Link to='home/'> HOME </Link> </button>