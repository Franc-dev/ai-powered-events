"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Sparkles, Calendar, Clock, FileText, Wand2, Save, Eye } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CreateEventPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    capacity: "",
    type: "conference",
  })

  const handleAIGenerate = async () => {
    setIsGenerating(true)
    // Simulate AI generation
    setTimeout(() => {
      setEventData({
        title: "AI & Future of Work Summit 2024",
        description:
          "Join industry leaders and innovators as we explore how artificial intelligence is reshaping the workplace. This comprehensive summit will feature keynote presentations, panel discussions, and hands-on workshops covering the latest AI trends, ethical considerations, and practical implementation strategies for businesses of all sizes.",
        date: "2024-03-15",
        time: "09:00",
        location: "San Francisco Convention Center, CA",
        capacity: "500",
        type: "conference",
      })
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Event</h1>
        <p className="text-gray-600">Use AI assistance to generate event details or create manually from scratch.</p>
      </motion.div>

      {/* AI Generation Card */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span>AI Event Generator</span>
              <Badge className="bg-blue-500 text-white">Powered by Gemini</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">
                Describe your event idea and let AI generate comprehensive event details, agenda, and content.
              </p>
              <div className="flex space-x-4">
                <Input
                  placeholder="e.g., Tech conference about AI and machine learning for 500 people"
                  className="flex-1"
                />
                {/* AI Generate button */}
                <Button onClick={handleAIGenerate} disabled={isGenerating} className="pinecone-button-primary">
                  {isGenerating ? (
                    <>
                      <Wand2 className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Generate with AI
                    </>
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Event Form */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <Tabs defaultValue="basic" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="basic">Basic Info</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="agenda">Agenda</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Basic Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Event Title</label>
                    <Input
                      value={eventData.title}
                      onChange={(e) => setEventData({ ...eventData, title: e.target.value })}
                      placeholder="Enter event title"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Event Type</label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={eventData.type}
                      onChange={(e) => setEventData({ ...eventData, type: e.target.value })}
                    >
                      <option value="conference">Conference</option>
                      <option value="workshop">Workshop</option>
                      <option value="webinar">Webinar</option>
                      <option value="networking">Networking</option>
                      <option value="seminar">Seminar</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Description</label>
                  <Textarea
                    value={eventData.description}
                    onChange={(e) => setEventData({ ...eventData, description: e.target.value })}
                    placeholder="Describe your event..."
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Date</label>
                    <Input
                      type="date"
                      value={eventData.date}
                      onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Time</label>
                    <Input
                      type="time"
                      value={eventData.time}
                      onChange={(e) => setEventData({ ...eventData, time: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Capacity</label>
                    <Input
                      type="number"
                      value={eventData.capacity}
                      onChange={(e) => setEventData({ ...eventData, capacity: e.target.value })}
                      placeholder="Max attendees"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Location</label>
                  <Input
                    value={eventData.location}
                    onChange={(e) => setEventData({ ...eventData, location: e.target.value })}
                    placeholder="Event location or 'Virtual' for online events"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="details" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Event Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Event Image</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-gray-400" />
                    </div>
                    <p className="text-gray-600 mb-4">Upload event banner or logo</p>
                    <Button variant="outline">Choose File</Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Registration Fee</label>
                    <Input placeholder="$0.00" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Registration Deadline</label>
                    <Input type="date" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Tags</label>
                  <Input placeholder="e.g., technology, AI, networking (comma separated)" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="agenda" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Event Agenda
                  {/* Generate with AI button in agenda section */}
                  <Button className="pinecone-button-primary">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate with AI
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Opening Keynote</h4>
                      <span className="text-sm text-gray-500">09:00 - 10:00</span>
                    </div>
                    <p className="text-gray-600 text-sm">Welcome address and industry overview</p>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Clock className="w-4 h-4 mr-2" />
                    Add Agenda Item
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Event Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Visibility</label>
                    <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Public</option>
                      <option>Private</option>
                      <option>Invite Only</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Registration Required</label>
                    <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="email-reminders" className="rounded" />
                    <label htmlFor="email-reminders" className="text-sm text-gray-700">
                      Send email reminders
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="waitlist" className="rounded" />
                    <label htmlFor="waitlist" className="text-sm text-gray-700">
                      Enable waitlist when full
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="analytics" className="rounded" defaultChecked />
                    <label htmlFor="analytics" className="text-sm text-gray-700">
                      Enable analytics tracking
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        <div className="flex justify-between items-center pt-6 border-t border-gray-200">
          <Button variant="outline">
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <div className="space-x-4">
            <Button variant="outline">Save as Draft</Button>
            {/* Create Event button */}
            <Button className="pinecone-button-primary">
              <Save className="w-4 h-4 mr-2" />
              Create Event
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
