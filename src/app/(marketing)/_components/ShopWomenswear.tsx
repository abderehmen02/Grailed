import React from 'react'
import Title from './Title'
import { HomeStyleCard } from '@/components/cards'

export type ProductStyle = {
  name : string ,
  image : string
}
const ShopWomenswear : React.FC<{wanshops : ProductStyle[]}> =  ({wanshops})=>{
  return (
      <div className='py-8'>
      <Title text='Shop Womenswear' />
      <div className="grid  grid-cols-3 sm:grid-cols-4  lg:grid-cols-6 items-center gap-4 sm:gap-8" >        {
            wanshops.map(style=><HomeStyleCard key={style.name} {...style} />)
        }</div>
    </div>
  )
}

export default ShopWomenswear