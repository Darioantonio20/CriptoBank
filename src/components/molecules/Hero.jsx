import HeroImg from "../../assets/img/Hero.png";

function Hero() {
    return (
        <>
            <div className="w-full grid-cols-2 grid justify-items-center text-white">
                <div>
                </div>
                <div className="text-right p-10 order-last mt-36">
                    <h1 className="text-7xl mb-5 font-semibold">ScocialCript</h1>
                    <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sint doloremque architecto commodi possimus.
                        Nobis mollitia quod numquam perferendis quaerat quia facere sint, quae aperiam doloribus culpa modi doloremque incidunt.</p>
                </div>
            </div>
        </>
    );
}

export default Hero;