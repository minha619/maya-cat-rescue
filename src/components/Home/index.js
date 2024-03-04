import React from "react";

function Home() {

    return (

        <div className="relative mt-2">
            <img src={require(`../../assets/img/home-pic.jpg`)} alt="home-pic" />
            <div className="absolute rounded-lg bg-hoverwhite opacity-80 right-4 top-32 p-3 drop-shadow-2xl lg:right-40 top-44" >
                <div className="text-bgyellow font-semibold text-xs md:text-xl">
                    BECOME FAMILY <br /> TO A FURRY FRIEND
                </div>
            </div>
        </div>

        // <div className="relative mt-2">
        //     <img src={require(`../../assets/img/home-pic.jpg`)} alt="home-pic" />
        //     <div className="absolute rounded-lg bg-hoverwhite opacity-80 right-40 top-44 px-3 py-3 text-2xl text-bgyellow font-semibold drop-shadow-2xl xs:right-10 top-25 text-sm" >
        //         <span>BECOME FAMILY <br /> TO A FURRY FRIEND </span>
        //     </div>
        // </div>

    )

}

export default Home;