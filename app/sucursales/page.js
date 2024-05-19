import React from "react";
import mapa from '../sucursales/page';

const page = () => {
  return (
    <div>
      <h3 className="card-header text-center text-2xl font-bold text-[#192752] flex flex-col py-14">Nuestras sucursales</h3>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.765009277078!2d-74.17046992429067!3d4.6359622422138695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c2c5651d0f5%3A0x19141b5d16100006!2sCra.%2087h%20%2340-79%2C%20Bogot%C3%A1!5e0!3m2!1ses-419!2sco!4v1716160790837!5m2!1ses-419!2sco"
          width="1000"
          height="600"
          // style="border-radius: 3rem;" 
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  );
}

export default page;
