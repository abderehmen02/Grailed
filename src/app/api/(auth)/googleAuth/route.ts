import { GoogleUserDb, googleUserModel } from "@/db/models/googleUser"

import HttpStatusCodes, { StatusCodes }  from "http-status-codes"
import jwt from "jsonwebtoken"
import { NextResponse } from "next/server"
import { cookies } from 'next/headers'
import { AuthServices, generateLoginToken } from "@/utils/auth/tokens"
import { appConfig } from "@/config/appConfig"
import { authConfig } from "@/config/authConfig"
import { asyncWrapper } from "@/utils/clientAsyncWraper"
import { asyncWrapperApi } from "@/utils/asyncWraper"
import { apiResponse, errorMessage } from "@/utils/api"
import { getGoogleAuthTokens } from "@/utils/auth/getGoogleAuthTokens"

// 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

export const GET = asyncWrapperApi( async (req: Request)=>{
    const cookieStore = cookies()
    const {searchParams} = new URL(req.url)
    const code = searchParams.get("code")

    if(!code ) return apiResponse(HttpStatusCodes.NOT_FOUND , errorMessage("can not get the access token "))
    const googleAuthData = await getGoogleAuthTokens(code  )
    if(!googleAuthData) return apiResponse(StatusCodes.INTERNAL_SERVER_ERROR , errorMessage("can not get the google auth data  ") )
    const {id_token} = googleAuthData
    const googleUser = jwt.decode(id_token)
    if(!googleUser || typeof googleUser === "string"  ) return apiResponse( StatusCodes.INTERNAL_SERVER_ERROR , errorMessage("can not get the google user from the token")) 
    const {email , family_name , picture , name , given_name} = googleUser
    const googleUserDb = await  googleUserModel().findOneAndUpdate<GoogleUserDb>({email } , { email,  family_name , picture , name , given_name} , {new : true , upsert: true} )
    const userId = googleUserDb._id.toString()
    const accessToken = generateLoginToken({userId  , authService: AuthServices.GOOGLE })
    cookieStore.set(authConfig.tokenCookieName , accessToken  )
    return NextResponse.redirect(`${appConfig.url}${appConfig.routes.forSale}`);
    })