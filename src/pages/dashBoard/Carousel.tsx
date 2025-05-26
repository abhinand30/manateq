import flashIcon from '@/assets/icons/flash.png';
import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel";
import backIcon from '@/assets/icons/backIcon.png';
import forwardIcon from '@/assets/icons/forwardIcon.png'
import { Card } from '@/components/ui/card';

function CarouselComponent(props) {
  const { data } = props

  return (
    <Carousel className="max-w-[668px] w-auto h-[476px] bg-white shadow-sm p-10 rounded-[24px]">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-3xl">Recent Service Requests</h3>
          <p className="text-[#918F90]">Latest Agreement Renewal Request Overview</p>
        </div>

        <div className="flex gap-2 items-center">
          <button className="size-[40px] rounded-sm flex border items-center justify-center">
            <img src={backIcon} />
          </button>
          <button className="size-[40px] rounded-sm flex border items-center justify-center">
            <img src={forwardIcon} />
          </button>
        </div>
      </div>

      {/* Carousel Content */}
      <CarouselContent className="flex items-center justify-center">
        {data.map((recentRequest, index: number) => (
          <CarouselItem key={index} className="flex justify-center">
            <Card className="w-full flex flex-col h-[250px] justify-center px-4">
              <div className="flex gap-5">
                <div className="bg-black size-10 flex items-center justify-center p-1 rounded-sm">
                  <img src={flashIcon} />
                </div>
                <div>
                  <p>{recentRequest.id}</p>
                  <p>Created On: {recentRequest.date}</p>
                </div>
                <div className="flex items-center bg-[#31AD801A] h-8 px-2 rounded-[5px] text-[#31AD80]">
                  {recentRequest.status}
                </div>
              </div>

              {/* Table Data */}
              <table className="w-full table-fixed">
                <tbody>
                  <tr className="w-full flex justify-between">
                    <td className="text-[#918F90] text-left w-1/2">Request Type</td>
                    <td className="text-right w-1/2 capitalize">{recentRequest.RequestType}</td>
                  </tr>
                  <tr className="w-full flex justify-between">
                    <td className="text-[#918F90] text-left w-1/2">Investor</td>
                    <td className="text-right w-1/2 capitalize">{recentRequest.investor}</td>
                  </tr>
                  <tr className="w-full flex justify-between">
                    <td className="text-[#918F90] text-left w-1/2">Contact Person</td>
                    <td className="text-right w-1/2 capitalize">{recentRequest.contactPerson}</td>
                  </tr>
                  <tr className="w-full flex justify-between">
                    <td className="text-[#918F90] text-left w-1/2">Agreement</td>
                    <td className="text-right w-1/2 capitalize">{recentRequest.agreement}</td>
                  </tr>
                  <tr className="w-full flex justify-between">
                    <td className="text-[#918F90] text-left w-1/2">Plot</td>
                    <td className="text-right w-1/2 capitalize">{recentRequest.plot}</td>
                  </tr>
                </tbody>
              </table>

            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default CarouselComponent