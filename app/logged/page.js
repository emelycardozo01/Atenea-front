"use client";

import Image from "next/image";
import { useRef } from "react";

export default function Home() {

const imagenPrueba = 'https://st.depositphotos.com/1004370/1489/i/380/depositphotos_14892579-stock-photo-drawing-a-chart.jpg';

    return (
        <div className="flex items-center border-[#223d86] border rounded-3xl">
            <div className="w-[50%] flex flex-col items-center justify-center p-10">
                <Image
                src={imagenPrueba}
                width={300}
                height={600}
                alt="img-athenea"
                objectFit="cover"
                className="w-[70%] rounded-tl-3xl rounded-bl-3xl"
                />
                <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>

            <div className="w-[50%] flex flex-col items-center justify-center p-10">
                <Image
                src={imagenPrueba}
                width={700}
                height={1000}
                alt="img-athenea"
                objectFit="cover"
                className="w-full rounded-tl-3xl rounded-bl-3xl"
                />
            </div>
        </div>
    )
}
