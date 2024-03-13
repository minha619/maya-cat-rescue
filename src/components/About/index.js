function About() {

    return (

        <section className="h-full mt-2 px-6 py-10 text-center font-sans relative" >
            <div className=" bg-bgyellow opacity-80 absolute inset-0" />
            <div className="flex flex-col text-center absolute inset-0 px-6 py-8 mt-2 overflow-auto">
                <h1 className="font-bold text-lg md:text-xl lg:text-2xl "> About Maya Cats and Kittens Rescue </h1>
                <p className="px-12 py-10 md:text-base lg:px-36">
                    Founded in 2020, Maya Cats and Kittens Rescue,Inc. is a 501(c)(3) nonprofit organization
                    committed to saving cats and kittens from Queens and Long Island, NY.
                    We try to find each of its animals a fmily and place them in the most appropriate home.
                    We are an all-volunteer, non-profit rescue group.
                </p>
                <div className="flex justify-center">
                    <div className="w-5/12 ">
                        <img src={require(`../../assets/img/11.jpg`)} alt="kittens" />
                    </div>
                </div>
            </div>
        </section>

    )
}
export default About;

