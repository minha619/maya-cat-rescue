function Donate() {

    return (
        <section className="h-full px-10 py-10 text-center font-sans relative" >
            <div className=" bg-bgyellow opacity-80 absolute inset-0 mt-2" />
            <div className="absolute inset-0 px-6 py-10">
                <h1 className="font-bold text-2xl"> Make Donation to Maya Cats and Kittens Rescue </h1>
                <p className="px-32 py-10">
                    Founded in 2020, Maya Cats and Kittens Rescue,Inc. is a 501(c)(3) nonprofit organization.
                </p>
                <p>
                    <h1 className="font-bold">Zelle:
                    </h1>
                    516-650-9462 <br />
                    MAYA CATS AND KITTENS RESCUE, INC, SOYSSET, NY <br /><br />

                    <h1 className="font-bold">Venmo:</h1> @Misook380
                </p>
                <div className="flex justify-center">
                    <div className="w-60 mt-6">
                        <img src={require(`../../assets/img/venmoid.jpg`)} alt="venmoid" />
                    </div>
                </div>
            </div>


        </section >
    )
}
export default Donate;

