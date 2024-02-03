export enum SignUpFields {
    PASSWORD,
    EMAIL,
    PHONE_NUMBER ,
    COUNTRY 
  }


export type signUpZodErrorShortMessages = "shortPassword"  |"invalidEmail" | "missingProperty" | "requiredPassword" | "requiredEmail"  | "EmailExists" | "EmailSignedInWithGoogle" ;


type signUpFieldErrorsType   = {
[key in signUpZodErrorShortMessages] : {
    message : string ,
    field? : SignUpFields  ,
    shortMessage : key  
} 
} 



export const signUpZodErrors : signUpFieldErrorsType  =  {
    
    shortPassword: { message : "Password must be at least 8 charachters" , field : SignUpFields.PASSWORD, shortMessage : "shortPassword"  }    ,
    missingProperty : {  message : "Some property is missing" , shortMessage : "missingProperty" }  ,
    invalidEmail :  { message :  "Email is not valid" , field : SignUpFields.EMAIL , shortMessage : "invalidEmail"  },
    requiredEmail : {message : "Email is required" , field : SignUpFields.EMAIL  , shortMessage : 'requiredEmail' } ,
    requiredPassword : {message : "Password is required"   , field : SignUpFields.PASSWORD , shortMessage  :"requiredPassword"}  ,
    EmailExists : {message : "Email already used! try another one" , field : SignUpFields.EMAIL , shortMessage  : "EmailExists" } ,
    EmailSignedInWithGoogle : {message : "Email already signed in with google! please try to sign in with google ussing this email!." , field : SignUpFields.EMAIL , shortMessage : "EmailSignedInWithGoogle" } ,
    
} 

export type  signUpFieldError  =  {
  message : string ,
  field? : SignUpFields ,
  shortMessage : signUpZodErrorShortMessages
}







export enum signUpErrorTypes {
  API_ERROR  = "API_ERROR",
  VALIDATION_ERROR = "VALIDATION_ERROR"
} 




export enum SignInFields {
  EMAIL,
  PASSWORD,
}


export type signInErrorShortMessages = "invalidEmail" | "invalidPassword" | "noUserFound" | "incorrectPassword" 

type signInFieldErrorsType   = {
[key in signInErrorShortMessages] : {
    message : string ,
    field? : SignInFields  ,
    shortMessage : key  
} 
} 



export const signInFieldErrors : signInFieldErrorsType  =  {
  invalidPassword  :{shortMessage : 'invalidPassword' , field  : SignInFields.PASSWORD , message : 'Password is not valid' } ,
  invalidEmail : {shortMessage  : 'invalidEmail' , field : SignInFields.EMAIL , message : 'Email is not valid'} ,
  noUserFound :  { shortMessage : 'noUserFound' , field : SignInFields.EMAIL , message : 'No user found with this email' } ,
  incorrectPassword : {shortMessage : 'incorrectPassword' , field : SignInFields.PASSWORD , message: 'Incorrect password. please try again'}
} 

export type  signInFieldError  =  {
  message : string ,
  field? : SignInFields ,
  shortMessage : signInErrorShortMessages
}



export const AuthApiErrors = {
  expiredJWT : "your session has been expired. please Sign In to continue " , 
}



export const  AuthServices =  {
  GOOGLE :  "GOOGLE" ,   
  NATIVE_USER : "NATIVE_USER"
} as const


const AuthServisesArray = Object.values(AuthServices)

export type AuthService  = typeof AuthServisesArray[number]
