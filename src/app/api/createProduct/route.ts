
import { authConfig } from "@/config/authConfig";
import { ProductModal } from "@/db/models/productModal";
import { userModel } from "@/db/models/userModal";
import { apiResponse, errorMessage } from "@/utils/api";
import { asyncWrapperApi } from "@/utils/asyncWraper";
import { verifyToken } from "@/utils/auth/tokens";
import { cpSync } from "fs";
import { StatusCodes } from "http-status-codes";
import { NextApiRequest } from "next";
import { cookies } from "next/headers";


export const POST = asyncWrapperApi( async (req)=>{
  console.log("getting  a request")
const token = cookies().get(authConfig.tokenCookieName)
console.log("token" , token)
if(!token) return apiResponse(StatusCodes.BAD_REQUEST , errorMessage("user is not signed in"))
const data  = verifyToken(token.value )
if( typeof data !== "object"  || data === null || !("userId" in data ) || !data?.userId) return apiResponse(StatusCodes.INTERNAL_SERVER_ERROR , errorMessage("can not get the user id from the token") )
const body = req.json()
const newProduct = ProductModal().create({userId : data.userId , ...body})
console.log("new products" , newProduct)
return  apiResponse(StatusCodes.OK , newProduct)
})