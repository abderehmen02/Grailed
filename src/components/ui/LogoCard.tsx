import React from 'react'

const LogoCard : React.FC<{style : {image : string }}> = ({style} ) => {
  return (
      <div>
          <img className='rounded-full ' src={style?.image} alt="" />
    </div>
  )
}

export default LogoCard

