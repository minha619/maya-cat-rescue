function Donate() {

    return (
        <section className="h-full mt-2 px-6 py-10 bg-bgyellow opacity-80 text-center font-sans" >
            <div>
                <h1 className="font-bold text-2xl"> Make Donation to Maya Cats and Kittens Rescue </h1>
                <p className="px-32 py-10">
                    Founded in 2020, Maya Cats and Kittens Rescue,Inc. is a 501(c)(3) nonprofit organization.
                </p>
                <p>
                    <h1 className="font-bold">Zelle ID:
                    </h1>
                    516-650-9462 <br />
                    MAYA CATS AND KITTENS RESCUE, INC, SOYSSET, NY <br /><br />

                    <h1 className="font-bold">Venmo ID:</h1> @Misook380
                </p>
            </div>
            <div className="flex justify-center">
                <div className="w-60 mt-6">
                    <img src={require(`../../assets/img/venmoid.jpg`)} alt="venmoid" />
                </div>
            </div>

        </section >
    )
}
export default Donate;

