import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
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
        }) ,
      GoogleProvider({
        clientId : process.env.GoogleClientId as string ,
        clientSecret : process.env.GoogleClientSecret as string ,
      })        ,
    ] ,
    secret : process.env.NEXTAUTH_SECRET
} 