import Footer from "../components/molecules/Footer";
import Hero from "../components/molecules/Hero";
import NavBar from "../components/molecules/NavBar";
import Section from "../components/molecules/Section";
import Fondo from "../assets/img/Hero.png"
import Service from "../components/molecules/Service";
import About from "../components/molecules/About";
function Home() {
    return (
        <>
            <div className="h-screen bg-cover" style={{ backgroundImage: `url(${Fondo})` }}>
                <NavBar />
                <Hero />
            </div>
            <Section />
            <Service />
            <About />
            <Footer />

        </>
    );
}

export default Home;