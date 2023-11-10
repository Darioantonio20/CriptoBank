import "aos/dist/aos.css";
function Hero() {
    return (
        <>
            <div className="w-full grid-cols-2 grid justify-items-center text-white">
                <div>
                </div>
                <div className="text-right p-10 order-last mt-16">
                    <h1 className="text-8xl mb-5 font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-50" data-aos="fade-down"  data-aos-duration="3000">ScocialCript</h1>
                    <p className="text-xl" data-aos="fade-right" data-aos-duration="3000">Discover a new era of investing with SocialCript. With full transparency, we connect investors with companies, offering flexibility and security through our innovative cryptocurrency. We overcome the risks associated with investor incapacity and simplify the evaluation of companies. Join the financial revolution with SocialCript and empower your investment!</p>
                </div>
            </div>
        </>
    );
}

export default Hero;