import React from 'react'

interface TabHeaderProps{
  data:{title:string;value:string|number}[];
  tabArray:{id:number;name:string}[];
  setActiveTab:React.Dispatch<React.SetStateAction<number>>;
  activeTab:number;
}
const TabHeader:React.FC<TabHeaderProps> = (props) => {
    const {data,tabArray,setActiveTab,activeTab}=props;
  return (
     <div className=' w-auto rounded-[10px] pt-2 mb-5 bg-white'>
          
          <div className='m-5 mx-20 flex gap-10 justify-between'>
            {data.map((item, index) => (
              <div key={index}>
                <p className='text-[14px] font-light text-[#231F2099] '>{item?.title}</p>
                <p>{item?.value}</p>
              </div>
            ))}
          </div>
          <hr className="w-full" />

          <div className="text-sm font-medium text-center text-gray-500  dark:text-gray-400">
            <ul className="flex flex-wrap mt-2">
              {tabArray?.map((tab) => (
                <li key={tab.id} onClick={() => setActiveTab(tab.id)}
                  className={`inline-block p-3 mx-2  rounded-t-lg hover:text-redcolor ${tab.id === activeTab && 'border-redcolor text-redcolor border-b-2'} hover:border-redcolor dark:hover:text-redcolor capitalize`} >
                  {tab.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

  )
}

export default TabHeader