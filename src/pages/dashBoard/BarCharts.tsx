"use client"
import { useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle,} from "@/components/ui/card"
import { type ChartConfig,ChartContainer,ChartTooltip,ChartTooltipContent,} from "@/components/ui/chart";
import DropDownComponent from "@/components/DropDownComponent";


const chartConfig = {
  overduePayment: {
    label: "Overdue Payment",
    color: "#57167E",
  },
  collected: {
    label: "Collected",
    color: "#EA5F89",
  },
  returned: {
    label: "Returned/Cancelled",
    color: "#F7B7A3",
  },
} satisfies ChartConfig


export function BarCharts() {
  const [dropdown, setDropdown] = useState<string>('week');

  const selectArray = [
    { id: 1, name: 'Filter By Week', value: 'week' },
    { id: 2, name: 'Filter By Month', value: 'month' },
    { id: 3, name: 'Filter By Year', value: 'year' }
  ]
  const chartMonthData = [
    { type: "January", overduePayment: 1860000, collected: 1500000, returned: 200000 },
    { type: "february", overduePayment: 2000000, collected: 1400000, returned: 200000 },
    { type: "March", overduePayment: 1500000, collected: 1500000, returned: 200000 },
    { type: "April", overduePayment: 150000, collected: 1500000, returned: 200000 },
    { type: "May", overduePayment: 1860000, collected: 1500000, returned: 300000 },
    { type: "June", overduePayment: 1000000, collected: 1500000, returned: 300000 },
  ];
  const chartWeekData = [
    { type: "Sun", overduePayment: 200000, collected: 150000, returned: 200000 },
    { type: "Mon", overduePayment: 180000, collected: 140000, returned: 200000 },
    { type: "Tue", overduePayment: 150000, collected: 150000, returned: 200000 },
    { type: "Wed", overduePayment: 15000, collected: 150000, returned: 200000 },
    { type: "Thu", overduePayment: 180000, collected: 150000, returned: 300000 },
    { type: "Fri", overduePayment: 100000, collected: 150000, returned: 300000 },
    { type: "Sat", overduePayment: 100000, collected: 150000, returned: 300000 },
  ];
  const chartYearData = [
    { type: '2011', overduePayment: 1860000, collected: 5000000, returned: 2000000 },
    { type: '2015', overduePayment: 2000000, collected: 6000000, returned: 2000000 },
    { type: '2018', overduePayment: 1500000, collected: 7000000, returned: 2000000 },
    { type: '2020', overduePayment: 150000, collected: 8000000, returned: 2000000 },
    { type: '2022', overduePayment: 1860000, collected: 900000, returned: 3000000 },
    { type: '2023', overduePayment: 1000000, collected: 1000000, returned: 3000000 },
  ]



  const financePaymentStatus = [
    { title: 'Overdue Payment', color: '#57167E' },
    { title: 'Collected', color: '#EA5F89', },
    { title: 'Returned/Cancelled', color: '#F7B7A3' }
  ]
  return (
    <Card className="h-[564px]">

      <CardHeader className="flex justify-between" >
        <div>
          <CardTitle className="text-[28px]">Finance Payment Details</CardTitle>
          <div className="flex flex-col sm:flex-col lg:flex-row gap-10">
            {financePaymentStatus.map((status, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className={` size-[12px] rounded-full`} style={{ backgroundColor: status.color }}></div>
                <p>{status.title}</p>
              </div>
            ))}
          </div>

        </div>
        <DropDownComponent
          value={dropdown}
          setValue={setDropdown}
          data={selectArray}
          title="Status Reason"
        />

      </CardHeader>

      <CardContent className="w-full flex items-center justify-center">
        <ChartContainer config={chartConfig} className="w-full h-[400px]">
          <BarChart accessibilityLayer data={dropdown === 'month' ? chartMonthData : dropdown === 'year' ? chartYearData : chartWeekData} barGap={10} barSize={24} barCategoryGap={20} style={{ innerHeight: 100 }}>
            <CartesianGrid horizOriginX={10} vertOriginY={10} vertical={false} horizontal={false} className="w-full" style={{ justifyContent: 'space-between' }} />
            <XAxis
              dataKey="type"
              tickLine={false}
              tickMargin={10}
              axisLine={{ stroke: "#E5E5E5", }}
              tickFormatter={(value) => value.slice(0, 4)}
            />
            <YAxis
              tickLine={false}
              tickMargin={10}
              axisLine={{ stroke: "#E5E5E5" }}
              targetX={10}

              tickFormatter={(value) => {
                if (value >= 1000000) return `${value / 1000000}M`;
                if (value >= 1000) return `${value / 1000}K`;
                return value;
              }}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />

            <Bar dataKey="overduePayment" fill={chartConfig.overduePayment.color} radius={40} color="red" className="bg-red-500" />
            <Bar dataKey="collected" fill={chartConfig.collected.color} radius={40} width={100} />
            <Bar dataKey="returned" fill={chartConfig.returned.color} radius={40} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
