"use client";

import Image from "next/image";
// import { useRouter } from "next/router";
import { useRef } from "react";

export default function Home() {
  const refUsuario = useRef(null);
  const refClave = useRef(null);
  // const router = useRouter()

  const handleMenu = async () => {
    const data = {
      usuario: refUsuario.current.value,
      clave: refClave.current.value,
    };
    console.log(data);
    const resp = await enviarData(URL, data);
    console.log("respuesta desde el evento", resp);
    // router.push('/logged')
  };

  const img2 =
    "https://st2.depositphotos.com/2931363/7602/i/950/depositphotos_76029417-stock-photo-just-sign-here-handsome-young.jpg";

  return (
    <div className="flex border-[#223d86] border rounded-3xl">
      <div className="w-[50%] flex flex-col items-center justify-start">
        <div className="">
          <Image
            src={"/images/ImgLateralInicio.jpg"}
            width={400}
            height={6000}
            alt="img-athenea"
            objectFit="cover"
            className="w-full rounded-tl-3xl"
          />
        </div>
        <span className="px-5 pb-6 text-center w-full flex flex-col ">
          <span className="font-semibold text-[#192752]">
            Teléfono
            <span className="font-normal text-sm text-[#353535]">
              {" (601)4802456 - (601)5021808"}
            </span>
          </span>
          <span className="font-semibold text-[#192752]">
            Correo 
            <span className="font-normal text-sm text-[#353535]">
              {" "}
              ateneacorporate@atenea.com
            </span>
          </span>
          <span className="font-semibold text-[#192752]">
            Fax
            <span className="font-normal text-sm text-[#353535]">
              {" "}
              223-158-17070
            </span>
          </span>
          <span className="font-semibold text-[#192752]">
            Dirección
            <span className="font-normal text-sm text-[#353535]">
              {" "}
              Calle 59 sur #45-78 norte
            </span>
          </span>
        </span>
      </div>

      <div className="w-[50%] flex flex-col items-center justify-center p-10">
        <div className="w-[70%] bg-[#FFFFFF] rounded-lg h-auto flex flex-col gap-10 p-10">
          <div>
            <Image
              src={"/images/LogoAzul.png"}
              width={100}
              height={100}
              alt="logo-athenea"
              objectFit="cover"
            />
          </div>

          <div className="">
            <div className="card-header text-left text-xl font-bold text-[#192752]">
              Iniciar sesión
            </div>
            <div className="text-left text-sm font-medium">
              En Atenea, entendemos que el tiempo es oro. Por eso, ofrecemos
              soluciones de envío rápidas, seguras y confiables para que tus
              paquetes lleguen a su destino sin demoras.
            </div>
          </div>

          <div className="flex flex-col mb-[10px] justify-center">
            <div className="input-group mb-3 flex flex-col">
              <label htmlFor="correo" className="font-medium">
                Correo electrónico
              </label>
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
              <label htmlFor="password" className="font-medium">
                Contraseña
              </label>
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
