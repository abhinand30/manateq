import React from 'react'

const CommonButton = (props) => {
    const {icon,onCilck,text}=props;
  return (
    <button className='flex p-2 gap-2 shadow-sm rounded-lg h-10 items-center'>
    <img src={icon} alt='export' className='size-5' />
    {text}
  </button>
  )
}

export default CommonButton