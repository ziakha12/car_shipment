"use client"

const consignees = [
  {
    id: 1,
    name: "John Doe",
    avatar: "👨‍💼",
    role: "Logistics Manager",
    shipments: 5,
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "👩‍💼",
    role: "Driver",
    shipments: 3,
    status: "Active",
  },
  {
    id: 3,
    name: "Mike Johnson",
    avatar: "👨‍🔧",
    role: "Driver",
    shipments: 8,
    status: "Active",
  },
  {
    id: 4,
    name: "Sarah Wilson",
    avatar: "👩‍💻",
    role: "Logistics Manager",
    shipments: 12,
    status: "Active",
  },
  {
    id: 5,
    name: "Tom Brown",
    avatar: "👨‍✈️",
    role: "Driver",
    shipments: 4,
    status: "On Leave",
  },
  {
    id: 6,
    name: "Emma Davis",
    avatar: "👩‍🚀",
    role: "Coordinator",
    shipments: 0,
    status: "Active",
  },
]

export function ConsigneesSection() {
  return (
    <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 border-b border-border">
        <h2 className="text-lg font-bold text-foreground">Consignees & Recipients</h2>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {consignees.map((consignee) => (
            <div key={consignee.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <div className="text-3xl flex-shrink-0">{consignee.avatar}</div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground text-sm">{consignee.name}</h4>
                  <p className="text-xs text-muted-foreground">{consignee.role}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  Shipments: <span className="font-semibold text-foreground">{consignee.shipments}</span>
                </span>
                <span
                  className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    consignee.status === "Active"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                  }`}
                >
                  {consignee.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
