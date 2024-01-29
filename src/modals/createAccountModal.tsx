"use client"
import { signIn } from "next-auth/react"; // or "next-auth/react"
import { Modal } from "@mui/material";
import {Box}from "@mui/material";
import { AppleSignInButton, FacebookSignInButton, GoogleSignInButton } from "@/components/auth/components";
import { SecondaryButton } from "@/components/ui/buttons";
import { useCreateAccountModal, useLoginProviderModal, useSignUpWithEmailModal } from "@/store/authModals";


export default function LoginProvidersModal() {
    const { isOpen , close , open}= useCreateAccountModal()
    const {open : openSignUpWithEmailModal} = useSignUpWithEmailModal()
    const {open : openLoginProvidersModal} = useLoginProviderModal()
  return (
    <Modal  open={isOpen} onClose={close}  >
        <Box sx={{bgcolor : 'white' , position : "absolute" , top : "50%" , left : "50%"   , transform: 'translate(-50%, -50%)' , width : '400px' , height : "600px" , display : "flex" , justifyContent : "center" , flexDirection: "column" , paddingX : "60px" , gap : "32px" }}  >
    <div className="flex flex-col  gap-4">
    <h3 className="text-black font-semibold text-3xl" >Create an Account</h3>
    <p className="text-xs" >By creating an account on Grailed you&lsquo;ll be able to buy, sell, comment, and more.</p>
    </div>
    <div className="flex flex-col w-full gap-3" >
        <FacebookSignInButton/>
        <AppleSignInButton/>
        <GoogleSignInButton />

    </div>
    <div style={{borderTop: '0.01px solid #b1b3b1' }} className="w-full" ></div>
    <div className="flex flex-col gap-4" >
    <SecondaryButton onClick={()=>{openSignUpWithEmailModal() , close() }} className="font-bold" >CREATE ACCOUNT WITH EMAIL</SecondaryButton>
    <p className="text-xs" >Already have an account? <span onClick={()=>{  close(); openLoginProvidersModal() }} className="font-bold cursor-pointer" >Log in</span></p>
    </div>
<p className="font-semibold text-center text-xs" >    By creating an account, I accept Grailed&lsquo;s <span className="font-bold" >Terms of Service</span>. For Grailed&lsquo;s<span className="font-bold" > Privacy Policy</span>, click here.</p>
</Box>
</Modal>
  );
}
