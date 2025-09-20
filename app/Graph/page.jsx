"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    BarChart as BarChartIcon,
    GitCommitVertical,
    LineChart as LineChartIcon,
} from "lucide-react";
import {
    BarChart,
    Bar,
    XAxis,
    LineChart,
    Line,
    CartesianGrid,
    LabelList,
} from "recharts";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent
} from "@/components/ui/chart";
import { handleToast } from "@/components/Toaster/page";
import { usePathname } from "next/navigation";
import { loaderStore } from "../store";

const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
    { month: "July", desktop: 188 },
    { month: "August", desktop: 245 },
    { month: "September", desktop: 198 },
    { month: "October", desktop: 276 },
    { month: "November", desktop: 162 },
    { month: "December", desktop: 301 },
];


const LineChartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
    { month: "July", desktop: 260, mobile: 150 },
    { month: "August", desktop: 290, mobile: 160 },
    { month: "September", desktop: 220, mobile: 140 },
    { month: "October", desktop: 240, mobile: 155 },
    { month: "November", desktop: 198, mobile: 165 },
    { month: "December", desktop: 310, mobile: 180 },
];


const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)",
    },
    mobile: {
        label: "Mobile",
        color: "var(--chart-2)",
    },
}

export default function ChartCards() {
    const showRef = useRef(false);
    const pathname = usePathname();
    const {loadingRoute, clearLoadingRoute} = loaderStore()

    useEffect(() => {
        if (loadingRoute && loadingRoute === pathname && !showRef.current) {
            showRef.current = true;
            clearLoadingRoute();
            handleToast("pass", {
                name: `You're now navigating to the Data Table page`,
            });
        }
    }, [pathname, loadingRoute])

    return (
        <section aria-label="Charts" className="w-full  m-2">
            <div className="grid gap-4 grid-cols-1">

                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
                    <Card className="rounded-2xl bg-gray-300 dark:bg-gray-900 shadow-sm">
                        <CardHeader className="flex flex-row items-center justify-between p-5">
                            <CardTitle className="text-base font-medium">Monthly Sales</CardTitle>
                            <BarChartIcon className="h-5 w-5 text-gray-500" />
                        </CardHeader>
                        <CardContent>
                            <ChartContainer config={chartConfig}>
                                <BarChart
                                    accessibilityLayer
                                    data={chartData}
                                    margin={{
                                        top: 20,
                                    }}
                                >
                                    <CartesianGrid vertical={false} />
                                    <XAxis
                                        dataKey="month"
                                        tickLine={false}
                                        tickMargin={10}
                                        axisLine={false}
                                        tickFormatter={(value) => value.slice(0, 3)}
                                    />
                                    <ChartTooltip
                                        cursor={false}
                                        content={<ChartTooltipContent hideLabel />}
                                    />
                                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
                                        <LabelList
                                            position="top"
                                            offset={12}
                                            className="fill-foreground"
                                            fontSize={12}
                                        />
                                    </Bar>
                                </BarChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
                    <Card className="rounded-2xl bg-gray-300 dark:bg-gray-900 shadow-sm">
                        <CardHeader className="flex flex-row items-center justify-between p-5">
                            <CardTitle className="text-base font-medium">Revenue Trend</CardTitle>
                            <LineChartIcon className="h-5 w-5 text-gray-500" />
                        </CardHeader>
                        <CardContent>
                            <ChartContainer config={chartConfig}>
                                <LineChart
                                    accessibilityLayer
                                    data={LineChartData}
                                    margin={{
                                        left: 12,
                                        right: 12,
                                    }}
                                >
                                    <CartesianGrid vertical={false} />
                                    <XAxis
                                        dataKey="month"
                                        tickLine={false}
                                        axisLine={false}
                                        tickMargin={8}
                                        tickFormatter={(value) => value.slice(0, 3)}
                                    />
                                    <ChartTooltip
                                        cursor={false}
                                        content={<ChartTooltipContent hideLabel />}
                                    />
                                    <Line
                                        dataKey="desktop"
                                        type="natural"
                                        stroke="var(--color-desktop)"
                                        strokeWidth={2}
                                        dot={({ cx, cy, payload }) => {
                                            const r = 28
                                            return (
                                                <GitCommitVertical
                                                    key={payload.month}
                                                    x={cx - r / 2}
                                                    y={cy - r / 2}
                                                    width={r}
                                                    height={r}
                                                    stroke="var(--color-desktop)"
                                                />
                                            )
                                        }}
                                    />
                                </LineChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                </motion.div>

            </div>
        </section>
    );
}
