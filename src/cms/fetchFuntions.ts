import { client } from "./sanity-init"
import imageUrlBuilder from "@sanity/image-url"

type ProductStyle = {
    name : string ,
    image : string
}

const builder = imageUrlBuilder(client)

export const sanityImageUrl = (SanityImage : object)=>{
    try {
  return builder.image(SanityImage)?.url() }
  catch(err){
    console.log(err)
  }
  }




export const fetchStyles : ()=>Promise<ProductStyle[] | void> = async ()=>{
    const styles = await   client.fetch('*[_type == $someType]', {someType: 'styles'})  as {title : string  , image : object}[]
    console.log("styles" , styles)
    if(!styles) return console.log("can not get posts from sanity!!")  
    return styles.map((style : {title : string , image : object} )=>({ name : style.title , image : sanityImageUrl(style.image) as string  }))
  }


