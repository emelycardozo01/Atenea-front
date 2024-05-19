import React from "react";
import Inicio from "../components/Inicio";
import Image from "next/image"; 

const page = () => {
  return (
    <div>
      <div className="">
        <div className="card-header text-center text-xl font-bold text-[#192752] flex flex-col p-40">
          Rastrea el pedido
        <input
                type="text"
                className="rounded-md m-4 py-4 px-7 text-center justify-center border-solid border-2 border-[#ccc] focus:outline-none text-lg"
                placeholder="Codigo del pedido"
                aria-label="Username"
                aria-describedby="basic-addon1"
                
              />
        <div>
          <div className="items-center flex flex-col">
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
  );
};

export default page;
