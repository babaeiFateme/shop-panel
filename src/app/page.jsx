"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
const RootPage = () => {
    const { push } = useRouter();

    useEffect(() => {
        console.log(555555);
        console.log(getCookie("token"));
        if (getCookie("token")) {
            console.log("wwww");
            push("/dashboard");
        } else {
            console.log(65);
            push("/login");
        }
    }, [getCookie("token")]);

    return <></>;
};

export default RootPage;
