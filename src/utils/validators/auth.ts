import { signUpZodErrors ,  signInFieldError, signInFieldErrors } from "@/types/errors/auth"
import {z} from "zod"
import { emailRegEx } from "@/config/authConfig"


export const signUpValidator = z.object({
    password : z.string().min(8,     signUpZodErrors.shortPassword.shortMessage ) ,
    country : z.string() ,
    email : z.string().regex(emailRegEx ,      signUpZodErrors.invalidEmail.shortMessage) ,
    phoneNumber : z.string() 
}) 
export const isEmailExistsValidator = z.object({
    email:  z.string().regex(emailRegEx ,      signUpZodErrors.invalidEmail.shortMessage) ,
})

export const isValidUserNameValidator = z.object({
    userName:  z.string() ,
})


export const signInValidator = z.object({
    userName : z.string().min(4 , signInFieldErrors.invalidUsername.shortMessage ).max(50    ,  signInFieldErrors.invalidUsername.shortMessage) ,
    password : z.string().min(8,     signInFieldErrors.invalidPassword.shortMessage ) ,

})


export const getUsersValidator = z.object({
    users: z.array(z.string())
})

export const sendResetPasswordEmailValidator = z.object({
    userIdentifier : z.string()
})

export const resetPasswordValidator = z.object({
    token : z.string()  ,
    newPassword: z.string() 
})

export type SendResetPasswordEmailData = typeof sendResetPasswordEmailValidator._type
export type ResetPasswordData = typeof resetPasswordValidator._type


export type signInDataType = typeof signInValidator._type
export type signUpDataType = typeof signUpValidator._type