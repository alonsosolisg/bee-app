"use client";

import { Sparkles, Wind } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ReferenceLine,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";

const chartData = [
  { day: "Monday", windspeed: 15.2 },
  { day: "Tuesday", windspeed: 22.4 },
  { day: "Wednesday", windspeed: 28.7 },
  { day: "Thursday", windspeed: 31.2 },
  { day: "Friday", windspeed: 25.8 },
  { day: "Saturday", windspeed: 18.9 },
];

const chartConfig = {
  windspeed: {
    label: "Wind Speed",
    color: "hsl(var(--accent))",
  },
} satisfies ChartConfig;

export function WindspeedChart() {
  return (
    <Card className="w-full">
      <div className="flex w-full justify-between gap-2 p-6">
        <div>
          <CardTitle className="flex items-center gap-2">
            Wind Speed <Wind className="h-4 w-4 mt-1.5" />
          </CardTitle>
          <CardDescription>Showing wind speed for the last day</CardDescription>
        </div>
        <div className="text-3xl font-bold">
          18.9<span className="text-xl">m/h</span>
        </div>
      </div>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 16,
              right: 12,
              top: 12,
              bottom: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              unit="m/h"
              domain={[0, 35]}
            />
            <ReferenceLine
              y={30}
              strokeDasharray="3 3"
              stroke="hsl(var(--destructive))"
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="windspeed"
              type="linear"
              fill="var(--color-windspeed)"
              fillOpacity={0.4}
              stroke="var(--color-windspeed)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              AI Suggestions <Sparkles className="h-4 w-4" />
            </div>
            <ul className="flex flex-col ml-4 gap-2 leading-none text-muted-foreground list-disc">
              <li>Consider reducing hive entrance size during high winds.</li>
              <li>Ensure hive is properly secured and weighted down.</li>
              <li>
                Monitor bee flight patterns and provide windbreaks if needed.
              </li>
            </ul>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
