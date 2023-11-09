import { dataservice } from "../../Data/dataservices"
function Service() {
    return (

        <>
            <section className="h-auto p-10">
                <h1 className="text-6xl font-bold text-center text-[#232D3F] mb-40">Services</h1>
                <div className="grid grid-cols-2 place-items-center gap-5 mb-20">
                    {dataservice.map((service) => (
                        <div className="flex h-auto w-96 items-center gap-10 p-2">
                            <div className=" ">
                               <img src={service.img} alt="" className="h-16 w-16 object-contain rounded-full border-2 border-indigo-600" />
                            </div>
                            <div>
                                <h2 className="font-medium mb-5">{service.titulo}</h2>
                                <p className="text-sm">{service.parrafo}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </>

    );
}

export default Service;