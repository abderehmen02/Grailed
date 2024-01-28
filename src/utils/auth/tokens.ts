import { authConfig } from '@/config/authConfig';

import { addDays, addSeconds, format } from 'date-fns'
import jwt from 'jsonwebtoken'
const { v4: uuidv4 } = require("uuid");




export const  AuthServices =  {
    GOOGLE :  "GOOGLE" ,   
    NATIVE_USER : "NATIVE_USER"
} as const


const AuthServisesArray = Object.values(AuthServices)

export type AuthService  = typeof AuthServisesArray[number]
export type UserStoredWithToken = {
    userId: string  , 
    authService? : AuthService
    }
    
    export enum TokenTypes {
        RESET_PASSWORD = "reset-password" 
    }
    
    
    export interface ResetPasswordTokenInfo {
        type : TokenTypes.RESET_PASSWORD , 
        userId : string ,
    }


const JwtSignature = process.env.JWT_SECRET_KEY

export const generateLoginToken : (data : UserStoredWithToken  ) =>string =(data)=>{
if(!JwtSignature) throw new Error("No jwt signature in the envirement variables")
return jwt.sign(data   ,  JwtSignature  , {expiresIn : authConfig.tokenExpiresIn} )
}


export  const verifyLoginToken = (token : string  ) : UserStoredWithToken =>{2
    if(!JwtSignature) throw new Error("No jwt signature in the envirement variables")
    if(!token) throw new Error("No token provided in the verify token util")
    return jwt.verify(token , JwtSignature) as UserStoredWithToken
}







export const generateToken  = (data : unknown ,options?: jwt.SignOptions ) : string =>{
    if(!JwtSignature) throw new Error("No jwt signature in the envirement variables")
    if(  typeof data === "string"  || ( typeof data === "object"  && data !== null )   )  return jwt.sign(data   ,  JwtSignature  , options )    
    throw new Error("can not generate token with the provided data")
}

export const verifyToken = (token : string) : unknown =>{
    if(!token) throw new Error("No token provided")
    if(!JwtSignature) throw new Error("No jwt signature provided ")
    return jwt.verify(token , JwtSignature)
}



export const isTokenExpired = (token  : string) : boolean=>{
    if(!JwtSignature) throw new Error("No jwt signature!")
 
    const decodedToken = jwt.decode(token  )

    if(decodedToken === null || typeof decodedToken === "string") {
        console.error("can not get the expire date of the token!")
        return false
    }
    const expireDate = decodedToken.exp 
    if(!expireDate) {
        console.error("can not get the expire date of the token!")
        return false
    }
   const currentDate = Date.now() / 1000
   return currentDate > expireDate
} 