import React from 'react'

const Cards = (props) => {
  const {plotRequest}=props;
  console.log(plotRequest.bgcolor)
  return (
    <div className='flex mb-5 gap-5 w-[425px] h-[120px] shadow-sm px-5  items-center justify-items-center rounded-xl'>
     <div className={`flex w-12 h-12 items-center justify-center rounded-xl`}
     style={{ backgroundColor: plotRequest.bgcolor }}>

        <img src={plotRequest?.icon} className='size-5'/>
      </div>
      <p className='text-[#868C98] uppercase font-extralight text-sm'>{plotRequest?.title}</p>
    </div>
  )
}

export default Cards