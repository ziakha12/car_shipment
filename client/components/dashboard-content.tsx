"use client"

import { useState } from "react"
import { ShipmentsOverview } from "@/components/shipments-overview"
import { ShipmentsTable } from "@/components/shipments-table"
import { CarsSection } from "@/components/cars-section"
import { ConsigneesSection } from "@/components/consignees-section"

export function DashboardContent() {
  const [activeTab, setActiveTab] = useState("overview")

  const tabs = [
    { id: "overview", label: "Shipments" },
    { id: "cars", label: "Cars" },
    { id: "consignees", label: "Consignees" },
  ]

  return (
    <main className="flex-1 overflow-y-auto bg-background">
      <div className="p-6 space-y-6">
        {/* Overview Cards */}
        <ShipmentsOverview />

        {/* Tabs */}
        <div className="w-full">
          <div className="flex gap-4 border-b border-border mb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 font-medium text-sm transition-colors border-b-2 -mb-0.5 ${
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-4">
            {activeTab === "overview" && <ShipmentsTable />}
            {activeTab === "cars" && <CarsSection />}
            {activeTab === "consignees" && <ConsigneesSection />}
          </div>
        </div>
      </div>
    </main>
  )
}
