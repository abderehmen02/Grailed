export const authConfig = {
    tokenCookieName : "authToken" ,
    tokenExpiresIn : "2d" ,
    bycryptSaltRounds : 10 ,
    googleRedirectUrl     : process.env.NEXT_PUBLIC_REDIRECT_URI as string ,
}


export const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
