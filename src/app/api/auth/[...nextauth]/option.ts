import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Monsieur_La_Doulaise } from "next/font/google";

export const options : NextAuthOptions = {
    providers : [
        CredentialsProvider({
            name : "Credentials" ,
            credentials : {
                username : {
                    label : "Username" ,
                    type : "text",
                } ,
                password :{
                    label : "Password" ,
                    type : "text" ,
                } 
            } ,
             async authorize (credentials){
             if(credentials?.username){
             }
             return {id: "kdm" , name : "dsklq" , password : "dkml"}
            }
        })
    ] ,
} 