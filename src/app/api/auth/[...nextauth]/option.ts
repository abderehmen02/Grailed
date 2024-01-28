import { appConfig } from "@/config/appConfig";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { Monsieur_La_Doulaise } from "next/font/google";
import { NextResponse } from "next/server";
import { Session } from "inspector";

export const options : NextAuthOptions = {
    secret : "KhsO5eAPAhdbajSfRUjvAHL9oLTJY6xBM++k2mSN3TU=" ,
    session  : {
        strategy : "jwt"
    } ,
    providers : [
        CredentialsProvider({
            type : "credentials" ,
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
                console.log("authonticating")
            
             return {id: "kdm" , name : "dsklq" , password : "dkml"}
            }
        }) ,
    FacebookProvider({
        clientId : "688179286855528" ,
        clientSecret : "5215f073d572884435409ed09d663fd5" ,
    }) ,
      GoogleProvider({
        clientId : "245407033853-mccgn4oaaim9dumkgum9bkotchqgo2dm.apps.googleusercontent.com" ,
        clientSecret :"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" ,
        
      })        ,
    ] ,
    
    callbacks : {
        // async signIn({account , profile}){
        //     return true 
        // }  ,
    //    async  jwt({token, user , account}) {
    //     console.log("running jwt")
    //         if (user) {
    //             token = {...token , id: 'gdfsùldùfqkl'  , provider: account?.provider }
    //         }
        
    //         return token
    //     }  ,
    //     session({session , token}){
    //         console.log("calling the sesssion" , session , "token" , token)
    //         return ({
    //             ...session ,
    //             user : {
    //                 ...session.user ,
    //                 id : "kmdqksm"
    //             }
    //         })
    //     }
        // session({ session, token }) {
        //     console.log("session")
        //     return { ...session,
        //       user: { ...session.user,
        //         id: token.id,
        //         provider : token.provider
        //       }
        //     }
        //   },
        
    
    } ,
} 