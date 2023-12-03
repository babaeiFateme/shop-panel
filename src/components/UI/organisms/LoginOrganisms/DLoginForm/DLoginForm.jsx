"use client";

import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { setCookie } from "cookies-next";
import { yupResolver } from "@hookform/resolvers/yup";

import {
    DButton,
    DPasswordInput,
    DTextInput,
} from "@components/UI/atoms/client";
import { DInputField } from "@components/UI/molecules/client";

import { loginHttp } from "@core/services/api";
import { loginValidation } from "@core/utils";
const DLoginForm = () => {
    const router = useRouter();
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(loginValidation),
    });
    const { isLoding, mutate } = useMutation({
        mutationFn: (data) => loginHttp(data),
        onSuccess: (response) => {
            console.log(response);
            if (response.status == 201) {
                setCookie("token", response.data.access_token);
                toast.success("You are login.");
                router.push("/dashboard");
            }
        },
        onError: (error) => {
            console.log(error);
        },
    });
    const onSubmit = (data) => {
        mutate(data);
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <DInputField errors={errors} fieldName={"email"}>
                    <Controller
                        name={"email"}
                        control={control}
                        render={({ field: { name, onChange, value } }) => (
                            <DTextInput
                                name={name}
                                label={"Email *"}
                                onChange={onChange}
                                value={value}
                            />
                        )}
                    />
                </DInputField>
                <DInputField
                    errors={errors}
                    fieldName={"password"}
                    className="my-4"
                >
                    <Controller
                        name={"password"}
                        control={control}
                        render={({ field: { name, value, onChange } }) => (
                            <DPasswordInput
                                label={"Password *"}
                                name={name}
                                value={value}
                                onChange={onChange}
                            />
                        )}
                    />
                </DInputField>
                <DButton
                    type="submit"
                    loading={isLoding}
                    className="mt-4 bg-slate-900 w-full text-white h-[45px]"
                >
                    Login
                </DButton>
            </form>
        </>
    );
};
export default DLoginForm;
