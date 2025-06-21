"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "How does the AI event generation work?",
    answer:
      "Our AI uses advanced language models to analyze your event requirements and generate comprehensive event details, including descriptions, agendas, marketing content, and recommendations. Simply provide a brief description of your event idea, and our AI will create a detailed event plan in seconds.",
  },
  {
    question: "Can I integrate EventFlow with my existing tools?",
    answer:
      "Yes! EventFlow offers extensive integrations with popular tools like Salesforce, HubSpot, Slack, Zoom, Microsoft Teams, Google Workspace, and many more. We also provide a robust API for custom integrations.",
  },
  {
    question: "What kind of events can I manage with EventFlow?",
    answer:
      "EventFlow supports all types of events including conferences, workshops, webinars, networking events, trade shows, festivals, corporate meetings, and more. Whether it's a small team meeting or a large-scale conference with thousands of attendees, our platform scales to meet your needs.",
  },
  {
    question: "How secure is my event data?",
    answer:
      "Security is our top priority. We use enterprise-grade encryption, SOC 2 compliance, GDPR compliance, and follow industry best practices. Your data is stored securely and we never share it with third parties without your explicit consent.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes! We provide comprehensive support including email support for all plans, priority support for Professional plans, and 24/7 dedicated support for Enterprise customers. We also have extensive documentation, video tutorials, and a community forum.",
  },
  {
    question: "Can I try EventFlow before purchasing?",
    answer:
      "We offer a 14-day free trial with full access to all features. No credit card required. You can also schedule a personalized demo with our team to see how EventFlow can work for your specific use case.",
  },
  {
    question: "How does the pricing work?",
    answer:
      "Our pricing is based on the number of events and attendees you manage. We offer three tiers: Starter ($29/month), Professional ($99/month), and Enterprise ($299/month). All plans include core AI features, and you can upgrade or downgrade at any time.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer:
      "You maintain full ownership of your data. If you cancel, you can export all your event data, attendee information, and analytics. We provide a 30-day grace period to download your data before it's permanently deleted from our servers.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display mb-6 text-gray-900">
            Frequently asked <span className="pinecone-text-gradient">questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about EventFlow. Can't find the answer you're looking for?
            <a href="#" className="text-blue-600 hover:text-blue-700 ml-1">
              Contact our support team
            </a>
            .
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600 leading-relaxed">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
