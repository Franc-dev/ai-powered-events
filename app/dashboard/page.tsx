"use client"

import { motion } from "framer-motion"
import { Calendar, Users, TrendingUp, Clock, Plus, MoreHorizontal, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const stats = [
  {
    title: "Total Events",
    value: "2,847",
    change: "+12%",
    icon: Calendar,
    color: "text-blue-600",
  },
  {
    title: "Total Attendees",
    value: "45.2K",
    change: "+18%",
    icon: Users,
    color: "text-green-600",
  },
  {
    title: "Engagement Rate",
    value: "94.5%",
    change: "+5.2%",
    icon: TrendingUp,
    color: "text-purple-600",
  },
  {
    title: "Avg Event Duration",
    value: "2.4h",
    change: "+0.3h",
    icon: Clock,
    color: "text-orange-600",
  },
]

const upcomingEvents = [
  {
    id: 1,
    title: "Tech Conference 2024",
    date: "2024-02-15",
    time: "09:00 AM",
    location: "San Francisco, CA",
    attendees: 1250,
    status: "confirmed",
    type: "conference",
  },
  {
    id: 2,
    title: "Product Launch Webinar",
    date: "2024-02-18",
    time: "02:00 PM",
    location: "Virtual",
    attendees: 850,
    status: "planning",
    type: "webinar",
  },
  {
    id: 3,
    title: "Team Building Workshop",
    date: "2024-02-20",
    time: "10:00 AM",
    location: "New York, NY",
    attendees: 45,
    status: "confirmed",
    type: "workshop",
  },
  {
    id: 4,
    title: "Industry Networking Event",
    date: "2024-02-22",
    time: "06:00 PM",
    location: "Los Angeles, CA",
    attendees: 320,
    status: "draft",
    type: "networking",
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Sarah! 👋</h1>
        <p className="text-gray-600">Here's what's happening with your events today.</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-green-600 font-medium">{stat.change} from last month</p>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Upcoming Events */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Upcoming Events
              <Button className="pinecone-button-primary">
                <Plus className="w-4 h-4 mr-2" />
                Create Event
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{event.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>
                          {event.date} at {event.time}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {event.location}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-3 h-3 mr-1" />
                          {event.attendees} attendees
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant={
                        event.status === "confirmed" ? "default" : event.status === "planning" ? "secondary" : "outline"
                      }
                      className={
                        event.status === "confirmed"
                          ? "bg-green-100 text-green-800"
                          : event.status === "planning"
                            ? "bg-amber-50 text-amber-700 border-amber-200"
                            : "bg-gray-100 text-gray-800"
                      }
                    >
                      {event.status}
                    </Badge>
                    <Badge variant="outline" className="capitalize">
                      {event.type}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Create Event with AI</h3>
                <p className="text-blue-100 mb-4">
                  Use Gemini AI to generate event details, schedules, and content automatically.
                </p>
                <Button className="pinecone-button-primary">
                  <Plus className="w-4 h-4 mr-2" />
                  Start with AI
                </Button>
              </div>
              <div className="text-6xl opacity-20">🤖</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Analytics Dashboard</h3>
                <p className="text-purple-100 mb-4">
                  View detailed insights about your events, attendees, and engagement metrics.
                </p>
                <Button className="pinecone-button-primary">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
              </div>
              <div className="text-6xl opacity-20">📊</div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
