"use client";

import { Sparkles, Thermometer } from "lucide-react";
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
  { day: "Monday", temperature: 12.5 },
  { day: "Tuesday", temperature: 16.8 },
  { day: "Wednesday", temperature: 18.3 },
  { day: "Thursday", temperature: 15.7 },
  { day: "Friday", temperature: 17.9 },
  { day: "Saturday", temperature: 11.2 },
];

const chartConfig = {
  temperature: {
    label: "Temperature",
    color: "hsl(var(--accent))",
  },
} satisfies ChartConfig;

export function TemperatureChart() {
  return (
    <Card className="w-full">
      <div className="flex w-full justify-between gap-2 p-6">
        <div>
          <CardTitle className="flex items-center gap-2">
            Temperature <Thermometer className="h-4 w-4 mt-1.5" />
          </CardTitle>
          <CardDescription>
            Showing temperature for the last day
          </CardDescription>
        </div>
        <div className="text-3xl font-bold">
          {chartData[chartData.length - 1].temperature}
          <span className="text-xl">°C</span>
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
              unit="°C"
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
              dataKey="temperature"
              type="linear"
              fill="var(--color-temperature)"
              fillOpacity={0.4}
              stroke="var(--color-temperature)"
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
              <li>
                Ensure proper ventilation to prepare for rising temperatures.
              </li>
              <li>
                Add shading and a water source near the hive to cool the bees.
              </li>
              <li>
                Monitor hive activity and adjust ventilation or shading as
                needed.
              </li>
            </ul>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
