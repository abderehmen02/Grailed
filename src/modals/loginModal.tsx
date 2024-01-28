"use client"
import { signIn } from "next-auth/react"; // or "next-auth/react"
import { Modal } from "@mui/material";
import { useLoginModal } from "@/store/loginModal";
import {Box}from "@mui/material";
import { FacebookSignInButton, GoogleSignInButton } from "@/components/auth/components";


export default function LoginModal() {
    const { isOpen , close , open}= useLoginModal()
  return (
    <Modal  open={isOpen} onClose={close}  >
        <Box sx={{bgcolor : 'white' , position : "absolute" , top : "50%" , left : "50%"   , transform: 'translate(-50%, -50%)' , width : '400px' , height : "400px" , display : "flex" , alignItems : "center" , justifyContent : "center" , flexDirection: "column" , paddingX : "60px" , gap : "32px" }}  >
    <div className="flex flex-col  gap-4">
    <h3 className="text-black font-semibold text-3xl" >Create an Account</h3>
    <p className="text-xs" >By creating an account on Grailed you'll be able to buy, sell, comment, and more.</p>
    </div>
    <div >
        <GoogleSignInButton />
        <FacebookSignInButton/>
    </div>
</Box>
</Modal>
  );
}
