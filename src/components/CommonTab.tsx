import React from 'react'

const CommonTab = () => {
  return (
    <div className='h-[260px] w-auto m-5 shadow-sm rounded-[10px] py-4'>
        <div className='flex px-4  gap-2'>
          <img src={buildingIcon} alt='logo' />
          <text className='text-[#231F2099]'>Investor</text>
        </div>
        <div className='flex items-center gap-2 uppercase mt-5 px-4'>
          <img src={profileImage} alt='img' className='size-[56px] rounded-full' />
          <h4 className='text-[18px] font-[600]'>Sotota Contracting Telecom and Maintenance</h4>
        </div>
        <div className='m-5 mx-20 flex gap-10 justify-between'>
          {investorData.map((investor, index) => (
            <div key={index}>
              <p className='text-[14px] font-light text-[#231F2099] '>{investor?.title}</p>
              <p>{investor?.value}</p>
            </div>
          ))}



        </div>
        <hr className="w-full" />

        <div className="text-sm font-medium text-center text-gray-500  dark:text-gray-400">
          <ul className="flex flex-wrap mt-2">
            {tabArray.map((tab) => (
              <li key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`inline-block p-3 mx-2  rounded-t-lg hover:text-[#862634] ${tab.id === activeTab && 'border-[#862634] text-[#862634] border-b-2'} hover:border-[#862634] dark:hover:text-[#862634] capitalize`} >
                {tab.name}
              </li>
            ))}
          </ul>
        </div>


      </div>
  )
}

export default CommonTab