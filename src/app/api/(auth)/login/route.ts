
import { signInValidator } from "@/utils/validators/auth";
import StatusCodes from 'http-status-codes'
import bycrypt from 'bcrypt'
import { signInFieldErrors } from "@/types/errors/auth";
import { generateLoginToken } from "@/utils/auth/tokens";
import { NextResponse } from "next/server";
import { asyncWrapperApi } from "@/utils/asyncWraper";
import { apiResponse, errorMessage } from "@/utils/api";
import { userModel } from "@/db/models/userModal";
import { authConfig } from "@/config/authConfig";



export const POST  = asyncWrapperApi(async (req )=>{
  console.log("getting a req")
    const body = await req.json()
    console.log("body" , body)
    const parsedBodyResult = signInValidator.safeParse(body)
    console.log("parsed result" , parsedBodyResult)
    if(!parsedBodyResult.success) return  apiResponse(StatusCodes.BAD_REQUEST , parsedBodyResult.error )
    const {email , password} = parsedBodyResult.data
    const user = await userModel().findOne({email})
    console.log("user" , user) 
    if(!user) return apiResponse(StatusCodes.BAD_REQUEST , errorMessage(signInFieldErrors.noUserFound.shortMessage))
    const isPasswordTrue = await  bycrypt.compare(password , user.password )
    if(!isPasswordTrue)  return apiResponse(StatusCodes.BAD_REQUEST , errorMessage(signInFieldErrors.incorrectPassword.shortMessage) ) 
    const token = generateLoginToken({userId : user._id.toString() })
    const response =   NextResponse.json(
        {
          ...user._doc,
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