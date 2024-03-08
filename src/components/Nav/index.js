import { Link } from "react-router-dom";
import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


function Nav() {

    let [open, setOpen] = useState(false)

    return (
        <header className="flex-initial">
            <nav>
                <div className="flex justify-between w-full h-full">
                    <div className="p-4 w-[5em] min-w-[8em] h-[auto] lg:w-[10em] flex-initial">
                        <Link className="cursor-pointer" to='home/'>
                            <img className="w-full" src={require(`../../assets/img/maya-logo.png`)} alt="logo" />
                        </Link>
                    </div>
                    <div className="text-bgyellow flex items-end justify-end flex-col relative flex-1 p-2">
                        <div onClick={() => setOpen(!open)} className="cursor-pointer sm:hidden">
                            <ion-icon name={open ? 'close' : 'menu'} ></ion-icon>
                        </div>
                        <div className={`flex font-sans font-bold text-xs flex-col justify-center sm:flex-row  absolute top-[100%] z-50 mt-2 bg-hoverwhite opacity-80 md:text-sm lg:text-lg ${open ? '' : 'hidden'}`}>
                            <button className="px-4 py-2 mb-2 hover:bg-bgyellow hover:text-hoverwhite"> <Link to='about/'>  ABOUT US  </Link> </button>

                            <Menu as="div" className="relative ">
                                <Menu.Button className="px-4 py-2 mb-2 hover:bg-bgyellow hover:text-hoverwhite flex items-center">
                                    <Link to='adopt/'> ADOPT </Link>
                                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                                </Menu.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95">
                                    <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right bg-hoverwhite opacity-80 focus:outline-none text-center flex flex-col gap-3">
                                        <Menu.Item>
                                            <Link to='application'> Adoption Application </Link>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Link to='adoptionlist'> Adopt Cats & Kittens </Link>
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>

                            <button className="px-4 py-2 mb-2 hover:bg-bgyellow hover:text-hoverwhite"> <Link to='contactus/'> CONTACT US </Link> </button>
                            <button className="px-4 py-2 mb-2 ml-4 bg-bgyellow text-hoverblack rounded-full hover:text-hoverwhite"> <Link to='donate/'> DONATE  </Link> </button>

                        </div>

                    </div>
                </div>
            </nav>
        </header >

    );
}

export default Nav;


