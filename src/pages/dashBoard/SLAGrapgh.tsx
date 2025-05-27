import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts"

import { Card, CardContent, } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent, } from "@/components/ui/chart"

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
    { name: "Blocked Plot", duration: 4.12, key: 'blockedPlot', color: '#47466D' },
    { name: "Unblocked Plot", duration: 2.30, key: 'unBlockedPlot', color: '#3D84A7' },
    { name: "Plots Blocked Due to Finance Violation", duration: 1.45, key: 'blockedPlotsDueFinanceViolation', color: '#46CDCF' },
  ]

  const buttonPlotArray = [
    { id: 1, title: 'All Service Requests',color:'#000',textColor:'#fff' },
    { id: 2, title: '1438 Service Requests',color:'#E6E4DC80',textColor:'#83764F' }

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
        <div className='flex gap-10'>
          <div className='w-1/2'>
            <h3>SLA Graph</h3>
            <ChartContainer config={chartConfig} className='w-full h-[450px]'>

              <BarChart
                accessibilityLayer
                data={PlotData}
                barSize={40}
                margin={{ top: 20}}
                
              >
                <CartesianGrid vertical={false} strokeDasharray="5 5" stroke="#E5E5E5"/>
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  // color={p}
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
                  tickFormatter={(value) => `${value} hr`}
                />
                <Bar
                  dataKey="duration"
                  radius={[40, 40, 0, 0]}
                  width={40}
                  fill="red"
                >
                  {PlotData.map((plot,index)=>(
                    <Cell key={index} fill={plot.color}/>
                  ))}
                  
                </Bar>


              </BarChart>
            </ChartContainer>
          </div>

          <div>
            {PlotData.map((plot, index) => (
              <div
                key={index}
                className="m-5 flex flex-col text-center items-center justify-center w-[200px] h-[135px] bg-[#F8F8F8] mb-10 rounded-lg p-4"
              >
                <p className="text-2xl">{plot.duration} h</p>
                <p className="text-sm text-gray-500">{plot.name}</p>
              </div>
            ))}
          </div>

          <Card className='w-[400px] h-[544px] p-5'>
            {buttonPlotArray.map((button) => (
              <button className='bg-gray-300 p-2 rounded-lg' style={{backgroundColor:button.color,color:button.textColor}} key={button.id}>{button.title}</button>
            ))}

            <div className="grid grid-cols-4 gap-4 w-full">
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

export default SLAGragh;
