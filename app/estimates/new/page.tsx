"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EstimateForm } from "@/components/estimate-form"
import { CostBreakdownTable } from "@/components/cost-breakdown-table"

export default function NewEstimatePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 3

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, totalSteps))
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1))

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Create New Estimate</h1>
      <Card>
        <CardHeader>
          <CardTitle>
            Step {currentStep} of {totalSteps}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {currentStep === 1 && <EstimateForm />}
          {currentStep === 2 && <CostBreakdownTable />}
          {currentStep === 3 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Review and Submit</h2>
              {/* Add a summary of the estimate here */}
            </div>
          )}
        </CardContent>
      </Card>
      <div className="flex justify-between">
        <Button onClick={prevStep} disabled={currentStep === 1}>
          Previous
        </Button>
        <Button onClick={nextStep} disabled={currentStep === totalSteps}>
          {currentStep === totalSteps ? "Submit" : "Next"}
        </Button>
      </div>
    </div>
  )
}

