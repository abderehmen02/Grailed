import {create} from "zustand";

export const useCreateAccountModal = create<{isOpen: boolean , close: ()=>void , open : ()=>void }>((set)=>{
return({    isOpen : false ,
    open : ()=>set((val)=>({...val , isOpen : true})) ,
    close :()=> set((val)=>({...val , isOpen : false}))
})
})


export const useLoginProviderModal = create<{isOpen: boolean , close: ()=>void , open : ()=>void }>((set)=>{
    return({    isOpen : false ,
        open : ()=>set((val)=>({...val , isOpen : true})) ,
        close :()=> set((val)=>({...val , isOpen : false}))
    })
    
})


export const useLoginWithEmailMoadl = create<{isOpen: boolean , close: ()=>void , open : ()=>void }>((set)=>{
    return({    isOpen : false ,
        open : ()=>set((val)=>({...val , isOpen : true})) ,
        close :()=> set((val)=>({...val , isOpen : false}))
    })
    })


    export const useSignUpWithEmailModal = create<{isOpen: boolean , close: ()=>void , open : ()=>void }>((set)=>{
        return({    isOpen : false ,
            open : ()=>set((val)=>({...val , isOpen : true})) ,
            close :()=> set((val)=>({...val , isOpen : false}))
        })
        })