"use client"

import { motion } from "framer-motion"
import { Check, Star, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const plans = [
  {
    name: "Starter",
    price: 29,
    period: "month",
    description: "Perfect for small events and getting started",
    features: [
      "Up to 5 events per month",
      "500 attendees per event",
      "Basic analytics",
      "Email support",
      "Standard templates",
      "Basic integrations",
    ],
    buttonText: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: 99,
    period: "month",
    description: "Ideal for growing businesses and regular events",
    features: [
      "Unlimited events",
      "5,000 attendees per event",
      "Advanced analytics & insights",
      "Priority support",
      "AI-powered recommendations",
      "Custom branding",
      "Advanced integrations",
      "Team collaboration",
    ],
    buttonText: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: 299,
    period: "month",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited everything",
      "Unlimited attendees",
      "White-label solution",
      "24/7 dedicated support",
      "Custom AI models",
      "Advanced security & compliance",
      "API access",
      "Custom integrations",
      "Dedicated account manager",
    ],
    buttonText: "Contact Sales",
    popular: false,
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display mb-6 text-gray-900">
            Simple, transparent <span className="pinecone-text-gradient">pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your event management needs. All plans include our core AI features with no
            hidden fees.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-500 text-white px-4 py-1 text-sm font-medium">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <Card
                className={`h-full ${
                  plan.popular
                    ? "border-2 border-blue-200 shadow-xl bg-gradient-to-br from-white to-blue-50"
                    : "border border-gray-200 shadow-lg bg-white"
                }`}
              >
                <CardHeader className="text-center pb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="flex items-center justify-center">
                    <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-3 text-lg font-semibold ${
                      plan.popular ? "pinecone-button-primary" : "pinecone-button-secondary"
                    } transition-all duration-200`}
                  >
                    {plan.popular && <Zap className="w-5 h-5 mr-2" />}
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-green-50 rounded-full border border-green-200">
            <Check className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-green-800 font-medium">30-day money-back guarantee on all plans</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
