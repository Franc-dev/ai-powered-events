"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  LayoutDashboard,
  Calendar,
  Users,
  BarChart3,
  Settings,
  User,
  CreditCard,
  HelpCircle,
  LogOut,
  Clock,
  Plus,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const navigationItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
    isActive: true,
  },
  {
    title: "My Events",
    url: "/dashboard/events",
    icon: Calendar,
    badge: "24",
  },
  {
    title: "Create Event",
    url: "/dashboard/create",
    icon: Plus,
    badge: "AI",
  },
  {
    title: "Attendees",
    url: "/dashboard/attendees",
    icon: Users,
  },
  {
    title: "Analytics",
    url: "/dashboard/analytics",
    icon: BarChart3,
  },
]

const accountItems = [
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: User,
  },
  {
    title: "Billing",
    url: "/dashboard/billing",
    icon: CreditCard,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
]

const supportItems = [
  {
    title: "Help Center",
    url: "/help",
    icon: HelpCircle,
  },
]

export function AppSidebar() {
  const [usageProgress] = useState(72) // Mock usage data

  return (
    <Sidebar className="border-r border-gray-200 bg-white">
      <SidebarHeader className="border-b border-gray-200 px-6 h-16 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-3"
        >
          <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
            <Settings className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">EventFlow</h2>
            <p className="text-sm text-gray-500">Professional Plan</p>
          </div>
        </motion.div>
      </SidebarHeader>

      <SidebarContent className="px-4 py-6">
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Main
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={item.isActive}
                      className="w-full justify-start px-3 py-2.5 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                      <a href={item.url} className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.title}</span>
                        {item.badge && (
                          <Badge
                            variant={item.badge === "AI" ? "default" : "secondary"}
                            className={`ml-auto text-xs ${
                              item.badge === "AI" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {item.badge}
                          </Badge>
                        )}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </motion.div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Usage Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="my-6 p-4 bg-blue-50 rounded-xl border border-blue-100"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700">Monthly Events</span>
            <span className="text-sm text-gray-500">{usageProgress}%</span>
          </div>
          <Progress value={usageProgress} className="h-2 mb-2" />
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>72 / 100 events</span>
            <Clock className="w-3 h-3" />
          </div>
        </motion.div>

        {/* Account Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Account
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {accountItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      className="w-full justify-start px-3 py-2.5 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                      <a href={item.url} className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </motion.div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Support Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Support
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {supportItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      className="w-full justify-start px-3 py-2.5 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                      <a href={item.url} className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </motion.div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-gray-200 p-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
          <Button
            variant="ghost"
            className="w-full justify-start px-3 py-2.5 text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Sign Out
          </Button>
        </motion.div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
