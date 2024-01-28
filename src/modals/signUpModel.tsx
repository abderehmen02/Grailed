"use client"
import { signIn } from "next-auth/react"; // or "next-auth/react"
import { Checkbox, Modal } from "@mui/material";
import { useLoginModal } from "@/store/loginModal";
import {Box}from "@mui/material";
import { AppleSignInButton, FacebookSignInButton, GoogleSignInButton } from "@/components/auth/components";
import { PrimaryInput } from "@/ui/input";
import { useState } from "react";
import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";
import { SignUpFields, signUpFieldError } from "@/types/errors/auth";
import { useSignUpModal } from "@/store/signUpModel";
import { cn } from "@/lib/tailwind";
import { boolean } from "zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios"


export default function SignUpModal() {
    const { isOpen , close , open}= useSignUpModal()
    const [password , setPassword ] = useState("")
    const [email , setEmail ] = useState("")
    const [emailFieldError, setEmailFieldError] = useState("")
    const [passwordFieldError , setPasswordFieldError ] = useState("")
    const [signUpStep , setSignUpStep ] = useState(1)
    const { mutate : isEmailExistsReq , error , isPending :isEmailExistsPending} = useMutation({
        mutationFn: async ()=>{
if(password.length < 4){
    setPasswordFieldError("password too small")
    throw new Error("password too small")
}
const res = await  axios.post("/api/isEmailExists"  , {email})
console.log("res " , res)
if(res?.data?.exist){

    setEmailFieldError("email already exists")
    throw new Error("email exists")
}
return true 
        },
    onSuccess: ()=>     {
        console.log("succuss")
        setSignUpStep((val)=>++val)
    } , 
    onError: ()=>{
        setEmailFieldError("can not validate the email")
    }
    }) 
    const  [fieldsErrors , setFieldsErrors ] = useState<signUpFieldError[]>([])
  return (
    <Modal  open={isOpen} onClose={close}  >
        <Box sx={{bgcolor : 'white' , position : "absolute" , top : "50%" , left : "50%"   , transform: 'translate(-50%, -50%)' , width : '400px' , height : "400px" , display : "flex" , alignItems : "center" , justifyContent : "center" , flexDirection: "column" , paddingX : "60px" , gap : "32px" }}  >
    <div className="flex flex-col  gap-4">
    <h3 className="text-black font-semibold text-3xl" >Create an Account</h3>
    </div>
{ signUpStep === 1 &&   <><PrimaryInput name="email" error={emailFieldError.length ? emailFieldError : undefined} value={email} onChange={(e)=>setEmail(e.target.value)} label="Email Address" />
    <PrimaryInput name="password" error={passwordFieldError.length ? passwordFieldError : undefined}  onChange={(e)=>setPassword(e.target.value)} label="Password" />
    <SecondaryButton  onClick={()=>{isEmailExistsReq()}} aria-disabled={email === "" || isEmailExistsPending} className={cn("w-full" , {"bg-gray-100 text-gray-500 border-gray-300" : email === ""   || isEmailExistsPending } )} >SIGN UP</SecondaryButton> </>}
{ signUpStep === 2 && <><div>  step two</div></>}

</Box>
</Modal>
  );
}
