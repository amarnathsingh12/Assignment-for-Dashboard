"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DollarSign,
  Users,
  ShoppingBag,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { handleToast } from "@/components/Toaster/page";
import { loaderStore } from "../store";

const data = [
  {
    label: "Total Revenue",
    value: "$128.4k",
    delta: { value: "+12.3%", trend: "up" },
    icon: DollarSign,
    helper: "vs last month",
    bg: "from-red-500 to-white",
    ring: "ring-red-200",
    iconBg: "bg-red-100",
  },
  {
    label: "Users",
    value: "24,981",
    delta: { value: "+2.1%", trend: "up" },
    icon: Users,
    helper: "active users",
    bg: "from-yellow-500 to-white",
    ring: "ring-yellow-200",
    iconBg: "bg-yellow-100",
  },
  {
    label: "Sales",
    value: "3,147",
    delta: { value: "-0.8%", trend: "down" },
    icon: ShoppingBag,
    helper: "orders this month",
    bg: "from-amber-500 to-white",
    ring: "ring-amber-200",
    iconBg: "bg-amber-100",
  },
  {
    label: "Active Now",
    value: 412,
    icon: Activity,
    helper: "real-time",
    bg: "from-blue-500 to-white",
    ring: "ring-blue-200",
    iconBg: "bg-blue-100",
  },
  
];

export default function SummaryCard() {
  const {loadingRoute, clearLoadingRoute} = loaderStore();
  const pathname = usePathname();
  const shownRef = useRef(false);

  useEffect(()=> {
    if(loadingRoute && loadingRoute === pathname && !shownRef.current){
      shownRef.current = true
      clearLoadingRoute();
      handleToast("pass", {
      name: `You're now navigating to the Card page`,
    });
    }
  }, [pathname, loadingRoute])

  return (
    <section aria-label="Key metrics" className="w-full my-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((m, idx) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
          >
            <Card
              className={`relative h-72 overflow-hidden rounded-2xl border bg-gradient-to-br ${m.bg}`}
            >
              <CardHeader className="flex flex-row items-start justify-between p-5">
                <CardTitle className="text-base font-medium text-gray-900">
                  {m.label}
                </CardTitle>
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-xl ${m.iconBg} text-gray-800`}
                >
                  <m.icon className="h-5 w-5" />
                </div>
              </CardHeader>
              <CardContent className="p-5 pt-16">
                <div className="flex items-end justify-between">
                  <p className="text-3xl font-semibold tracking-tight text-gray-900">
                    {m.value}
                  </p>
                  {m.delta && (
                    <span
                      className={`inline-flex select-none items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${
                        m.delta.trend === "up"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {m.delta.trend === "up" ? (
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      ) : (
                        <ArrowDownRight className="h-3.5 w-3.5" />
                      )}
                      {m.delta.value}
                    </span>
                  )}
                </div>
                {m.helper && (
                  <p className="mt-1 text-xs text-gray-800">{m.helper}</p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

