"use client"
import { signIn } from "next-auth/react"; // or "next-auth/react"
import { Checkbox, FormControl, InputAdornment, InputLabel, MenuItem, Modal, Select, TextField } from "@mui/material";
import { useLoginModal } from "@/store/loginModal";
import {Box}from "@mui/material";
import { AppleSignInButton, FacebookSignInButton, GoogleSignInButton } from "@/components/auth/components";
import { PrimaryInput } from "@/ui/input";
import { useLayoutEffect, useState } from "react";
import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";
import { SignUpFields, signUpFieldError } from "@/types/errors/auth";
import { useSignUpModal } from "@/store/signUpModel";
import { cn } from "@/lib/tailwind";
import { boolean } from "zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios"
import { countries } from "@/constants/countries";


const stepsText : {title : string , descreption : string }[] = [{
    title  : "Create an Account" ,
    descreption : ""
} , {
    title : "Create a Username" ,
    descreption : "Congratulations, we've created your Grailed account! Now add a username. Don't worry, you can change it later."
} , {
    title : "Verify your phone number" ,
    descreption : "To use Grailed, we need to verify your phone number. We will never display this number publicly."
}]

export default function SignUpModal() {
    const { isOpen , close , open}= useSignUpModal()
    const [password , setPassword ] = useState("")
    const [email , setEmail ] = useState("")
    const [emailFieldError, setEmailFieldError] = useState("")
    const [passwordFieldError , setPasswordFieldError ] = useState("")
    const [userName , setUserName ] = useState("")
    const [userNameFieldError , setUserNameFieldError ] = useState<string | undefined>(undefined)
    const [signUpStep , setSignUpStep ] = useState(0)
    const [selectedCountry, setselectedCountry   ] = useState(countries[10])


console.log("sign up stem" , signUpStep ,stepsText[signUpStep])

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
 
 
 
 


    const { mutate : isUserNameExist  , isPending :isUserNameExistPending }= useMutation({
        mutationFn: async (val :string )=>{
            if(userName.length < 4)return 

const res = await  axios.post("/api/isValidUserName"  , {userName : val})
if(res?.data?.exist){
    setUserNameFieldError("useName already exists")
}
setUserNameFieldError(undefined)
return true 
        },
   
    onError: ()=>{
        setUserNameFieldError("can not validate the email")
    }
    }) 

const handleSecondStep = ()=>{ 
     if(!userNameFieldError && userName.length > 4 ) return  setSignUpStep(val=>++val)
     else if (!userNameFieldError && userName.length < 4) return setUserNameFieldError("username is too small")
}


 
    return (
    <Modal  open={isOpen} onClose={close}  >
        <Box sx={{bgcolor : 'white' , position : "absolute" , top : "50%" , left : "50%"   , transform: 'translate(-50%, -50%)' , width : '400px' , height : "400px" , display : "flex" , alignItems : "center" , justifyContent : "center" , flexDirection: "column" , paddingX : "60px" , gap : "32px" }}  >
    <div className="flex flex-col  gap-4">
    <h3 className="text-black font-semibold text-3xl" >{stepsText[signUpStep].title }</h3>
    </div>
{ signUpStep === 0 &&   <><PrimaryInput name="email" error={emailFieldError.length ? emailFieldError : undefined} value={email} onChange={(e)=>setEmail(e.target.value)} label="Email Address" />
    <PrimaryInput name="password" error={(passwordFieldError.length && password.length )? passwordFieldError : undefined}  onChange={(e)=>setPassword(e.target.value)} label="Password" />
    <SecondaryButton  onClick={()=>{isEmailExistsReq()}} aria-disabled={email === "" || isEmailExistsPending} className={cn("w-full" , {"bg-gray-100 text-gray-500 border-gray-300" : email === ""   || isEmailExistsPending } )} >SIGN UP</SecondaryButton> </>}
{ signUpStep === 1 && <><PrimaryInput  inputClassName={cn({"border-green-500 focus:border-green-500 focus:outline-none focus:ring-0 border-2" : userName.length >= 4 && !userNameFieldError})}  value={userName} onChange={(e)=>{setUserName(e.target.value) ; isUserNameExist(e.target.value)}} error={userNameFieldError} label="Username" ></PrimaryInput>
<SecondaryButton   onClick={handleSecondStep} aria-disabled={userName.length < 4 || isUserNameExistPending} className={cn("w-full" , {"bg-gray-100 text-gray-500 border-gray-300" : userName.length < 4   || isUserNameExistPending  } )} >SIGN UP</SecondaryButton> 
</>}
{ signUpStep === 2 && <>



    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Choose Your Country</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={selectedCountry.country}
    label="Choose Your Country"
    onChange={(e)=>setselectedCountry(countries.find(countryObj=>countryObj.country === e.target.value) || countries[10] )}
  >
{
    countries.map(country=><MenuItem value={country.country} >{country.country}</MenuItem>)
}
  </Select>
</FormControl>
<TextField
fullWidth
          label="With normal TextField"
          id="outlined-start-adornment"
          InputProps={{
            startAdornment: <InputAdornment position="start">{selectedCountry.code }</InputAdornment>,
          }}
        /><SecondaryButton   onClick={handleSecondStep} aria-disabled={userName.length < 4 || isUserNameExistPending} className={cn("w-full" , {"bg-gray-100 text-gray-500 border-gray-300" : userName.length < 4   || isUserNameExistPending  } )} >SIGN UP</SecondaryButton> 
</>
}


</Box>
</Modal>
  );
}
