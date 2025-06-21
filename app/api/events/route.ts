import { type NextRequest, NextResponse } from "next/server"

// Mock data for events
const mockEvents = [
  {
    id: "1",
    title: "Tech Conference 2024",
    description: "Annual technology conference featuring the latest innovations",
    date: "2024-02-15",
    time: "09:00",
    location: "San Francisco, CA",
    capacity: 1250,
    attendees: 1100,
    status: "confirmed",
    type: "conference",
    createdAt: "2024-01-10T10:00:00Z",
    updatedAt: "2024-01-15T14:30:00Z",
  },
  {
    id: "2",
    title: "Product Launch Webinar",
    description: "Introducing our latest product features and roadmap",
    date: "2024-02-18",
    time: "14:00",
    location: "Virtual",
    capacity: 1000,
    attendees: 850,
    status: "planning",
    type: "webinar",
    createdAt: "2024-01-12T09:00:00Z",
    updatedAt: "2024-01-16T11:20:00Z",
  },
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status")
    const type = searchParams.get("type")

    let filteredEvents = mockEvents

    if (status) {
      filteredEvents = filteredEvents.filter((event) => event.status === status)
    }

    if (type) {
      filteredEvents = filteredEvents.filter((event) => event.type === type)
    }

    return NextResponse.json({
      success: true,
      data: filteredEvents,
      total: filteredEvents.length,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch events" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = ["title", "date", "time", "location"]
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ success: false, error: `${field} is required` }, { status: 400 })
      }
    }

    // Create new event
    const newEvent = {
      id: Date.now().toString(),
      ...body,
      attendees: 0,
      status: "draft",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    // In a real app, save to database
    mockEvents.push(newEvent)

    return NextResponse.json(
      {
        success: true,
        data: newEvent,
        message: "Event created successfully",
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to create event" }, { status: 500 })
  }
}
