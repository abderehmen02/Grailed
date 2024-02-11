import { authConfig } from "@/config/authConfig";
import { userModel } from "@/db/models/userModal";
import { apiResponse, errorMessage } from "@/utils/api";
import { asyncWrapperApi } from "@/utils/asyncWraper";
import { verifyToken } from "@/utils/auth/tokens";
import { StatusCodes } from "http-status-codes";
import { NextApiRequest } from "next";
import { cookies } from "next/headers";


export const GET = asyncWrapperApi( async (req)=>{
const token = cookies().get(authConfig.tokenCookieName)
if(!token) return apiResponse(StatusCodes.BAD_REQUEST , errorMessage("user is not signed in"))
const data  = verifyToken(token.value )
if( typeof data !== "object"  || data === null || !("userId" in data ) || !data?.userId) return apiResponse(StatusCodes.INTERNAL_SERVER_ERROR , errorMessage("can not get the user id from the token") )
const products = await  userModel().find()
return  apiResponse(StatusCodes.OK , products)
})