import { signUpValidator } from "@/utils/validators/auth"
import StatusCodes from 'http-status-codes'
import {  generateLoginToken } from "@/utils/auth/tokens"
import bycrypt from 'bcrypt'
import { NextResponse } from "next/server"
import { googleUserModel } from "@/db/models/googleUser"
import { signUpZodErrors } from "@/types/errors/auth"
import { userModel } from "@/db/models/userModal"
import { asyncWrapperApi } from "@/utils/asyncWraper"
import { authConfig } from "@/config/authConfig"
import { apiResponse, errorMessage } from "@/utils/api"




export const POST   = asyncWrapperApi(async (req  ) =>{
  console.log("getting the request")
    const body = await  req.json()
    console.log("body")
        const  parsedBodyResult = signUpValidator.safeParse(body)
        console.log("pare" , parsedBodyResult)
        if(parsedBodyResult.success === false)  return new Response(JSON.stringify(parsedBodyResult.error)  ,{
            status : StatusCodes.BAD_REQUEST , 
        } )
        const googleUsersWithSameEmail = await googleUserModel().findOne({email : parsedBodyResult.data.email})
        if(googleUsersWithSameEmail)    return apiResponse(StatusCodes.BAD_REQUEST , errorMessage(signUpZodErrors.EmailSignedInWithGoogle.shortMessage))
 
            const usersWithSameEmail = await userModel().findOne({email :parsedBodyResult.data.email })
            if(usersWithSameEmail) return apiResponse(StatusCodes.BAD_REQUEST , errorMessage(signUpZodErrors.EmailExists.shortMessage))
            const newPassword = await bycrypt.hash(parsedBodyResult.data.password  , authConfig.bycryptSaltRounds )
            parsedBodyResult.data.password = newPassword 
            const newUserDb = await userModel().create({ ...parsedBodyResult.data , yearJoined : String(new Date().getFullYear()) , verified : false })
            console.log("new user db" , newUserDb)
            const newUser = {...newUserDb._doc}
            delete newUser.password
            const token =  generateLoginToken({ userId:  newUser._id.toString()})
            const response =   NextResponse.json(
                {
                  ...newUser,
                  token 
                },
                { status: StatusCodes.CREATED }
              )
            
            
              
            response.cookies.set({
                name: authConfig.tokenCookieName,
                value: token,
                httpOnly: true,
              })

            return response    
        })
