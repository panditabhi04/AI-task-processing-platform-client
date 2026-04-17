"use client"
import React, { useEffect } from 'react'
import LoginComponent from '../components/login-component';
import { loginSchema } from '../validation/login-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { clearState, loginUser } from '../state/auth-slice';


export default function LoginContainer() {
    const router = useRouter()
    const dispatch = useDispatch()

    const { loading, error, success } = useSelector((state) => state.auth)

    const form = useForm({
        resolver: zodResolver(loginSchema),
        mode: "onChange",
    });

    const onSubmit = (data) => {
        dispatch(loginUser(data))
    };

    // handle success redirect
    useEffect(() => {
        if (success) {
            router.push("/")
            dispatch(clearState())
        }
    }, [success])

    return (
        <div>
            <LoginComponent
                register={form.register}
                handleSubmit={form.handleSubmit}
                errors={form.formState.errors}
                onSubmit={onSubmit}
                loading={loading}
                error={error}
            />
        </div>
    )
}