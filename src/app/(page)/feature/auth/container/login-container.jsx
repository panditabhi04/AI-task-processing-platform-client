"use client"
import React from 'react'
import LoginView from "@/app/(page)/feature/auth/components/login-component"
import { loginSchema } from '../validation/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

export default function LoginContainer() {
    const router = useRouter()
    const form = useForm({
        resolver: zodResolver(loginSchema),
        mode: "onChange",
    });
    // console.log("useForm : ", form.handleSubmit);

    const onSubmit = (data) => {
        console.log("LOGIN DATA:", data);
        router.push("/")
    };
    return (
        <div>
            <LoginView
                register={form.register}
                handleSubmit={form.handleSubmit}
                errors={form.formState.errors}
                onSubmit={onSubmit}
            />
        </div>
    )
}
