import React from 'react'

const ProgressCard = () => {
    //Agreement Business Process": {
//             "Duration": "27 days",
            const Stages= [
                {
                    "Stage": "Assigned to PA & L User",
                    "Date": "14/12/2024",
                    "Duration": "4hr 30min"
                },
                {
                    "Stage": "PA & L User Decision",
                    "Date": "14/12/2024",
                    "Duration": "4hr 30min"
                },
                {
                    "Stage": "PA & L Manager Decision",
                    "Date": "14/12/2024",
                    "Duration": "4hr 30min"
                },
                {
                    "Stage": "Finance Review",
                    "Date": null,
                    "Duration": null
                },
                {
                    "Stage": "PA & L Zone Director Decision",
                    "Date": null,
                    "Duration": null
                },
                {
                    "Stage": "Customer Signature",
                    "Date": null,
                    "Duration": null
                },
                {
                    "Stage": "BS Zone Director Decision",
                    "Date": null,
                    "Duration": null
                },
                {
                    "Stage": "End",
                    "Date": null,
                    "Duration": null
                }
            ]
//         }
//     }
  return (
    <div className='shadow-sm p-4'>
        <div className='flex'>
            <div>
                    <p className='text-[14px]'>Agreement Business Process</p>
                    <p className='text-[14px]'>Active for 27 days</p>
            </div>
            
           <button>Close</button>
        </div>
        <div className='border-1 '>
                 <button className='uppercase'>Agreement Stages</button>
            </div>
    </div>
  )
}

export default ProgressCard