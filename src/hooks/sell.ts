import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import {ref , listAll , uploadBytes, getDownloadURL, uploadBytesResumable } from "firebase/storage"
import { firebaseStorage } from "@/db/firebase/config";
import { toast } from "sonner";
import axios from "axios";
import { ProductDb } from "@/db/models/productModal";

export const useSell = ()=>{
const [isUploadImageRequest , setIsUploadImageRequest ] = useState(false)
const [uploadImageProgress , setUploadImageProgress ] = useState<number>(1)



    const uploadImage = async (event : ChangeEvent<HTMLInputElement> , setImages : Dispatch<SetStateAction<string[]>>) : Promise<void> => {
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
            if(!imageUrl){ toast.error("can not get the image url , please try uploading the file again") } 
            setImages(curr=>[...curr , imageUrl])
            // setIsUploadImageRequest(false)

           //  alert(newUser?.profilePic || "no profile pic")
   
          }
          )
    
         }
        }
        
         catch (error) {
          alert(error)
          setIsUploadImageRequest(false)
          console.error(error);
        }
      }; 



      const createProduct = async  (body : Omit<ProductDb , "userId" >)=>{
const res = await  axios.post("/api/createProduct" , body )
console.log("res" , res)
return res.data
      }


      return {uploadImage  , isUploadImageRequest , uploadImageProgress , createProduct }
}