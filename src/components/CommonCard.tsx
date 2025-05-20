import React from 'react'
import flashIcon from '../assets/icons/flash.png';
import profileImage from '../assets/profile.jpg';


const CommonCard = (props) => {
    const { icon } = props;
    return (
        <div className='max-w-[492px] h-[205px] mt-5 bg-white shadow-sm rounded-lg'>
            <div className='flex justify-between items-center p-4'>
                <div className='flex items-center gap-2'>
                    <div className='flex size-[20px] bg-black rounded-sm items-center justify-center'>
                        <img src={flashIcon} className='size-[15px]' />
                    </div>
                    <p>100033</p>
                </div>
                <img src={icon} />
            </div>
            {/*  */}
            <div className='flex justify-between w-full py-1 bg-[#FAFAFA] px-4'>
                <p className='font-light text-[#4F4C4D]'>Type of Investor</p>
                <p>Sole Proprietorship</p>
            </div>
            <div className="flex items-center gap-2 px-4">
                {/* Profile Image */}
                <div className="relative">
                    <img src={profileImage} className="size-[40px] rounded-full" />
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border border-white rounded-full"></span>
                </div>

                {/* Text Section */}
                <div className="flex flex-col leading-tight">
                    <p className="text-sm font-medium text-gray-700">Investor Name</p>
                    <p className="text-base font-semibold">Abhi</p>
                </div>
            </div>
            <div className='px-4 mt-2'>
            <div className='flex justify-between'>
                <text className="text-[14px] text-[#231F2099]">Modified On</text>
                <text className='text-[14px] text-[#231F2099]'>Commencement Date</text>
            </div>
            <div className='flex justify-between'>
                <p>25/11/2024 12:13</p>
                <p>25/11/2024 11:14</p>
            </div>
            </div>
            



        </div>
    )
}

export default CommonCard