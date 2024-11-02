import React from 'react'
import { ArrowRight, CheckCircle, Lightbulb, Users, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import BookCalendly from './BookCalendly'
import Link from 'next/link';

export default function ValidationSection() {
  const validationData = {
    problemValidation: {
      audience: [
        "Non-technical founders in Kenya/East Africa",
        "Early-stage startup founders with funding < $10K",
        "Solo founders with validated ideas"
      ],
      painPoints: [
        "Unable to build their tech products due to lack of technical expertise",
        "Struggling to find affordable, reliable technical talent",
        "Can't translate business requirements into technical specifications"
      ],
      assumptions: [
        {
          statement: "Non-technical founders can't find reliable technical co-founders in Kenya",
          testMethod: "Research local startup forums, accelerators",
          criteria: "Find 5+ founders expressing this challenge"
        },
        {
          statement: "Founders have budget of 25K-150K KSH for MVP development",
          testMethod: "Direct outreach to 10 early-stage founders",
          criteria: "6/10 confirm budget range"
        },
        {
          statement: "Founders prefer structured service packages over hourly rates",
          testMethod: "A/B test landing page with both options",
          criteria: "60% prefer packages"
        }
      ]
    },
    solutionValidation: {
      solutions: [
        "Structured technical co-founder service with clear deliverables",
        "Affordable validation-first approach starting at 25K KSH",
        "Done-for-you technical implementation with strategic guidance"
      ],
      assumptions: [
        {
          statement: "2-week validation sprint is enough time to validate an idea",
          testMethod: "Run 3 pilot sprints",
          criteria: "Clients get clear go/no-go decision"
        },
        {
          statement: "Founders want ongoing technical support post-MVP",
          testMethod: "Offer support package to MVP clients",
          criteria: "50% conversion rate"
        },
        {
          statement: "Our pricing matches market expectations",
          testMethod: "Compare with local freelancers and agencies",
          criteria: "20-30% premium justified by structured approach"
        }
      ]
    }
  }

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Watch Me Validate My Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow along as I use my own validation framework to test and refine my technical co-founder services
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6">
            <div className="mb-4">
              <Target className="h-8 w-8 text-primary mb-2" />
              <h3 className="text-xl font-semibold mb-2">
                1. Problem Validation
              </h3>
              <p className="text-muted-foreground mb-4">
                My target audience and their validated pain points
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Target Audience:</h4>
                <ul className="space-y-2">
                  {validationData.problemValidation.audience.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Pain Points:</h4>
                <ul className="space-y-2">
                  {validationData.problemValidation.painPoints.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="mb-4">
              <Lightbulb className="h-8 w-8 text-primary mb-2" />
              <h3 className="text-xl font-semibold mb-2">
                2. Solution Validation
              </h3>
              <p className="text-muted-foreground mb-4">
                My proposed solutions and testing approach
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Solutions:</h4>
                <ul className="space-y-2">
                  {validationData.solutionValidation.solutions.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="mb-4">
              <Users className="h-8 w-8 text-primary mb-2" />
              <h3 className="text-xl font-semibold mb-2">3. Testing Results</h3>
              <p className="text-muted-foreground mb-4">
                Key findings from validation process
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Key Findings:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">95% problem validation rate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">80% solution fit confirmation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">3 successful pilot projects</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-secondary/20 rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            Use The Same Template For Your Idea
          </h3>
          <p className="text-muted-foreground mb-6">
            Access our free validation template and start testing your business idea systematically. No email required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group" asChild>
				<Link

                href="https://warm-pantry-ee2.notion.site/Validate-Before-You-Build-c0ba51f38a8c4c78b6ba0650b44d0ca5"
                target="_blank"
                rel="noopener noreferrer">
                Use Free Template
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <BookCalendly text="Get Expert Help" />
          </div>
        </div>
      </div>
    </div>
  )
}