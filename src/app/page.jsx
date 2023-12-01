"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
const RootPage = () => {
    const router = useRouter();

    useEffect(() => {
        console.log(getCookie("token"));
        if (getCookie("token")) {
            console.log("wwww");
            router.push("/dashboard");
        } else {
            console.log(65);
            router.push("/login");
        }
    }, [getCookie("token")]);

    return <></>;
};

export default RootPage;
