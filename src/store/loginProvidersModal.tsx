import {create} from "zustand";

export const useLoginProviderModal = create<{isOpen: boolean , close: ()=>void , open : ()=>void }>((set)=>{
return({    isOpen : false ,
    open : ()=>set((val)=>({...val , isOpen : true})) ,
    close :()=> set((val)=>({...val , isOpen : false}))
})
})