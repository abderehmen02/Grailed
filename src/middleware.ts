import { appConfig } from "./config/appConfig";

export { default } from "next-auth/middleware";

export const config = {
  matcher: ['/sell'],
};