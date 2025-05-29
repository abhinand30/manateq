import { Check, X } from 'lucide-react'


interface progressProps {
    title: string;
    data: {
        duration: number;
        stages: {
            "stage": string,
            "date": string,
            "duration"?: string,
            "status": string
        }[]
    }
}

const ProgressCard = (props: progressProps) => {
    const { data, title } = props;

    return (
        <div className=' p-4 w-auto max-w-[424px] min-h-lvh rounded-[16px] bg-white'>
            <div className='flex justify-between'>
                <div className='gap-[4px] mb-5'>
                    <p className='text-[20px]'>{title}</p>
                    <p className='text-[14px] text-[#918F90]'>Active for {data.duration} days</p>
                </div>

                <button className='button-container border-1 size-[32px]'><X className='size-[16px] color-red' /></button>
            </div>
            <div className='border-1 p-4 rounded-[16px]'>
                <h3 className='uppercase text-[#83764F]'>{title} stages</h3>
                <div className='mt-5'>
                    {data.stages.map((stage, index: number) => {
                        const isLast = index === data.stages.length - 1;
                        return (
                            <div key={index}>
                                <div className="flex gap-5 items-center" >
                                    <div className='flex flex-col justify-center items-center'>
                                        <div className="flex size-[40px] rounded-full items-center justify-center"
                                            style={{
                                                backgroundColor: stage.status === "completed" ? "#31AD80" : "transparent",
                                                border: stage.status === "inProcess" ? "1px solid #31AD80" : "1px solid #E5E5E5"
                                            }}
                                        >
                                            {stage.status === "completed" && <Check size={25} color="#fff" />}
                                            {stage.status === "inProcess" && <div className="size-[15px] bg-[#31AD80] rounded-full"></div>}
                                        </div>
                                        {!isLast && (
                                            <div className={`h-[30px] py-2 border-l-2 ${stage.status === 'completed' ? 'border-[#31AD80]' : 'border-dashed border-[#E5E5E5]'}`} />
                                        )}

                                    </div>
                                    <div>
                                        <p className="text-[#31AD80]">{stage?.stage}</p>
                                        <p className="text-[#918F90]">
                                            {stage.date ? `${stage?.date}  ` : "No date available"}
                                            <span> {stage?.duration}</span>
                                        </p>
                                    </div>
                                </div>


                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProgressCard