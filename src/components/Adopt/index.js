function Adopt() {

    return (
        <section >
            <div className="mt-2">
                <div className="px-10 py-10 bg-bgyellow opacity-80 text-center font-sans">
                    <div className="flex">
                        <div>
                            <img src={require(`../../assets/img/adopt-pic.jpg`)} alt="home-pic" />
                        </div>
                        <div className="pl-6 pt-4">
                            <h1 className="font-bold text-2xl text-left"> Adopt </h1>
                            <p className="text-left pt-6">
                                Thank you for considering a cat or kitten for adoption from Maya Cats and Kittens Rescue,Inc.
                                We would like to place each of its cats in the most appropriate home,
                                and therefore requests that you to complete an adoption application.
                                You must be at least 25 years old with current ID showing name, address & telephone number.
                                If you are living with your parents, one of them must co-sign the final Adoption Agreement.
                            </p>
                            <button className="rounded-full bg-hoverwhite text-bgyellow px-4 py-2 mt-6 float-left font-bold"> START APPLICATION </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Adopt;