import "aos/dist/aos.css";
import { AboutUs } from "../../Data/About"
function About() {
    return (
        <>
            <section className="h-auto p-10">
                <h1 className="font-bold text-6xl text-[#232D3F] text-center mb-24">About Us</h1>

                <div className="grid grid-cols-5 gap-5 p-10 mb-10">
                    {AboutUs.map((about) => (
                        <div className="text-center shadow" data-aos="fade-up"
                            data-aos-duration="3000">
                            <div>
                                <img src={about.img} alt="" className="w-full" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold mb-3">{about.name}</h1>
                                <h3 className="text-lg">{about.rol}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>

    );
}

export default About;