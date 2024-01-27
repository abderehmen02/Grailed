import { appConfig } from "@/config/appConfig";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { Monsieur_La_Doulaise } from "next/font/google";
import { NextResponse } from "next/server";

export const options : NextAuthOptions = {
    session : {
        strategy : "jwt"
    } ,
    
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
        clientId : "245407033853-mccgn4oaaim9dumkgum9bkotchqgo2dm.apps.googleusercontent.com" ,
        clientSecret :"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" ,
        
      })        ,
    ] ,
    
    callbacks : {
        async signIn({account , profile}){
            console.log("account" , account)
            console.log("profile" , profile)
            return true 
        }     } ,
    secret : process.env.NEXTAUTH_SECRET
} 