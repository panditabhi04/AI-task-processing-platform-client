"use client";

import React, { useEffect } from "react";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { clearState, signupUser } from "../state/auth-slice";
import SignupComponent from "../components/singup-component";


export default function SignupContainer() {
    const router = useRouter();
    const dispatch = useDispatch();

    const { loading, error, success } = useSelector((state) => state.auth);

    const form = useForm({
        mode: "onChange",
    });

    const onSubmit = (data) => {
        if (data.password !== data.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const payload = { ...data };
        delete payload.confirmPassword;

        dispatch(signupUser(payload));
    };

    // ✅ Handle success redirect
    useEffect(() => {
        if (success) {
            router.push("/login");
            dispatch(clearState());
        }
    }, [success, router, dispatch]);

    return (
        <>
            {error && (
                <p className="text-red-500 text-center">{error}</p>
            )}

            <SignupComponent
                register={form.register}
                handleSubmit={form.handleSubmit}
                errors={form.formState.errors}
                onSubmit={onSubmit}
                loading={loading}
            />

            {loading && <p className="text-center">Loading...</p>}
        </>
    );
}