import React from "react";

function Home() {

    return (
        <div className="relative mt-2">
            <img src={require(`../../assets/img/home-pic.jpg`)} alt="home-pic" />
            <div className="absolute rounded-lg bg-hoverwhite opacity-80 right-40 top-44 px-3 py-3 text-2xl text-bgyellow font-semibold drop-shadow-2xl " >
                <span>BECOME FAMILY <br /> TO A FURRY FRIEND </span>
            </div>
        </div>

    )

}

export default Home;