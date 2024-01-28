"use client"
import { signIn } from "next-auth/react"; // or "next-auth/react"
import { Checkbox, Modal } from "@mui/material";
import { useLoginModal } from "@/store/loginModal";
import {Box}from "@mui/material";
import { AppleSignInButton, FacebookSignInButton, GoogleSignInButton } from "@/components/auth/components";
import { PrimaryInput } from "@/ui/input";
import { useState } from "react";
import { PrimaryButton } from "@/components/ui/buttons";


export default function LoginModal() {
    const { isOpen , close , open}= useLoginModal()
    const [password , setPassword ] = useState("")
    const [email , setEmail ] = useState("")
  return (
    <Modal  open={isOpen} onClose={close}  >
        <Box sx={{bgcolor : 'white' , position : "absolute" , top : "50%" , left : "50%"   , transform: 'translate(-50%, -50%)' , width : '400px' , height : "400px" , display : "flex" , alignItems : "center" , justifyContent : "center" , flexDirection: "column" , paddingX : "60px" , gap : "32px" }}  >
    <div className="flex flex-col  gap-4">
    <h3 className="text-black font-semibold text-3xl" >Create an Account</h3>
    </div>
    <PrimaryInput value={email} onChange={(e)=>setEmail(e.target.value)} label="Email Address" />
    <PrimaryInput value={password} onChange={(e)=>setPassword(e.target.value)} label="Password" />
    <PrimaryButton >SIGN UP</PrimaryButton>
</Box>
</Modal>
  );
}
