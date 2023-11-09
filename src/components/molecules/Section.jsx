import ilustracions from "../../assets/img/Ilustracions1.svg"
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
function Section() {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <>
            <section class="bg-white dark:bg-gray-900">
                <div class="gap-10 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div class="font-light  sm:text-lg dark:text-gray-400" data-aos="fade-right" data-aos-duration="3000">
                        <h2 class="mb-4 text-6xl tracking-tight font-extrabold text-[#FAAE45] dark:text-white">Invest in the Future with Socialcript Crypto</h2>
                        <p class="mb-4 font-normal">Discover an exciting world of cryptocurrency investment opportunities with Socialcript. Connect with innovative companies that are shaping the digital financial landscape. At Socialcript Crypto, you not only share financial experiences, but also create a path to sustainable economic success. Our platform gives you the freedom to explore cryptocurrency investments safely and efficiently.</p>
                    </div>
                    <div class="grid place-items-center mt-8">
                        <img class="w-96 rounded-lg" src={ilustracions} alt="office content 1" data-aos="fade-down" data-aos-duration="3000" />
                    </div>
                </div>
            </section>
        </>

    );
}

export default Section;