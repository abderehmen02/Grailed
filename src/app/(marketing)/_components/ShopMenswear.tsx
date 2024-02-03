import React from 'react'
import Title from './Title'
import { HomeStyleCard } from '@/components/cards'
export type ProductStyle = {
  name : string ,
  image : string
}
const ShopMenswear: React.FC<{manshops : ProductStyle[]}> =  ({manshops})=> {
  return (
      <div>
      <Title text='Shop Menswear' />
      
      <div className="grid grid-cols-3 sm:grid-cols-4  lg:grid-cols-6 items-center gap-4 sm:gap-8" >        {
            manshops.map(style=><HomeStyleCard key={style.name} {...style} />)
        }</div>
    </div>
  )
}

export default ShopMenswear