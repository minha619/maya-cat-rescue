import { useRef } from "react";

import emailjs from '@emailjs/browser';


function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_cggw3zm', 'template_keyipyh', form.current, {
                // publicKey: 'uIPaHo3Jvw0RhlPQI',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset()


    };

    return (

        <section className="h-full mt-2 px-6 py-10  text-center font-sans overflow-auto relative" >
            <div className=" bg-bgyellow opacity-80 absolute inset-0" />
            <div className="absolute inset-0 px-6 py-8 mt-2 justify-center overflow-auto">
                <div>
                    <h1 className="font-bold text-lg md:text-xl lg:text-2xl "> CONTACT US </h1>
                    <div className="isolate bg-white px-6 py-4 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <p className="mt-2 text-gray-600 md:text-base lg:text-lg">
                                Please allow us some time to get back to you.
                            </p>
                            <p className="mt-2 text-gray-600 md:text-base lg:text-lg">
                                email: mayakittensrescue@gmail.com
                            </p>
                        </div>
                        <form ref={form} onSubmit={sendEmail} action="#" method="POST" className="mx-auto mt-6 max-w-xl ">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                                <div className="sm:col-span-2">
                                    <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            autoComplete="name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Phone number
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="tel"
                                            name="phone-number"
                                            id="phone-number"
                                            autoComplete="tel"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Message
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows={4}
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 ">
                                <button
                                    type="submit" className=" px-3.5 py-2.5 text-center text-sm font-semibold bg-hoverwhite" >
                                    SUBMIT
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;