import { Link } from "react-router-dom";

function Adopt() {

    return (
        <section className="h-full mt-2 px-6 py-10 text-center font-sans relative">
            <div className="bg-bgyellow opacity-80 absolute inset-0 mt-2" />
            <div className="flex absolute flex-col inset-0 px-6 py-8 mt-2 overflow-auto sm:flex-row">
                <div className="w-60 sm:w-8/12">
                    <img src={require(`../../assets/img/adopt-pic.jpg`)} alt="adopt-pic" />
                </div>
                <div className="pl-6 pt-4 w-7/12">
                    <h1 className="font-bold text-lg text-center md:text-left text-xl lg:text-2xl"> Adopt </h1>
                    <p className="text-center pt-6 md:text-left text-base">
                        Thank you for considering a cat or kitten for adoption from Maya Cats and Kittens Rescue,Inc.
                        We would like to place each of its cats in the most appropriate home,
                        and therefore requests that you to complete an adoption application.
                        You must be at least 25 years old with current ID showing name, address & telephone number.
                        If you are living with your parents, one of them must co-sign the final Adoption Agreement.
                    </p>
                    <button className="rounded-full bg-hoverwhite text-bgyellow w-60 px-4 py-2 mt-6 font-bold text-xs md:float-left text-2xl  mr-6"> <Link to="/adoptionlist"> ADOPTABLE CATS & KITTENS </Link> </button>

                    <button className="rounded-full bg-hoverwhite text-bgyellow w-60 px-4 py-2 mt-6 font-bold text-xs md:float-left text-2xl"> <Link to="/application"> START APPLICATION </Link> </button>
                </div>
            </div>

        </section >

    )
}
export default Adopt;