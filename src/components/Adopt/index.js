function Adopt() {

    return (
        <section >
            <div className="mt-2">
                <div className="px-4 py-10 bg-bgyellow opacity-80 text-center font-sans">
                    <div className="flex">
                        <div>
                            <img src={require(`../../assets/img/adopt-pic.jpg`)} alt="home-pic" />
                        </div>
                        <div className="pl-6">
                            <h1 className="font-bold text-2xl text-left"> Adopt </h1>
                            <p className="text-left pt-4">
                                Founded in 2020, Maya Cats and Kittens Rescue,Inc. is a 501(c)(3) nonprofit organization
                                committed to saving cats and kittens from Queens and Long Island, NY.
                                We try to find each of its animals a fmily and place them in the most appropriate home.
                                We are an all-volunteer, non-profit rescue group.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Adopt;