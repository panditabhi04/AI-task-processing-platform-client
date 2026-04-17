"use client";

import React, { useState } from 'react'
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import LoginImg from "../../../../public/auth/login.jpg"
import Link from 'next/link';

export default function LoginComponent({
    register,
    handleSubmit,
    errors,
    onSubmit,
    loading,
    error
}) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="h-screen overflow-hidden grid md:grid-cols-2">

            {/* LEFT SIDE */}
            <div className="flex items-center justify-center p-8">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full max-w-md space-y-6"
                >

                    <div>
                        <h1 className="text-3xl font-bold">Welcome Back</h1>
                        <p className="text-muted-foreground text-sm mt-2">
                            Enter your email and password to access your account.
                        </p>
                    </div>

                    {/* FORM */}
                    <div className="space-y-4">

                        {/* EMAIL */}
                        <div>
                            <label className="text-sm">Email</label>
                            <Input
                                placeholder="sellostore@company.com"
                                {...register("email")}
                            />
                            {errors?.email && (
                                <p className="text-red-500 text-sm">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* PASSWORD */}
                        <div>
                            <label className="text-sm">Password</label>

                            <div className="relative">
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    {...register("password")}
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>

                            {errors?.password && (
                                <p className="text-red-500 text-sm">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        <Button className="w-full" type="submit" disabled={loading}>
                            {loading ? "Logging in..." : "Log In"}
                        </Button>
                    </div>

                    <p className="text-sm text-center">
                        Don’t Have An Account?{" "}
                        <Link href="/singup" className="text-blue-600 cursor-pointer">
                            Singup Now
                        </Link>
                    </p>
                </form>
            </div>

            {/* RIGHT SIDE */}
            <div className="hidden md:block relative h-screen">
                <Image
                    src={LoginImg}
                    alt="login image"
                    fill
                    className="object-cover"
                />
            </div>

        </div>
    )
}