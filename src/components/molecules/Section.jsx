import ilustracions from "../../assets/img/Ilustracions1.svg"
function Section() {
    return (
        <>
            <section class="bg-white dark:bg-gray-900">
                <div class="gap-10 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div class="font-light  sm:text-lg dark:text-gray-400">
                        <h2 class="mb-4 text-7xl tracking-tight font-extrabold text-[#FAAE45] dark:text-white">Titulo</h2>
                        <p class="mb-4 font-normal">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                    </div>
                    <div class="grid place-items-center mt-8">
                        <img class="w-96 rounded-lg" src={ilustracions} alt="office content 1" />
                    </div>
                </div>
            </section>
        </>

    );
}

export default Section;