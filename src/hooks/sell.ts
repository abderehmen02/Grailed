import { ChangeEvent, useState } from "react";
import {ref , listAll , uploadBytes, getDownloadURL, uploadBytesResumable } from "firebase/storage"
import { firebaseStorage } from "@/db/firebase/config";
import { toast } from "sonner";

export const useSell = ()=>{
const [isUploadImageRequest , setIsUploadImageRequest ] = useState(false)
const [uploadImageProgress , setUploadImageProgress ] = useState<number>(1)



    const uploadImage = async (event : ChangeEvent<HTMLInputElement>) : Promise<string | void | null> => {
        let returnedImageUrl : null | string  = null ;
        setIsUploadImageRequest(true)
        try {
         
          if(event.target.files &&  event.target.files[0]){ 

          const imgRef = ref(firebaseStorage , `profileImages/${Date.now()}`) 
          
          const uploadTask =    uploadBytesResumable( imgRef , event.target.files[0] )
          uploadTask.on("state_changed" ,(snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes)  * 100;
            setUploadImageProgress(progress)
          }, 
          
          (error) => {
            console.error(error);
            toast.error("Error uploading file. Please try again.");
            setIsUploadImageRequest(false)

          },async ()=>{
            toast.success("image uploaded succussfully!")
            const imageUrl = await getDownloadURL(imgRef)
            console.log("got img url" , imageUrl)
            if(!imageUrl){ toast.error("can not get the image url , please try uploading the file again") } 
            returnedImageUrl = imageUrl
            setIsUploadImageRequest(false)

           //  alert(newUser?.profilePic || "no profile pic")
   
          }
          )
    
         }
console.log("img url" , returnedImageUrl)
return returnedImageUrl
        }
        
         catch (error) {
          alert(error)
          setIsUploadImageRequest(false)
          console.error(error);
        }
      }; 


      return {uploadImage  , isUploadImageRequest , uploadImageProgress }
}