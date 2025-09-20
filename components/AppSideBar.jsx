"use client"

import React from "react";
import { ChartArea, Home, IdCard, Loader2, Settings, Table } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";
import { loaderStore } from "@/app/store";

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "Card Section", url: "/Card", icon: IdCard },
  { title: "Graph", url: "/Graph", icon: ChartArea },
  { title: "Data Table", url: "/DataTable", icon: Table },
  { title: "Settings", url: "#", icon: Settings },
];

const AppSideBar = () => {
  const router = useRouter();
  const { loadingRoute, setLoadingRoute } = loaderStore()
  const handleClick = (title, url) => (e) => {
    e.preventDefault();
    setLoadingRoute(url)
    router.push(url);
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="bg-gray-100 dark:bg-gray-900/50">
        <SidebarGroup>
          <SidebarGroupLabel className="text-2xl">DashBoard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="mt-4 gap-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="text-lg hover:bg-gray-300 dark:hover:bg-gray-600" asChild>
                    <a
                      href={item.url}
                      onClick={handleClick(item.title, item.url)}
                      className="flex items-center gap-2 "
                    >
                      {loadingRoute === item.url ? (
                        <Loader2 className="animate-spin !w-5 !h-5" />
                      ) : (
                        <item.icon className="!w-5 !h-5" />
                      )}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSideBar;
