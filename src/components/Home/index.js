import React from "react";

function Home() {

    return (


        <section className="h-full mt-2 relative" >
            <div className=" bg-bgyellow opacity-80 absolute inset-0" />
            <div className="inseet-0 absolute">
                <img src={require(`../../assets/img/home-pic.jpg`)} alt="home-pic" />
                <div className="absolute rounded-lg bg-hoverwhite opacity-80 right-2 top-32 p-3 drop-shadow-2xl lg:right-40 top-44" >
                    <div className="text-bgyellow font-semibold text-xs md:text-xl">
                        BECOME FAMILY <br /> TO A FURRY FRIEND
                    </div>
                </div>
            </div>
        </section>



    )

}

export default Home;