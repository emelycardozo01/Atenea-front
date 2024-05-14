"use client";

import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const refUsuario = useRef(null);
  const refClave = useRef(null);

  const handleMenu = async () => {
    const data = {
      usuario: refUsuario.current.value,
      clave: refClave.current.value,
    };
    console.log(data);
    const resp = await enviarData(URL, data);
    console.log("respuesta desde el evento", resp);
  };

  return (
    <div className="flex w-full h-[100vh]">
      <div className="w-[50%] flex flex-col items-center justify-center">
        imagen 
        </div>

      <div className="w-[50%] flex flex-col items-center justify-center p-10">
        <div className="w-[50%] bg-red-500 h-auto">

          <div className="bg-blue-500">
            <div className="card-header text-left text-xl font-bold">
              Iniciar sesión
            </div>
            <div className="text-left text-xs font-normal text-[#D1D1D1]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="input-group mb-3">
              <input
                type="email"
                className="rounded-xl px-2"
                placeholder="Correo electronico"
                aria-label="Username"
                aria-describedby="basic-addon1"
                ref={refUsuario}
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                className="rounded-xl px-2"
                placeholder="Contraseña"
                aria-label="Contraseña"
                aria-describedby="basic-addon2"
                ref={refClave}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <button
              onClick={handleMenu}
              className="rounded-xl py-2 bg-gray-50 w-52 mb-3"
            >
              Iniciar
            </button>
            <button
              onClick={handleMenu}
              className="rounded-xl py-2 bg-gray-50 w-52 mb-3"
            >
              ¿Olvido su Contraseña?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
