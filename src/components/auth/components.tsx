"use client"

import { signIn } from "next-auth/react"
import { signOut } from "next-auth/react"


export const GoogleSignIn = ()=>{
    return <button onClick={()=>signIn("google" , {redirect : false , callbackUrl : "/sell" })} >
        Sign In By Google
    </button>
}

export const SignOut = ()=>{
    return <button onClick={()=>signOut()} >logout</button>
}