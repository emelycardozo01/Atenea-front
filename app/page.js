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

  const img =
    "https://t3.ftcdn.net/jpg/06/17/13/26/240_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg";

  const img2 = 
    "https://st3.depositphotos.com/1000816/19162/i/1600/depositphotos_191624638-stock-photo-business-leader-shaking-hands-with.jpg";

  return (
    <div className="flex items-center border-[#223d86] border rounded-3xl">
      <div className="w-[50%] flex flex-col items-center justify-center">
          <Image
              src={img2}
              width={700}
              height={1000}
              alt="img-athenea"
              objectFit="cover"
              className="w-full"
            />
      </div>

      <div className="w-[50%] flex flex-col items-center justify-center p-10">
        <div className="w-[50%] bg-[#FFFFFF] rounded-lg h-auto flex flex-col gap-10 p-10">
          <div>
            <Image
              src={img}
              width={100}
              height={100}
              alt="logo-athenea"
              objectFit="cover"
              className="rounded-full"
            />
          </div>

          <div className="">
            <div className="card-header text-left text-xl font-bold text-[#192752]">
              Iniciar sesión
            </div>
            <div className="text-left text-sm font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when
            </div>
          </div>

          <div className="flex flex-col mb-[10px] justify-center">
            <div className="input-group mb-3 flex flex-col">
              <label htmlFor="correo" className="font-medium">Correo Electrónico</label>
              <input
                type="email"
                className="rounded-md p-3 border-solid border-2 border-[#ccc] focus:outline-none text-xs"
                placeholder="example@correo.com"
                aria-label="Username"
                aria-describedby="basic-addon1"
                ref={refUsuario}
              />
            </div>
            <div className="input-group mb-3 flex flex-col">
              <label htmlFor="password" className="font-medium">Contraseña</label>
              <input
                id="password"
                type="password"
                className="rounded-md p-3 border-solid border-2 border-[#ccc] focus:outline-none text-xs"
                placeholder="*********"
                aria-label="Contraseña"
                aria-describedby="basic-addon2"
                ref={refClave}
              />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <button
              onClick={handleMenu}
              className="rounded-xl py-2 bg-[#4186f0] text-[#ffffff] text-medium hover:bg-[#2b68e5] w-52 mb-3"
            >
              Iniciar sesión
            </button>
            <div className="flex w-full items-center">
              <hr className="w-full mr-4" />
              <button
                onClick={handleMenu}
                className="text-[#D1D1D1] text-xs font-normal italic hover:text-[#000000] whitespace-nowrap"
              >
                ¿Olvidó su contraseña?
              </button>
              <hr className="w-full ml-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
