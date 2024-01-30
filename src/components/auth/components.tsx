"use client"

import { signIn } from "next-auth/react"
import { signOut } from "next-auth/react"


export const GoogleSignInButton  = ()=>{
    return     <button  onClick={()=>signIn("google" , {redirect : false , callbackUrl : "/sell" })} className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow w-full transition duration-150">
    <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
    <span>Login with Google</span>
    </button>
    
    }
    
export const SignOut = ()=>{
    return <button onClick={()=>signOut()} >logout</button>
}


export const FacebookSignInButton = ()=>{
    return <div onClick={()=>signIn("facebook" ,{redirect : false, callbackUrl : "/sell"})} className="flex w-full">
    <a href="#" className="flex w-full items-center justify-center  px-4 py-2 mt-2 space-x-3 text-sm text-center bg-blue-700 text-white transition-colors duration-200 transform border  dark:text-gray-300 dark:border-gray-300 hover:bg-gray-600 dark:hover:bg-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
        </svg>
        <span className="text-sm text-white dark:text-gray-200">Continue With Facebook</span></a>
</div>
}


export const AppleSignInButton = ()=>{
    return <button onClick={()=>signIn("credentials" , {email : "ldmsq" , password : "fdlqmsf" , redirect : false , callbackUrl : "/sell" }  )  } className="px-4 py-2 bg-black text-white" >
        <i className="bi bi-apple"></i>
        <span>continue with apple</span>
    </button>
} 