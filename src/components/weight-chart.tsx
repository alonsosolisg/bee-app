"use client";

import { Sparkles, Scale } from "lucide-react";
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
  { day: "Monday", weight: 85.2 },
  { day: "Tuesday", weight: 85.8 },
  { day: "Wednesday", weight: 85.4 },
  { day: "Thursday", weight: 85.9 },
  { day: "Friday", weight: 86.2 },
  { day: "Saturday", weight: 84.5 },
];

const chartConfig = {
  weight: {
    label: "Weight (kg)",
    color: "hsl(var(--accent))",
  },
} satisfies ChartConfig;

export function WeightChart() {
  return (
    <Card className="w-full">
      <div className="flex w-full justify-between gap-2 p-6">
        <div>
          <CardTitle className="flex items-center gap-2">
            Hive Weight <Scale className="h-4 w-4 mt-1.5" />
          </CardTitle>
          <CardDescription>
            Showing hive weight for the last day
          </CardDescription>
        </div>
        <div className="text-3xl font-bold">
          84.5<span className="text-xl">kg</span>
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
              domain={[80, 95]}
              tickFormatter={(value) => `${value}kg`}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="weight"
              type="linear"
              fill="var(--color-weight)"
              fillOpacity={0.4}
              stroke="var(--color-weight)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              AI Suggestions <Sparkles className="h-4 w-4" />
            </div>
            <ul className="flex flex-col ml-4 gap-2 leading-none text-muted-foreground list-disc">
              <li>
                Steady increase in hive weight indicates good nectar flow.
              </li>
              <li>
                Weight gain suggests successful honey production and storage.
              </li>
              <li>
                Consider harvesting honey if weight continues to increase
                rapidly.
              </li>
            </ul>
          </div>
        </div>
      </CardFooter> */}
    </Card>
  );
}
