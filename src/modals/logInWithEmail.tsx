

"use client"
import { signIn } from "next-auth/react"; // or "next-auth/react"
import { Checkbox, FormControl, InputAdornment, InputLabel, MenuItem, Modal, Select, TextField } from "@mui/material";
import {Box}from "@mui/material";
import { AppleSignInButton, FacebookSignInButton, GoogleSignInButton } from "@/components/auth/components";
import { PrimaryInput } from "@/ui/input";
import { useLayoutEffect, useState } from "react";
import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";
import { SignUpFields, signUpFieldError } from "@/types/errors/auth";
import { cn } from "@/lib/tailwind";
import { boolean } from "zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios"
import { countries } from "@/constants/countries";
import { useAuth } from "@/hooks/auth";
import { toast } from "sonner";
import { signInData, signUpDataType } from "@/utils/validators/auth";
import { useLoginWithEmailMoadl } from "@/store/authModals";



export default function LogInWithEmailModal() {
    const { isOpen , close , open}= useLoginWithEmailMoadl()
    const [password , setPassword ] = useState("")
    const [email , setEmail ] = useState("")
    const [emailFieldError, setEmailFieldError] = useState("")
    const [passwordFieldError , setPasswordFieldError ] = useState("")
    const [signUpStep , setSignUpStep ] = useState(0)
    const [selectedCountry, setselectedCountry   ] = useState(countries[10])
    const {signIn} = useAuth()
    const [phoneNumber , setPhoneNumber ] = useState("")


    const { mutate : signInReq , error , isPending :isEmailExistsPending} = useMutation({
        mutationFn: async (data : signInData)=>{
if(password.length < 4){
    setPasswordFieldError("password too small")
    throw new Error("password too small")
}
else if (email.length < 4){
    setEmailFieldError("email is too small")
}
await signIn(data)
return true 
        },


    onError: (err)=>{
        toast.error("request failed! please try again")
    }
    }) 
 
 
 
 



 
    return (
    <Modal  open={isOpen} onClose={close}  >
        <Box sx={{bgcolor : 'white' , position : "absolute" , top : "50%" , left : "50%"   , transform: 'translate(-50%, -50%)' , width : '400px' , height : "400px" , display : "flex" , alignItems : "center" , justifyContent : "center" , flexDirection: "column" , paddingX : "60px" , gap : "32px" }}  >
    <div className="flex flex-col  gap-4">
    <h3 className="text-black font-semibold text-3xl" >Log in</h3>
    </div>
    <PrimaryInput name="email" error={emailFieldError.length ? emailFieldError : undefined} value={email} onChange={(e)=>setEmail(e.target.value)} label="Email Address" />
    <PrimaryInput name="password" error={(passwordFieldError.length && password.length )? passwordFieldError : undefined}  onChange={(e)=>setPassword(e.target.value)} label="Password" />
    <SecondaryButton  onClick={()=>{signInReq({email, password})}} aria-disabled={email.length < 4 || password.length <4 } className={cn("w-full" , {"bg-gray-100 text-gray-500 border-gray-300" : email.length < 4 || password.length < 4 } )} >LOG IN</SecondaryButton> 
</Box>
</Modal>
  );
}
