"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { type DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
 
import dropDownIcon from '../assets/icons/dropDown.png'

import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "./ui/button";
import { useState } from "react";


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
  const [dropdown, setDropdown] = useState<String>('Filter By Week');
 
  const selectArray=[
    {id:1,name:'Filter By Week'},
    {id:2,name:'Filter By Month'},
    {id:3,name:'Filter By Year'}
  ]
  const chartMonthData = [
    { type: "January", overduePayment: 1860000, collected: 1500000, returned:200000 },
    { type: "february", overduePayment: 2000000, collected: 1400000, returned: 200000 },
    { type: "March", overduePayment: 1500000, collected: 1500000, returned: 200000 },
    { type: "April", overduePayment: 150000, collected: 1500000, returned: 200000 },
    { type: "May", overduePayment: 1860000, collected: 1500000, returned: 300000 },
    { type: "June", overduePayment: 1000000, collected: 1500000, returned: 300000 },
  ];
  const chartWeekData = [
    { type: "Sun", overduePayment: 1860000, collected: 1500000, returned:200000 },
    { type: "Mon", overduePayment: 2000000, collected: 1400000, returned: 200000 },
    { type: "Tue", overduePayment: 1500000, collected: 1500000, returned: 200000 },
    { type: "Wed", overduePayment: 150000, collected: 1500000, returned: 200000 },
    { type: "Thu", overduePayment: 1860000, collected: 1500000, returned: 300000 },
    { type: "Fri", overduePayment: 1000000, collected: 1500000, returned: 300000 },
    { type: "Sat", overduePayment: 1000000, collected: 1500000, returned: 300000 },
  ];
  const chartYearData = [
    { type: 2011, overduePayment: 1860000, collected: 1500000, returned:200000 },
    { type: 2015, overduePayment: 2000000, collected: 1400000, returned: 200000 },
    { type: 2018, overduePayment: 1500000, collected: 1500000, returned: 200000 },
    { type: 2020, overduePayment: 150000, collected: 1500000, returned: 200000 },
    { type: 2022, overduePayment: 1860000, collected: 1500000, returned: 300000 },
    { type: 2023, overduePayment: 1000000, collected: 1500000, returned: 300000 },
  ]

  type Checked = DropdownMenuCheckboxItemProps["checked"]
  return (
    <Card>
      <CardHeader className="flex justify-between">
        <CardTitle>Finance Payment Details</CardTitle>

        
        <DropdownMenu>
      <DropdownMenuTrigger className="flex border border-1 p-2 rounded-sm">
       {dropdown}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {/* <DropdownMenuLabel>Appearance</DropdownMenuLabel> */}
        
        {selectArray.map((select,index)=>(
           <DropdownMenuCheckboxItem
          //  checked={}
          //  onCheckedChange={setDropdown(select.name)}
           key={index}
         >
           {select.name}
         </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
     


      </CardHeader>

      <CardContent className="w-full flex items-center justify-center">
        <ChartContainer config={chartConfig} className="w-full h-[500px]">
          <BarChart accessibilityLayer data={chartMonthData} barGap={10} barSize={24} barCategoryGap={20} style={{ innerHeight: 100 }}>
            <CartesianGrid vertical={false} className="w-full" style={{justifyContent:'space-between'}} intercept={5}/>
            <XAxis
              dataKey="type"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 5)}
            />
            <YAxis
              tickLine={false}
              tickMargin={10}
              axisLine={false}
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
