import React from "react";
import Inicio from "../components/Inicio";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex border-[#223d8669] border rounded-3xl justify-center h-30%">
        <div className="card-header text-center text-xl font-bold text-[#192752] flex flex-col p-[70px]">
          <h3>Rastrea el estado del pedido</h3>
          <input
            type="text"
            className="rounded-md m-4 py-4 px-7 text-center justify-center border-solid border-2 border-[#ccc] focus:outline-none text-lg"
            placeholder="Codigo del pedido"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <button className="rounded-xl py-3 bg-[#4186f0] text-[#ffffff] text-base font-light w-full">
            Consultar
          </button>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center p-14">
        <Image
          src={"/images/LogoAzul.png"}
          width={80}
          height={80}
          alt="logo-athenea"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default page;
