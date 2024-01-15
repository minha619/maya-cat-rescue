// import { Link } from "react-router-dom";

function Application() {

    // const onClick = () => {
    //     window.open('../../assets/Cat-Adoption-Application-Form.pdf');
    // }

    const onClick = () => {
        window.open('https://drive.google.com/file/d/1BjkSVI0-yVSdh5M9iHio0oSKxlfIpiRT/view');
    }

    return (
        <section className="h-full mt-2 px-4 py-10 bg-bgyellow opacity-80 text-center font-sans">
            <h1 className="font-bold text-2xl"> How to apply </h1>
            <p className="pt-6">Please download and fill out a pdf form and send it to mayacatsrescue@gmail.com</p>
            {/* <Link to="../../assets/Cat-Adoption-Application-Form.pdf/" target="_blank"> */}
            <button type="submit" onClick={onClick} className="rounded-full bg-hoverwhite text-bgyellow px-4 py-2 mt-6 font-bold">DOWNLOAD FORM </button>
            {/* </Link> */}
        </section>
    )
}
export default Application;


// <button type="submit" onclick="window.open('file.doc')">Download!</button>