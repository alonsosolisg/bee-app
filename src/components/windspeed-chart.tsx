"use client";

import { Sparkles, Wind, Check } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ReferenceLine,
  ReferenceArea,
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
  const [suggestions, setSuggestions] = useState([
    {
      id: 1,
      text: "Consider reducing hive entrance size during high winds.",
      checked: false,
    },
    {
      id: 2,
      text: "Ensure hive is properly secured and weighted down.",
      checked: false,
    },
    {
      id: 3,
      text: "Monitor bee flight patterns and provide windbreaks if needed.",
      checked: false,
    },
  ]);
  const [showCheck, setShowCheck] = useState<number | null>(null);
  const [containerFadeOut, setContainerFadeOut] = useState(false);

  const handleCheck = (id: number) => {
    setShowCheck(id);
    setTimeout(() => {
      setSuggestions((prev) => {
        const filtered = prev.filter((suggestion) => suggestion.id !== id);
        if (filtered.length === 0) {
          setContainerFadeOut(true);
          setTimeout(() => {
            setSuggestions([]);
            setContainerFadeOut(false);
          }, 500);
        }
        return filtered;
      });
      setShowCheck(null);
    }, 1000);
  };

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
            <defs>
              <linearGradient id="colorWindspeed" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="hsl(var(--accent))"
                  stopOpacity={0.4}
                />
                <stop
                  offset="100%"
                  stopColor="hsl(var(--accent))"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient
                id="colorWindspeedDanger"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="hsl(var(--destructive))"
                  stopOpacity={0.4}
                />
                <stop
                  offset="100%"
                  stopColor="hsl(var(--destructive))"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
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
            <ReferenceArea
              y1={20}
              y2={35}
              fill="hsl(var(--destructive))"
              fillOpacity={0.1}
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
              fill="url(#colorWindspeed)"
              fillOpacity={1}
              stroke="hsl(var(--accent))"
              strokeWidth={2}
              isAnimationActive={true}
              dot={(props) => {
                const { cx, cy, payload } = props;
                return (
                  <circle
                    cx={cx}
                    cy={cy}
                    r={4}
                    fill={
                      payload.windspeed >= 20
                        ? "hsl(var(--destructive))"
                        : "hsl(var(--accent))"
                    }
                    stroke={
                      payload.windspeed >= 20
                        ? "hsl(var(--destructive))"
                        : "hsl(var(--accent))"
                    }
                  />
                );
              }}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      {suggestions.length > 0 && (
        <CardFooter>
          <div
            className={`flex w-full items-start gap-2 text-sm transition-all duration-300 ${
              isHighlighted
                ? "scale-105 bg-accent/10 p-4 rounded-lg shadow-lg"
                : ""
            } ${
              containerFadeOut ? "opacity-0 scale-95" : "opacity-100 scale-100"
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
              <ul className="flex flex-col ml-4 gap-2 leading-none text-muted-foreground">
                {suggestions.map((suggestion) => (
                  <li key={suggestion.id} className="flex items-center gap-2">
                    <div className="relative flex items-center justify-center w-4 h-4">
                      <input
                        type="checkbox"
                        className={`rounded-sm transition-opacity duration-300 ${
                          showCheck === suggestion.id
                            ? "opacity-0"
                            : "opacity-100"
                        }`}
                        onChange={() => handleCheck(suggestion.id)}
                      />
                      {showCheck === suggestion.id && (
                        <Check className="absolute top-0 left-0 h-4 w-4 text-accent animate-in fade-in-0 duration-300" />
                      )}
                    </div>
                    <span
                      className={`transition-opacity duration-300 ${
                        showCheck === suggestion.id
                          ? "opacity-50"
                          : "opacity-100"
                      }`}
                    >
                      {suggestion.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
