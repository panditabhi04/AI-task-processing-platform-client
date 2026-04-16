// "use client"
// import React from 'react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Checkbox } from "@/components/ui/checkbox"
// import Image from "next/image"
// import LoginImg from "../../../../../../public/auth/login.jpg"
// export default function LoginComponent() {
//     return (
//         // <div className="min-h-screen grid md:grid-cols-2">
//         <div className="h-screen overflow-hidden grid md:grid-cols-2">

//             {/* LEFT SIDE */}
//             <div className="flex items-center justify-center p-8">
//                 <div className="w-full max-w-md space-y-6">

//                     <div>
//                         <h1 className="text-3xl font-bold">Welcome Back</h1>
//                         <p className="text-muted-foreground text-sm mt-2">
//                             Enter your email and password to access your account.
//                         </p>
//                     </div>

//                     {/* FORM */}
//                     <div className="space-y-4">

//                         <div>
//                             <label className="text-sm">Email</label>
//                             <Input placeholder="sellostore@company.com" />
//                         </div>

//                         <div>
//                             <label className="text-sm">Password</label>
//                             <Input type="password" placeholder="••••••••" />
//                         </div>

//                         <div className="flex items-center justify-between text-sm">
//                             {/* <div className="flex items-center gap-2">
//                   <Checkbox id="remember" />
//                   <label htmlFor="remember">Remember Me</label>
//                 </div> */}
//                             <a href="#" className="text-blue-600 hover:underline">
//                                 Forgot Your Password?
//                             </a>
//                         </div>

//                         <Button className="w-full">Log In</Button>
//                     </div>

//                     {/* DIVIDER */}
//                     {/* <div className="flex items-center gap-2">
//             <div className="flex-1 h-px bg-gray-200" />
//             <span className="text-xs text-muted-foreground">
//               Or Login With
//             </span>
//             <div className="flex-1 h-px bg-gray-200" />
//           </div> */}

//                     {/* SOCIAL
//           <div className="grid grid-cols-2 gap-4">
//             <Button variant="outline">Google</Button>
//             <Button variant="outline">Apple</Button>
//           </div> */}

//                     <p className="text-sm text-center">
//                         Don’t Have An Account?{" "}
//                         <span className="text-blue-600 cursor-pointer">
//                             Register Now
//                         </span>
//                     </p>
//                 </div>
//             </div>

//             {/* RIGHT SIDE */}
//             <div className="hidden md:block relative h-screen">
//                 <Image
//                     src={LoginImg}
//                     alt="login image"
//                     fill
//                     className="object-cover"
//                 />
//             </div>

//         </div>
//     )
// }

"use client";

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import LoginImg from "../../../../../../public/auth/login.jpg"

export default function LoginComponent({
    register,
    handleSubmit,
    errors,
    onSubmit
}) {
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
                            <Input
                                type="password"
                                placeholder="••••••••"
                                {...register("password")}
                            />
                            {errors?.password && (
                                <p className="text-red-500 text-sm">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        <div className="flex justify-end text-sm">
                            <a href="#" className="text-blue-600 hover:underline">
                                Forgot Your Password?
                            </a>
                        </div>

                        <Button className="w-full" type="submit">
                            Log In
                        </Button>
                    </div>

                    <p className="text-sm text-center">
                        Don’t Have An Account?{" "}
                        <span className="text-blue-600 cursor-pointer">
                            Register Now
                        </span>
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