import { Link } from "react-router-dom";

function Adopt() {

    return (
        <section className="h-full px-10 py-10 text-center font-sans relative">
            <div className="bg-bgyellow opacity-80 absolute inset-0 mt-2" />
            <div className="flex absolute inset-0 px-6 py-10 xs:flex-col py-8">
                <div className="w-5/12 xs:w-full">
                    <img src={require(`../../assets/img/adopt-pic.jpg`)} alt="adopt-pic" />
                </div>
                <div className="pl-6 pt-4 w-7/12 xs:w-full pl-0">
                    <h1 className="font-bold text-2xl text-left xs:text-center text-lg"> Adopt </h1>
                    <p className="text-left pt-6 xs:pt-2 xs:text-center text-sm">
                        Thank you for considering a cat or kitten for adoption from Maya Cats and Kittens Rescue,Inc.
                        We would like to place each of its cats in the most appropriate home,
                        and therefore requests that you to complete an adoption application.
                        You must be at least 25 years old with current ID showing name, address & telephone number.
                        If you are living with your parents, one of them must co-sign the final Adoption Agreement.
                    </p>
                    <div className="xs:flex flex-center flex-col items-center">
                        <button className="rounded-full bg-hoverwhite text-bgyellow px-4 py-2 mt-6 float-left font-bold xs:left-0 text-sm py-1 w-60"> <Link to="/application"> START APPLICATION </Link> </button>
                        <button className="rounded-full bg-hoverwhite text-bgyellow px-4 py-2 mt-6 ml-6 float-left font-bold xs:left-0 text-sm mt-1.5 ml-0 py-1 w-60"> <Link to="/adoptionlist"> Adoptable Cats & Kittens </Link> </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Adopt;