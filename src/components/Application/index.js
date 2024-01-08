// import { Link } from "react-router-dom";

function Application() {

    return (
        <section className="h-full mt-2 px-4 py-10 bg-bgyellow opacity-80 text-center font-sans">
            <h1 className="font-bold text-2xl"> How to apply </h1>
            <p className="pt-6">Please download and fill out a pdf form and send it to mayacatsrescue@gmail.com</p>
            {/* <Link to="../../assets/Cat-Adoption-Application-Form.pdf/" target="_blank"> */}
            <button type="submit" onclick="window.open('../../assets/Cat-Adoption-Application-Form.pdf')" className="rounded-full bg-hoverwhite text-bgyellow px-4 py-2 mt-6 font-bold">  DOWNLOAD FORM </button>
            {/* </Link> */}
        </section>
    )
}
export default Application;


// <button type="submit" onclick="window.open('file.doc')">Download!</button>