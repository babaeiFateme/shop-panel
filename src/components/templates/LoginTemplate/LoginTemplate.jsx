"use client";

import Image from "next/image";
import Link from "next/link";

import { DLoginForm } from "@components/UI/organisms/LoginOrganisms";

import logo from "@public/images/Authentication-rafiki.png";

const LoginTemplate = () => {
    return (
        <div className="w-full sm:max-w-[500px] rounded-2xl p-6 bg-white">
            <Image
                src={logo}
                alt="pasmand"
                className="max-w-[200] block mx-auto mb-2"
            />
            <div className="text-center font-bold text-xl md:text-2xl mb-2 mt-3 text-blackText">
                fateme's shop panel
            </div>
            <Link
                href="/register"
                className={
                    "font-semibold text-base text-center flex justify-center text-blueLink mb-8 "
                }
            >
                register ?
            </Link>

            <DLoginForm />
        </div>
    );
};

export default LoginTemplate;
