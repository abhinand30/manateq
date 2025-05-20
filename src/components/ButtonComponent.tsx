import React from 'react'

const ButtonComponent = ({children,onClick,style}:any) => {
  return (
    <button className={`flex p-2 gap-2 rounded-lg h-10 items-center justify-center ${style}`} onClick={onClick}>
   {children}
  </button>
  )
}

export default ButtonComponent