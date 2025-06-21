import { type NextRequest, NextResponse } from "next/server"

// Mock Gemini AI response for event generation
export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json()

    if (!prompt) {
      return NextResponse.json({ success: false, error: "Prompt is required" }, { status: 400 })
    }

    // Simulate AI processing delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Mock AI-generated event data based on prompt
    const generatedEvent = {
      title: "AI & Future of Work Summit 2024",
      description:
        "Join industry leaders and innovators as we explore how artificial intelligence is reshaping the workplace. This comprehensive summit will feature keynote presentations, panel discussions, and hands-on workshops covering the latest AI trends, ethical considerations, and practical implementation strategies for businesses of all sizes.",
      type: "conference",
      capacity: 500,
      duration: "8 hours",
      suggestedDate: "2024-03-15",
      suggestedTime: "09:00",
      location: "San Francisco Convention Center, CA",
      tags: ["AI", "Technology", "Future of Work", "Innovation"],
      agenda: [
        {
          time: "09:00 - 09:30",
          title: "Registration & Welcome Coffee",
          description: "Network with fellow attendees and grab refreshments",
        },
        {
          time: "09:30 - 10:30",
          title: "Opening Keynote: The AI Revolution",
          description: "Industry expert discusses the current state and future of AI",
          speaker: "Dr. Sarah Chen, AI Research Director",
        },
        {
          time: "10:45 - 12:00",
          title: "Panel: AI Ethics in the Workplace",
          description: "Exploring responsible AI implementation",
          speakers: ["Tech Leaders", "Ethicists", "Policy Makers"],
        },
        {
          time: "13:00 - 14:00",
          title: "Networking Lunch",
          description: "Connect with peers over lunch",
        },
        {
          time: "14:00 - 15:30",
          title: "Workshop: Hands-on AI Tools",
          description: "Interactive session with practical AI applications",
          type: "workshop",
        },
        {
          time: "15:45 - 16:45",
          title: "Future Trends & Predictions",
          description: "What's next for AI in business",
          speaker: "Industry Analysts",
        },
        {
          time: "16:45 - 17:00",
          title: "Closing Remarks & Next Steps",
          description: "Summary and action items for attendees",
        },
      ],
      estimatedBudget: {
        venue: 5000,
        catering: 3500,
        speakers: 8000,
        marketing: 2000,
        total: 18500,
      },
      marketingStrategy: [
        "Social media campaign targeting tech professionals",
        "Email marketing to industry mailing lists",
        "Partnership with tech companies for promotion",
        "Early bird pricing strategy",
        "Influencer partnerships with AI thought leaders",
      ],
    }

    return NextResponse.json({
      success: true,
      data: generatedEvent,
      message: "Event generated successfully with AI",
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to generate event with AI" }, { status: 500 })
  }
}
