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
import { useEffect, useState } from "react";

const chartData = [
  { day: "Monday", windspeed: 15.2 },
  { day: "Tuesday", windspeed: 18.4 },
  { day: "Wednesday", windspeed: 14.7 },
  { day: "Thursday", windspeed: 16.2 },
  { day: "Friday", windspeed: 18.8 },
  { day: "Saturday", windspeed: 24.4 },
];

const chartConfig = {
  windspeed: {
    label: "Wind Speed",
    color: "hsl(var(--accent))",
  },
} satisfies ChartConfig;

export function WindspeedChart() {
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      const element = document.getElementById("windspeed-chart");
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (
            entry.isIntersecting ||
            window.location.hash === "#windspeed-chart"
          ) {
            setIsHighlighted(true);
          } else {
            setIsHighlighted(false);
          }
        },
        {
          threshold: 0.5, // Element needs to be 50% visible
        }
      );

      observer.observe(element);
      return () => observer.disconnect();
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  return (
    <Card className="w-full" id="windspeed-chart">
      <div className="flex w-full justify-between gap-2 p-6">
        <div>
          <CardTitle className="flex items-center gap-2">
            Wind Speed <Wind className="h-4 w-4 mt-1.5" />
          </CardTitle>
          <CardDescription>Showing wind speed for the last day</CardDescription>
        </div>
        <div className="text-3xl font-bold">
          {chartData[chartData.length - 1].windspeed}
          <span className="text-xl">m/s</span>
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
              unit="m/s"
              domain={[0, 35]}
            />
            <ReferenceLine
              y={20}
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
        <div
          className={`flex w-full items-start gap-2 text-sm transition-all duration-300 ${
            isHighlighted
              ? "scale-105 bg-accent/10 p-4 rounded-lg shadow-lg"
              : ""
          }`}
        >
          <div className="grid gap-2">
            <div
              className={`flex items-center gap-2 font-medium leading-none ${
                isHighlighted ? "text-lg" : ""
              }`}
            >
              AI Suggestions{" "}
              <Sparkles
                className={`h-4 w-4 ${
                  isHighlighted ? "animate-pulse text-accent" : ""
                }`}
              />
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
