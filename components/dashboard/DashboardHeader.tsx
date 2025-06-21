"use client"

import { motion } from "framer-motion"
import { Bell, Search, User, Sparkles, CreditCard, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DashboardHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg"
    >
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center space-x-4">
          <SidebarTrigger className="text-gray-600 hover:text-gray-900" />

          {/* Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search events, attendees..."
              className="pl-10 w-64 bg-gray-50 border-gray-200 focus:bg-white"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* AI Assistant */}
          <Button>
            <Sparkles className="w-4 h-4 mr-2" />
            AI Assistant
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full text-xs bg-red-500 text-white">
              3
            </Badge>
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <img
                  src="/placeholder-user.jpg"
                  alt="User avatar"
                  className="h-full w-full rounded-full object-cover"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-64 bg-white shadow-lg border border-gray-200 rounded-lg"
              align="end"
              forceMount
            >
              <DropdownMenuLabel className="font-normal p-4">
                <div className="flex items-center space-x-3">
                  <img
                    src="/placeholder-user.jpg"
                    alt="User avatar"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-semibold leading-none text-gray-900">
                      Sarah Chen
                    </p>
                    <p className="text-xs leading-none text-gray-500">
                      sarah@eventflow.com
                    </p>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="border-t border-gray-200" />
              <div className="p-2">
                <DropdownMenuItem className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  <User className="w-4 h-4 text-gray-500" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  <CreditCard className="w-4 h-4 text-gray-500" />
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  <Settings className="w-4 h-4 text-gray-500" />
                  <span>Settings</span>
                </DropdownMenuItem>
              </div>
              <DropdownMenuSeparator className="border-t border-gray-200" />
              <div className="p-2">
                <DropdownMenuItem className="flex items-center space-x-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 rounded-md focus:bg-red-50 focus:text-red-700">
                  <LogOut className="w-4 h-4" />
                  <span>Sign out</span>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.header>
  )
}
