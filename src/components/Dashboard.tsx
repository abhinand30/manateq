import {Card,CardContent,} from "@/components/ui/card"
import {type ChartConfig,ChartContainer,ChartTooltip,ChartTooltipContent,} from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {Carousel,CarouselContent,CarouselItem,
// CarouselNext,// CarouselPrevious,
} from "@/components/ui/carousel";

import exportIcon from '../assets/exportIcon.png'
import ProfileCard from './ProfileCard';
import chatTextIcon from '../assets/icons/ChatText.png';
import loaderIcon from '../assets/icons/loading.png';
import chatIcon from '../assets/icons/Chat.png'
import Cards from './Cards';
import backIcon from '../assets/icons/backIcon.png';
import forwardIcon from '../assets/icons/forwardIcon.png'
import { BarCharts } from './BarCharts';
import flashIcon from '../assets/icons/flash.png'


const Dashboard = () => {

  const plotRequestsArray = [
    { id: 1, title: 'block plot Requests', icon: chatTextIcon, bgcolor: '#8F3985' },
    { id: 2, title: 'Unblock Plot requests', icon: loaderIcon, bgcolor: '#F45D01' },
    { id: 3, title: 'Investor Blacklist requests', icon: chatIcon, bgcolor: '#4C9F70' },
  ];

  const RecentRequestArray = [
    { id: 1009, RequestType: 'Agreement Renewal', date: '14/12/2024', status: 'Pending Finance Director', investor: 'SOSCO WLL', contactPerson: 'Test Name', agreement: 'TC-14-2201', plot: '7-service-Hub' },
    { id: 1010, RequestType: 'block plot Requests', date: '14/12/2024', status: 'Completed Finance Director', investor: 'LL', contactPerson: 'linu', agreement: 'TC-18-2000', plot: 'ggdh' },
    { id: 1011, RequestType: 'block plot Requests', date: '14/12/2024', status: 'Pending Finance Director', investor: 'SOSCO WLL', contactPerson: 'Test Name', agreement: 'TC-18-2067', plot: 'uundh' },
  ];

  return (
    <div className="w-full ">
      {/* Dashborad Heading */}
      <div className="flex justify-between p-5 border-b-1">
        <h4 className='text-2xl'>My Dashboard</h4>
        <button className='flex p-2 gap-2 shadow-sm rounded-lg'>
          <img src={exportIcon} alt='export' />
          export
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-flow-col grid-rows-3 m-5">
        {/* row-1 */}

        <div className='flex h-[450px] gap-10'>
          <ProfileCard />
          <div className={"mb-10"}>
            {plotRequestsArray.map((plotRequest) => (
              <Cards key={plotRequest.id} plotRequest={plotRequest} />
            ))}
          </div>

          <Carousel className="w-[600px] h-[400px] shadow-sm p-10 rounded-[24px]">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-3xl">Recent Service Requests</h3>
                <p className="text-[#918F90]">Latest Agreement Renewal Request Overview</p>
              </div>

              <div className="flex gap-2 items-center">
                <button className="size-8 rounded-sm flex border items-center justify-center">
                  <img src={backIcon} />
                </button>
                <button className="size-8 rounded-sm flex border items-center justify-center">
                  <img src={forwardIcon} />
                </button>
              </div>
            </div>

            {/* Carousel Content */}
            <CarouselContent className="flex items-center justify-center">
              {RecentRequestArray.map((recentRequest) => (
                <CarouselItem key={recentRequest.id} className="flex justify-center">
                  <Card className="w-full flex flex-col justify-center px-4">
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
        </div>
        {/* Row-2 */}
        <BarCharts />
        {/* Row-3 */}
        <div className=''>
          <SLAGragh />
        </div>


      </div>
    </div>
  )
}

export default Dashboard;


const SLAGragh = () => {



  const chartConfig = {
    blockedPlot: {
      label: "blocked Plot",
      color: "#57167E",
    },
    unBlockedPlot: {
      label: "Unblocked Plot",
      color: "#EA5F89",
    },
    blockedPlotsDueFinanceViolation: {
      label: "Plots Blocked Due to Finance Violation",
      color: "#F7B7A3",
    },
  } satisfies ChartConfig;

  const PlotData = [
    { name: "Blocked Plot", duration: 4.12, key: 'blockedPlot',color:'red' },
    { name: "Unblocked Plot", duration: 2.30, key: 'unBlockedPlot',color:'black' },
    { name: "Plots Blocked Due to Finance Violation", duration: 1.45, key: 'blockedPlotsDueFinanceViolation',color:'#cccccc' },
  ]

  const buttonPlotArray = [
    { id: 1, title: 'All Service Requests' },
    { id: 2, title: '1438 Service Requests' }

  ];
  const plotBlockRequestArray = [
    { id: 1, name: 'Investor Blocking', value: 100 },
    { id: 2, name: 'Block/Unblock (Finnace)', value: 144 },
    { id: 3, name: 'Steps In Rights Block Plot', value: 207 },
    { id: 4, name: 'Steps In Rights Unblock Plot', value: 450 },
    { id: 5, name: 'Agreement Expiry', value: 100 },
    { id: 6, name: 'Termination', value: 144 },
    { id: 7, name: 'Land Swap', value: 207 },
    { id: 8, name: 'Plot Merge', value: 450 },
    { id: 9, name: 'Plot Size Change', value: 100 },
    { id: 10, name: 'Land Transfer', value: 144 },
  ]
  return (

    <Card>
      <CardContent>
        <div className='flex'>
          <div className='w-3/4'>
            <h3>SLA Graph</h3>
            <ChartContainer config={chartConfig} className='w-full h-[400px]'>
              <BarChart
                accessibilityLayer
                data={PlotData}
                barSize={30}
                margin={{
                  top: 20,

                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="name"
                  tickLine={true}
                  tickMargin={10}
                  axisLine={false}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />

                <YAxis
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  domain={[0, 5]}
                  ticks={[0, 1, 2, 3, 4, 5]}
                  tickFormatter={(value) => `${value} hours`}
                />



  
        <Bar
          dataKey="duration"
          // fill={}
          // fill={color}
          radius={[40, 40, 0, 0]}
        />
      

              </BarChart>
            </ChartContainer>
          </div>

          <div>
            {PlotData.map((plot, index) => (
              <div
                key={index}
                className="m-5 flex flex-col text-center items-center justify-center w-[250px] h-[128px] bg-[#F8F8F8] mb-5 rounded-lg p-4"
              >
                <p className="text-2xl">{plot.duration}h</p>
                <p className="text-sm text-gray-500">{plot.name}</p>
              </div>
            ))}
          </div>
          <Card className='w-[450px] h-[500px] p-5'>
            {buttonPlotArray.map((button) => (
              <button className='bg-gray-300 p-2 rounded-lg' key={button.id}>{button.title}</button>
            ))}

            <div className="grid grid-cols-4 gap-4 items-center  w-full">
              {plotBlockRequestArray.map((plotBlockRequest, index) => (
                <div key={index} className="flex flex-col  items-center w-full">
                  <div className="w-10 h-10 border rounded-full flex items-center justify-center">
                    {plotBlockRequest.value}
                  </div>
                  <p className="text-center mt-2 text-sm">{plotBlockRequest.name}</p>
                </div>
              ))}
            </div>

          </Card>
        </div>
      </CardContent>
    </Card>
  )
}
