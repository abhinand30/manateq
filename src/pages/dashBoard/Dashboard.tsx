import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { Card, CardContent, } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent, } from "@/components/ui/chart"
import exportIcon from '@/assets/exportIcon.png'
import ProfileCard from './ProfileCard';
import chatTextIcon from '@/assets/icons/ChatText.png';
import loaderIcon from '@/assets/icons/loading.png';
import chatIcon from '@/assets/icons/Chat.png'
import Cards from './Cards';
import { BarCharts } from './BarCharts';
import CarouselComponent from "./Carousel";

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

const Dashboard = () => {


  return (
    <div className="w-full bg-[#F8F8F8] ">
      {/* Dashborad Heading */}
      <div className="flex flex-col sm:flex-col lg:flex-row justify-between p-5 border-b">

        <h4 className='text-2xl'>My Dashboard</h4>
        <button className='flex p-2 gap-2 items-center bg-white shadow-sm rounded-[16px] h-[40px] w-[107px]'>
          <img src={exportIcon} alt='export' className="size-[20px]"/>
          Export
        </button>
      </div>

      {/* Main Grid */}
      <div className="m-[32px]">

        <div className='flex flex-col sm:flex-col lg:flex-row max-h-[450px] h-auto gap-10 mb-10'>
          <ProfileCard />
          <div className={"mb-10"}>
            {plotRequestsArray.map((plotRequest) => (
              <Cards key={plotRequest.id} plotRequest={plotRequest} />
            ))}
          </div>

          <CarouselComponent data={RecentRequestArray} />
        </div>
        {/* Row-2 */}
        <div>
            <BarCharts />
        </div>
        
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
    { name: "Blocked Plot", duration: 4.12, key: 'blockedPlot', color: 'red' },
    { name: "Unblocked Plot", duration: 2.30, key: 'unBlockedPlot', color: 'black' },
    { name: "Plots Blocked Due to Finance Violation", duration: 1.45, key: 'blockedPlotsDueFinanceViolation', color: '#cccccc' },
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
