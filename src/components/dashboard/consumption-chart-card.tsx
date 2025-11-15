// siyaKhanya — kimmy@siyaKhanya
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

type Point = { timestamp: string; predicted_kwh: number, hour: string };

const chartConfig = {
  predicted_kwh: {
    label: "Predicted kWh",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export function ConsumptionChartCard() {
  const [data, setData] = useState<Point[]>([]);

  useEffect(() => {
    // simple stub — replace with real API call
    const now = new Date();
    const points = Array.from({ length: 24 }).map((_, i) => {
      const ts = new Date(now.getTime() + i * 3600 * 1000);
      return { 
        timestamp: ts.toISOString(), 
        predicted_kwh: Math.max(0, 2 + Math.sin(i / 3) * 1.5 + Math.random() * 0.5),
        hour: `${ts.getHours()}:00`
      };
    });
    setData(points);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Hourly Demand (Predicted)</CardTitle>
        <CardDescription>Predicted energy consumption for the next 24 hours.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="hour" 
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                />
              <YAxis 
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Line 
                type="monotone" 
                dataKey="predicted_kwh" 
                stroke="var(--color-predicted_kwh)"
                strokeWidth={2} 
                dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
