import { apiResponse } from "@/utils/api";
import { asyncWrapperApi } from "@/utils/asyncWraper";
import { StatusCodes } from "http-status-codes";

export const GET = asyncWrapperApi( async (req)=>{
    return apiResponse(StatusCodes.OK , {succuss : true})
})