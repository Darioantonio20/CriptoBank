import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import ImgProfile from "../../assets/img/imgProfile.png";

function NavBar() {
    return (
        <>
            <nav>
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/">
                        <img src={Logo} class="h-24 mr-1" alt="Flowbite Logo" />
                    </Link>
                    <div class="items-center justify-between gap-10  hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to="/">
                                    <a href="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#F0C75E]  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/socialNetwork">
                                    <a href="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#F0C75E] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Social network</a>
                                </Link>
                            </li>
                            <li>
                                <button type="button" class="text-white text-white bg-[#0A8100] hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Get started</button>
                            </li>
                        </ul>
                        <div class="flex items-center md:order-2">
                            <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                <img src={ImgProfile} class="w-8 h-8 object-cover object-center" alt="user photo" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;