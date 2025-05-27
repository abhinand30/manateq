import { Check } from 'lucide-react'


const ProgressCard = (props) => {
    const {data}=props;

    

    return (
        <div className=' p-4 w-auto max-w-[424px] rounded-[16px] bg-white'>
            <div className='flex justify-between'>
                <div className='gap-[4px] mb-5'>
                    <p className='text-[20px]'>Agreement Business Process</p>
                    <p className='text-[14px] text-[#918F90]'>Active for {data.duration} days</p>
                </div>

                <button>Close</button>
            </div>
            <div className='border-1 p-4 rounded-[16px]'>
                <h3 className='uppercase text-[#83764F]'>Agreement stages</h3>
                <div>
                    {data.stages.map((stage, index:number) => (
                        <div key={index}>

                        <div className="flex gap-5 items-center" >
                            <div className="flex size-[40px] rounded-full items-center justify-center"
                                style={{
                                    backgroundColor: stage.status === "completed" ? "#31AD80" : "transparent",
                                    border: stage.status === "inProcess" ? "1px solid #31AD80" : "1px solid #E5E5E5"
                                }}
                            >
                                {stage.status === "completed" && <Check size={25} color="#fff" />}
                                {stage.status === "inProcess" && <div className="size-[15px] bg-[#31AD80] rounded-full"></div>}
                            </div>
                            <div>
                                <p className="text-[#31AD80]">{stage?.stage}</p>
                                <p className="text-[#918F90]">
                                    {stage.date ? `${stage?.date} - ` : "No date available"}
                                    <span> {stage?.duration}</span>
                                </p>
                            </div>
                        </div>
                        
                        <div className={`h-[30px] py-2 border-l-2 ${stage.status === 'completed' ? 'border-[#31AD80]' : 'border-dashed border-[#E5E5E5]'}`} />


                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProgressCard