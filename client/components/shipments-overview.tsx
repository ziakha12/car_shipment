"use client"

const stats = [
  {
    label: "Active Shipments",
    value: "24",
    icon: "📦",
    color: "from-primary to-red-600",
  },
  {
    label: "Completed",
    value: "156",
    icon: "✓",
    color: "from-green-500 to-green-600",
  },
  {
    label: "In Progress",
    value: "12",
    icon: "⏱️",
    color: "from-secondary to-blue-600",
  },
  {
    label: "Issues",
    value: "3",
    icon: "⚠️",
    color: "from-orange-500 to-orange-600",
  },
]

export function ShipmentsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-card border border-border rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
              <p className="text-3xl font-bold mt-2 text-foreground">{stat.value}</p>
            </div>
            <div className={`bg-gradient-to-br ${stat.color} p-3 rounded-lg text-2xl`}>{stat.icon}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
