import React from "react";
import Inicio from "../components/Inicio";
import Image from "next/image"; 

const page = () => {
  return (
    <div>
      <div className="">
        <div className="animated fadeInUp rectangle">
        <div className="card-header text-center text-xl font-bold text-[#192752] flex flex-col p-[110px]">
          Rastrea el estado del pedido
        <input
                type="text"
                className="rounded-md m-4 py-4 px-7 text-center justify-center border-solid border-2 border-[#ccc] focus:outline-none text-lg"
                placeholder="Codigo del pedido"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <button className="rounded-xl py-3 bg-[#4186f0] text-[#ffffff] text-base w-70 mb-2 font-light">
              Consultar
            </button>


        <div>
          <div className="items-center flex flex-col mt-28">
            <Image
              src={"/images/LogoAzul.png"}  
              width={80}
              height={80}
              alt="logo-athenea"
              objectFit="cover"
            />
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default page;
