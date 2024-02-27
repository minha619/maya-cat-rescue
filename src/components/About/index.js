function About() {

    return (
        <section className="h-full mt-2 px-6 py-10 text-center font-sans relative" >
            <div className=" bg-bgyellow opacity-80 absolute inset-0 mt-2" />
            <div className="absolute inset-0 px-6 py-10 xs:py-8">
                <h1 className="font-bold text-2xl xs:text-lg"> About Maya Cats and Kittens Rescue </h1>
                <p className="px-32 py-10 xs:text-sm py-4">
                    Founded in 2020, Maya Cats and Kittens Rescue,Inc. is a 501(c)(3) nonprofit organization
                    <br />committed to saving cats and kittens from Queens and Long Island, NY.
                    <br />We try to find each of its animals a fmily and place them in the most appropriate home.
                    <br />We are an all-volunteer, non-profit rescue group.
                </p>
                <div className="flex justify-center">
                    <div className="w-5/12 xs:w-full">
                        <img src={require(`../../assets/img/11.jpg`)} alt="kittens" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;

