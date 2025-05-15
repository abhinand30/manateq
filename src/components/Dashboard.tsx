import exportIcon from '../assets/exportIcon.png'
import ProfileCard from './ProfileCard';

import chatTextIcon from '../assets/icons/ChatText.png';
import loaderIcon from '../assets/icons/loading.png';
import chatIcon from '../assets/icons/Chat.png'
// import chat from 
import Cards from './Cards';
import backIcon from '../assets/icons/backIcon.png';
import forwardIcon from '../assets/icons/forwardIcon.png'
import { BarCharts } from './BarCharts';
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { type CarouselApi } from "@/components/ui/carousel"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
  ]
  const PlotData = [
    { name: "Blocked Plot", duration: 4.12 },
    { name: "Unblocked Plot", duration: 2.30 },
    { name: "Plots Blocked Due to Finance Violation", duration: 1.45 },

  ]
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
      <div className="grid grid-flow-col grid-rows-3 gap-4 p-5">
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


          {/* </Card> */}
        </div>
        {/* Row-2 */}
        <BarCharts />
        {/* Row-3 */}
        <div className=''>
          <SLAGragh PlotData={PlotData} />
        </div>


      </div>
    </div>
  )
}

export default Dashboard;


const SLAGragh = (props) => {
  const { PlotData } = props;


  const chartConfig = {
    blockedPlot: {
      label: "blocked Plot",
      color: "hsl(var(--chart-1))",
    },
    unBlockedPlot: {
      label: "Unblocked Plot",
      color: "hsl(var(--chart-1))",
    },
    blockedPlotsDueFinanceViolation: {
      label: "Plots Blocked Due to Finance Violation",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

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
      <CardHeader>
        <CardTitle>SLA Graph</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='flex'>
          <ChartContainer config={chartConfig} style={{ height: 500 }}>
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

                tickLine={{ dottedArray: '3 3' }}
                tickMargin={10}
                axisLine={false}
              // tickFormatter={(value) => value.slice(0, 5)}
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

              <Bar dataKey="duration" fill={chartConfig.blockedPlot.color} color="red" className="bg-red-500" radius={[40, 40, 0, 0]} />
            </BarChart>
          </ChartContainer>
          <div>
            {PlotData.map((plot, index) => (
              <div className=" m-5 flex items-center justify-center">
                <div
                  key={index}
                  className="flex flex-col text-center items-center justify-center w-[200px] h-[128px] bg-[#F8F8F8] mb-5 rounded-lg p-4"
                >
                  <p className="text-2xl">{plot.duration}h</p>
                  <p className="text-sm text-gray-500">{plot.name}</p>
                </div>
              </div>
            ))}
          </div>
          <Card className='w-[420px] h-[544px] p-5'>
            {buttonPlotArray.map((button) => (
              <button className='bg-gray-300 p-2 rounded-lg' key={button.id}>{button.title}</button>
            ))}

            <div className="grid grid-cols-4 gap-4 items-center justify-center">
              {plotBlockRequestArray.map((plotBlockRequest, index) => (
                <div key={index} className="flex flex-col items-center w-24">
                  <div className="p-2 w-10 h-10 border rounded-full flex items-center justify-center">
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
