"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
const RootPage = () => {
    const router = useRouter();

    useEffect(() => {
        //check if there is token in cookie
        if (getCookie("token")) {
            console.log("hjjgygy");
            //redirect to dashboard
            router.push("/dashboard");
        } else {
            //redirect to login of user
            push("/login");
        }
    }, []);

    return <></>;
};

export default RootPage;
