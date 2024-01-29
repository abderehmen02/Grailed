
import { isEmailExistsValidator, isValidUserNameValidator, signUpValidator } from "@/utils/validators/auth"
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
    const body = await  req.json()
        const  parsedBodyResult = isValidUserNameValidator.safeParse(body)
        
        if(parsedBodyResult.success === false)  return new Response(JSON.stringify(parsedBodyResult)  ,{
            status : StatusCodes.BAD_REQUEST , 
        } )
            const usersWithSameUsername = await userModel().findOne({userName :parsedBodyResult.data.userName })
            if(usersWithSameUsername) return apiResponse(StatusCodes.OK , {exist : true})

            return apiResponse(StatusCodes.OK , {exist : false})
        })
