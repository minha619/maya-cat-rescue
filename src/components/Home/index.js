import React from "react";
import { Link } from "react-router-dom";

function Home() {

    return (


        <section className="h-full mt-2 relative" >
            <div className=" bg-bgyellow opacity-80 absolute inset-0" />
            <div className="inseet-0 absolute">
                <img src={require(`../../assets/img/home-pic.jpg`)} alt="home-pic" />
                <div className="absolute rounded-lg bg-hoverwhite opacity-80 right-6 top-32 p-3 drop-shadow-2xl lg:right-40 top-44" >
                    <div className="text-bgyellow font-semibold text-xs md:text-xl">
                        BECOME FAMILY <br /> TO A FURRY FRIEND
                    </div>
                </div>
                <div className="flex flex-col items-center mt-4">
                    <button className="rounded-full bg-hoverwhite text-bgyellow w-60 px-4 py-2 mt-6 font-bold text-xs sm:float-left sm:text-sm mx-2 lg:mx-2 sm:hidden md:hidden lg:hidden"> <Link to="/adoptionlist"> ADOPTABLE CATS & KITTENS </Link> </button>
                    <button className="rounded-full bg-hoverwhite text-bgyellow w-60 px-4 py-2 mt-6 font-bold text-xs sm:float-left sm:text-sm mx-2 lg:mx-2 sm:hidden md:hidden lg:hidden"> <Link to="/application"> START APPLICATION </Link> </button>
                </div>
            </div>
        </section>



    )

}

export default Home;