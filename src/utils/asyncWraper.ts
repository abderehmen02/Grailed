import { NextRequest } from "next/server";
import { apiResponse, errorMessage } from "./api";
import { StatusCodes } from "http-status-codes";
import { connectDbPromise } from "@/bd/connect";

export function asyncWrapperApi(
    fn: ( req :  NextRequest)=>Promise<Response>
  ): (req: NextRequest) => Promise<Response | undefined > {
    return async function (req: NextRequest) {
      try {
        await connectDbPromise
        const result = await fn(req);
        return result;
      } catch (error) {
        console.error( "error thrown :" ,  error)

        return apiResponse(StatusCodes.INTERNAL_SERVER_ERROR , errorMessage(JSON.stringify(error)))
      }
    };
  }
  