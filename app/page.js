"use client";

import React from "react";
import Image from "next/image";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function HomePage() {
  return (
    <div className="flex justify-center  min-h-screen">
      <Tabs defaultValue="homepage" className="w-full  pt-2">
        <TabsList className="w-md h-10 p-1 bg-gray-300 dark:bg-gray-800">
          <TabsTrigger value="homepage" className="text-lg cursor-pointer">Homepage</TabsTrigger>
          <TabsTrigger value="overview" className="text-lg cursor-pointer">Overview</TabsTrigger>
          <TabsTrigger value="analytics" className="text-lg cursor-pointer">Analytics</TabsTrigger>
          <TabsTrigger value="reports" className="text-lg cursor-pointer">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="homepage">
          <div className="flex justify-center items-center w-full h-2/3 mt-4 rounded-2xl bg-gray-300 dark:bg-gray-800">
            <div className="flex flex-col gap-8">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                Welcome to My Dashboard
              </h1>

              <p className="text-lg text-gray-800 dark:text-gray-300 max-w-2xl text-center mb-8">
                A modern, responsive dashboard built with Next.js, Tailwind CSS, and
                Shadcn UI components. Clean, minimal, and powerful.
              </p>
            </div>

            <div className="relative w-96 h-80 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/DashBoard.png"
                alt="Dashboard Preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </TabsContent >
        <TabsContent value="overview">
          <div className="flex justify-center items-center w-full h-2/3 mt-4 rounded-2xl bg-gray-300 dark:bg-gray-800">
            <div className="flex flex-col gap-8">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                Project Overview
              </h1>

              <p className="text-lg text-gray-800 dark:text-gray-300 max-w-5xl text-center mb-8">
                Get a high-level view of your project’s progress, key metrics, and recent activity.
                Stay informed and make data-driven decisions with real-time updates and concise summaries.
              </p>
            </div>
          </div>

        </TabsContent>
        <TabsContent value="analytics">
          <div className="flex justify-center items-center w-full h-2/3 mt-4 rounded-2xl bg-gray-300 dark:bg-gray-800">
            <div className="flex flex-col gap-8">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                Analytics Dashboard
              </h1>

              <p className="text-lg text-gray-800 dark:text-gray-300 max-w-5xl text-center mb-8">
                Dive into detailed analytics with real-time charts, trends, and performance metrics.
                Gain deeper insights into user behavior, system performance, and business growth — all in one place.
              </p>
            </div>

          </div>
        </TabsContent>
        <TabsContent value="reports">
          <div className="flex justify-center items-center w-full h-2/3 mt-4 rounded-2xl bg-gray-300 dark:bg-gray-800">
            <div className="flex flex-col gap-8">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                Reports
              </h1>

              <p className="text-lg text-gray-800 dark:text-gray-300 max-w-5xl text-center mb-8">
                Access comprehensive reports generated from your data. Export, share, and review summaries that help you measure success, identify issues, and plan ahead with confidence.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
