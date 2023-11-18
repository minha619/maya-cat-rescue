import React from "react";

function Home() {

    return (
        <div className="relative">
            <img src={require(`../../assets/img/home-pic.jpg`)} alt="home-pic" />
            <div className="absolute rounded-lg bg-hoverwhite opacity-70 right-32 top-44 px-4 py-4 text-lg text-bgyellow font-semibold drop-shadow-2xl" >
                <span>BECOME FAMILY TO A FURRY FRIEND </span>
            </div>
        </div>

    )

}

export default Home;