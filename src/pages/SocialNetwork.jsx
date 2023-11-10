import React from "react";
import NavBar from "../components/molecules/NavBar";
import Footer from "../components/molecules/Footer";
import Bussnissman from "../assets/img/bussnissman.png";
import Edificio from "../assets/img/edificio-de-oficinas.png"
import Reunion from "../assets/img/groups.svg";
import Evento from "../assets/img/events.svg";
import Guardado from "../assets/img/user-following.svg";
import "../assets/styles/Card.css";

const usuarios = [
  { id: 1, nombre: "Luis Antonio Ramirez Nucamendi", dedicación: "Investments in the stock market" },

];

const TarjetaUsuario = ({ usuario }) => (
  <div className="w-72 h-24 bg-blue-500 rounded-lg mt-5 mx-5 ">
    <div className=" max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md mb-8 ml-30">
    </div>
    <img src={Bussnissman} alt={`Foto de ${usuario.nombre}`} className="w-/12 h-auto object-cover" />

    <div className=" p-4">
      <h2 className=" text-xl font-bold mb-2">{usuario.nombre}</h2>
      <p className="text-lg font-semibold mb-2">{usuario.dedicación}</p>
      <div class="border-t border-blue-800 w-full"></div>
      <div className="flex flex-row mt-4">
        <p className="font-medium"> Groups </p>
        <img src={Reunion} className="ml-28 w-10 " />
      </div>
      <div className="flex flex-row mt-4">
        <p className="font-medium"> Events </p>
        <img src={Evento} className="ml-28 w-10 " />
      </div>
      <div className="flex flex-row mt-4">
        <p className="font-medium"> Hashtags followed </p>
        <img src={Guardado} className="ml-20  w-8 " />
      </div>

    </div>
  </div>
);




const empresas = [

  { id: 1, nombre: "America movil", tipo: "Technology", año: "2023", tamaño: "Median", descripcion: "It is a Mexican multinational telecommunications company based in Mexico City." },
  { id: 2, nombre: "Femsa", tipo: "Services", año: "2022", tamaño: "Big", descripcion: "We began operations in 1890 as a brewing company in Monterrey, Mexico." },
];
const TarjetaEmpresa = ({ empresa }) => (
  <div class="flex min-h-screen items-center justify-center ml-10 my-40">
    <div class="w-64 rounded-lg border-2 border-indigo-500 bg-transparent p-4 text-center shadow-lg dark:bg-gray-800">
      <figure class="mx-auto mb-10 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 dark:bg-indigo-600">

        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-person-fill text-white dark:text-indigo-300" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
        </svg>
        <img src={Edificio}></img>
      </figure>
      <h2 class="mt-4 text-xl font-bold text-indigo-600 dark:text-indigo-400">{empresa.nombre}</h2>
      <p class="mb-4 text-gray-600 dark:text-gray-300">{empresa.tipo}</p>
      <p class="mb-4 text-gray-600 dark:text-gray-300">{empresa.año}</p>
      <p class="mb-4 text-gray-600 dark:text-gray-300">{empresa.tamaño}</p>
      <p class="mb-4 text-gray-600 dark:text-gray-300">{empresa.descripcion}</p>
      <div class="flex items-center justify-center">
        <a href="#" class="rounded-full bg-green-600 px-4 py-2 text-white hover:bg-green-700 dark:bg-green-400 dark:hover:bg-green-500">View</a>
        <a href="#" class="ml-4 rounded-full bg-red-600 px-4 py-2 text-white hover:bg-red-400 dark:bg-red-700 dark:hover:bg-red-600">Delete</a>
      </div>
    </div>
  </div>
);



function SocialNetwork() {

  const filasDeUsuarios = [];
  for (let i = 0; i < usuarios.length; i += 5) {
    filasDeUsuarios.push(usuarios.slice(i, i + 5));
  }
  const filasDeEmpresas = [];
  for (let i = 0; i < empresas.length; i += 5) {
    filasDeEmpresas.push(empresas.slice(i, i + 5));
  }
  return (
    <>
      <div className="bg-black">
        <NavBar />
      </div>

      <div className="flex flex-wrap">
        {filasDeUsuarios.map((fila, index) => (
          <div key={index} className="flex justify-between w-full mb-96">
            {fila.map((usuario) => (
              <TarjetaUsuario key={usuario.id} usuario={usuario} />

            ))}

            {filasDeEmpresas.map((fila, index) => (
              <div key={index} className="flex justify-start w-full ">
                {fila.map((empresa) => (
                  <TarjetaEmpresa key={empresa.id} empresa={empresa} />
                ))}
              </div>
            ))}

          </div>


        ))}

      </div>
      <Footer className="mb-60" />
    </>
  );
}

export default SocialNetwork;