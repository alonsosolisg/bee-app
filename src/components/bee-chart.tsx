"use client";

import { Sparkles, Bug } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

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
  { day: "Monday", beeCount: 17800 },
  { day: "Tuesday", beeCount: 18100 },
  { day: "Wednesday", beeCount: 18300 },
  { day: "Thursday", beeCount: 18500 },
  { day: "Friday", beeCount: 18700 },
  { day: "Saturday", beeCount: 18200 },
];

const chartConfig = {
  beeCount: {
    label: "Bee Count",
    color: "hsl(var(--accent))",
  },
} satisfies ChartConfig;

export function BeeChart() {
  return (
    <Card className="w-full">
      <div className="flex w-full justify-between gap-2 p-6">
        <div>
          <CardTitle className="flex items-center gap-2">
            Bee Population <Bug className="h-4 w-4 mt-1.5" />
          </CardTitle>
          <CardDescription>Showing bee count for the last day</CardDescription>
        </div>
        <div className="text-3xl font-bold">
          18.2<span className="text-xl">k</span>
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
              domain={[14000, 20000]}
              tickFormatter={(value) => `${(value / 1000).toFixed(1)}k`}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="beeCount"
              type="linear"
              fill="var(--color-beeCount)"
              fillOpacity={0.4}
              stroke="var(--color-beeCount)"
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
              <li>Colony is showing healthy growth in population.</li>
              <li>
                Consider adding additional honey supers to accommodate growth.
              </li>
              <li>
                Monitor for signs of swarming behavior with increasing numbers.
              </li>
            </ul>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
