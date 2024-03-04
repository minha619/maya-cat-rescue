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



        // <section className="h-full px-10 py-10 text-center font-sans relative">
        //     <div className="bg-bgyellow opacity-80 absolute inset-0 mt-2" />
        //     <div className="flex absolute inset-0 px-6 py-10 xs:flex-col py-8">
        //         <div className="w-5/12 xs:w-full">
        //             <img src={require(`../../assets/img/adopt-pic.jpg`)} alt="adopt-pic" />
        //         </div>
        //         <div className="pl-6 pt-4 w-7/12 xs:w-full pl-0">
        //             <h1 className="font-bold text-2xl text-left xs:text-center text-lg"> Adopt </h1>
        //             <p className="text-left pt-6 xs:pt-2 text-center text-sm">
        //                 Thank you for considering a cat or kitten for adoption from Maya Cats and Kittens Rescue,Inc.
        //                 We would like to place each of its cats in the most appropriate home,
        //                 and therefore requests that you to complete an adoption application.
        //                 You must be at least 25 years old with current ID showing name, address & telephone number.
        //                 If you are living with your parents, one of them must co-sign the final Adoption Agreement.
        //             </p>
        //             <div className="xs:flex flex-center flex-col items-center">
        //                 <button className="rounded-full bg-hoverwhite text-bgyellow px-4 py-2 mt-6 float-left font-bold xs:left-0 text-sm py-1 w-60"> <Link to="/application"> START APPLICATION </Link> </button>
        //                 <button className="rounded-full bg-hoverwhite text-bgyellow px-4 py-2 mt-6 float-left font-bold xs:left-0 text-sm mt-1.5 py-1 w-60"> <Link to="/adoptionlist"> Adoptable Cats & Kittens </Link> </button>
        //             </div>
        //         </div>
        //     </div>
        // </section>

        // <section class="h-full px-10 py-10 text-center font-sans relative">
        //     <div className="bg-bgyellow opacity-80 absolute inset-0 mt-2" />
        //     <div className="flex flex-col absolute inset-0 py-8 px-6 md:flex-row py-10">
        //         <div className="w-full md:w-5/12">
        //             <img src={require(`../../assets/img/adopt-pic.jpg`)} alt="adopt-pic" />
        //         </div>
        //         <div className="w-full pl-0 md:pl-6 pt-4 w-7/12">
        //             <h1 className="text-center md: text-left text-lg pt-6">
        //                 Adopt
        //             </h1>
        //             <p className="text-center text-sm md:text-left pt-6 pl-4">
        //                 Thank you for considering a cat or kitten for adoption from Maya Cats and Kittens Rescue,Inc.
        //                 We would like to place each of its cats in the most appropriate home,
        //                 and therefore requests that you to complete an adoption application.
        //                 You must be at least 25 years old with current ID showing name, address & telephone number.
        //                 If you are living with your parents, one of them must co-sign the final Adoption Agreement.
        //             </p>
        //             <div className="md:pl-4">
        //                 <button className="rounded-full bg-hoverwhite text-bgyellow text-sm py-1 w-60 md:px-4 py-2 mt-6 float-left font-bold">
        //                     <Link to="/application"> START APPLICATION </Link>
        //                 </button>
        //                 <button className="rounded-full bg-hoverwhite text-bgyellow text-sm mt-1.5 py-1 w-60 md:px-4 py-2 mt-6 float-left font-bold">
        //                     <Link to="/adoptionlist"> Adoptable Cats & Kittens </Link>
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    )
}
export default Adopt;