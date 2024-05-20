import React from "react";
import Inicio from "../components/Inicio";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex border-[#223d86] border rounded-3xl p-1.5 px-20 w-[50%] h-[60%] items-center">
      <div className="">
        <div className="mb-4 card-header text-4xl font-bold text-[#192752] text-center">
          Nosotros
        </div>

        <div className="mb-2 card-header text-center text-2xl font-bold text-[#192752]">
          Misión
        </div>
        <div className="mb-3 text-center text-sm font-medium">
          En nuestra empresa de envíos multinacional, nuestra misión es superar
          las expectativas de nuestros clientes al proporcionar servicios de
          envío confiables, seguros y eficientes en todo el mundo. Nos
          comprometemos a ofrecer soluciones logísticas integrales que impulsen
          el éxito de nuestros clientes, facilitando el comercio global y
          conectando comunidades de manera sostenible.
        </div>

        <div className="mb-2 card-header text-center text-2xl font-bold text-[#192752]">
          Visión
        </div>
        <div className="mb-3 text-center text-sm font-medium">
          Nos esforzamos por ser líderes innovadores en la industria de envíos,
          aprovechando la tecnología de vanguardia y una red logística global
          para brindar soluciones personalizadas y servicios de calidad
          excepcional. Nuestra visión es ser reconocidos como el socio preferido
          para el transporte internacional, impulsando el crecimiento económico
          y contribuyendo positivamente al desarrollo sostenible de las
          sociedades en las que operamos.
        </div>
        <div>
          <div className="items-center flex flex-col">
            <Image
              src={"/images/LogoAzul.png"}
              width={75}
              height={75}
              alt="logo-athenea"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
