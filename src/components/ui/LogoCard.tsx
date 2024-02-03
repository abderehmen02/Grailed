import React from 'react'

const LogoCard = ({style}) => {
  return (
      <div>
          <img className='rounded-full ' src={style?.image} alt="" />
    </div>
  )
}

export default LogoCard

