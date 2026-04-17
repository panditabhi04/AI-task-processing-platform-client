"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import SignupImg from "../../../../public/auth/login.jpg"
import Link from "next/link";

export default function SignupComponent({
    register,
    handleSubmit,
    errors,
    onSubmit,
    loading
}) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    return (
        <div className="h-screen overflow-hidden grid md:grid-cols-2">

            {/* LEFT */}
            <div className="flex items-center justify-center p-8">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full max-w-md space-y-6"
                >
                    <div>
                        <h1 className="text-3xl font-bold">Create Account</h1>
                    </div>
                    <div className="space-y-4">
                        {/* NAME */}
                        <div>
                            <label className="text-sm">Name</label>
                            <Input {...register("name")} placeholder="Your name" />
                            {errors?.name && (
                                <p className="text-red-500 text-sm">{errors.name.message}</p>
                            )}
                        </div>
                        {/* EMAIL */}
                        <div>
                            <label className="text-sm">Email</label>
                            <Input {...register("email")} placeholder="example@mail.com" />
                            {errors?.email && (
                                <p className="text-red-500 text-sm">{errors.email.message}</p>
                            )}
                        </div>
                        {/* PHONE */}
                        <div>
                            <label className="text-sm">Phone Number</label>
                            <Input {...register("phoneNumber")} placeholder="9876543210" />
                            {errors?.phoneNumber && (
                                <p className="text-red-500 text-sm">
                                    {errors.phoneNumber.message}
                                </p>
                            )}
                        </div>

                        {/* PASSWORD */}
                        <div>
                            <label className="text-sm">Password</label>

                            <div className="relative">
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    {...register("password")}
                                    placeholder="••••••••"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
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
                        {/* CONFIRM PASSWORD */}
                        <div>
                            <label className="text-sm">Confirm Password</label>

                            <div className="relative">
                                <Input
                                    type={showConfirmPassword ? "text" : "password"}
                                    {...register("confirmPassword")}
                                    placeholder="••••••••"
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword(!showConfirmPassword)
                                    }
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff size={18} />
                                    ) : (
                                        <Eye size={18} />
                                    )}
                                </button>
                            </div>

                            {errors?.confirmPassword && (
                                <p className="text-red-500 text-sm">
                                    {errors.confirmPassword.message}
                                </p>
                            )}
                        </div>
                        <Button className="w-full" type="submit" disabled={loading}>
                            {loading ? "Creating Account..." : "Sign Up"}
                        </Button>
                    </div>

                    <p className="text-sm text-center">
                        Already have an account?{" "}
                        <Link href="/login" className="text-blue-600">
                            Login
                        </Link>
                    </p>
                </form>
            </div>

            {/* RIGHT */}
            <div className="hidden md:block relative h-screen">
                <Image src={SignupImg} alt="signup" fill className="object-cover" />
            </div>
        </div>
    );
}