import React from 'react'
import Title from './Title'
import { HomeStyleCard } from '@/components/cards'
import LogoCard from '@/components/ui/LogoCard'
export type ProductStyle = {
  image : string
}
const PopularDesigners : React.FC<{shopLogo : ProductStyle[]}> =  ({shopLogo})=>{
  return (
      <div>
      <Title text='Popula Designers' />
      <div className="lg:w-[1500px] grid grid-cols-3 sm:grid-cols-4  lg:grid-cols-6 items-center gap-4 sm:gap-8" >        {
            shopLogo.map(style=><LogoCard key={style.image} style={style} />)
        }</div>
    </div>
  )
}

export default PopularDesigners