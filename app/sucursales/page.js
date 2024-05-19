import React from "react";
import mapa from '../sucursales/page';

const page = () => {
  return (
    <div>
      <h3 className="card-header text-center text-2xl font-bold text-[#192752] flex flex-col py-14">Nuestras sucursales</h3>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9427592744305!2d-74.07214752429059!3d4.604272442484444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a24ab60723%3A0x36bc56415ab22543!2sAVIATEC!5e0!3m2!1ses-419!2sco!4v1716158134008!5m2!1ses-419!2sco"
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
