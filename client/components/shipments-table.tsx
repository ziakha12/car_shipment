"use client"

const shipments = [
  {
    id: "SHP001",
    car: "Tesla Model 3",
    from: "New York",
    to: "Boston",
    status: "In Transit",
    consignee: "John Doe",
    progress: 65,
  },
  {
    id: "SHP002",
    car: "BMW X5",
    from: "Los Angeles",
    to: "San Francisco",
    status: "Pending",
    consignee: "Jane Smith",
    progress: 0,
  },
  {
    id: "SHP003",
    car: "Mercedes-Benz E-Class",
    from: "Chicago",
    to: "Detroit",
    status: "Completed",
    consignee: "Mike Johnson",
    progress: 100,
  },
  {
    id: "SHP004",
    car: "Audi Q7",
    from: "Seattle",
    to: "Portland",
    status: "In Transit",
    consignee: "Sarah Wilson",
    progress: 45,
  },
  {
    id: "SHP005",
    car: "Porsche 911",
    from: "Miami",
    to: "Tampa",
    status: "In Transit",
    consignee: "Tom Brown",
    progress: 80,
  },
]

function getStatusColor(status: string) {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    case "In Transit":
      return "bg-primary/20 text-primary"
    case "Pending":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function ShipmentsTable() {
  return (
    <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 border-b border-border">
        <h2 className="text-lg font-bold text-foreground">Active Shipments</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="text-left py-3 px-4 font-semibold text-sm text-foreground">ID</th>
              <th className="text-left py-3 px-4 font-semibold text-sm text-foreground">Car</th>
              <th className="text-left py-3 px-4 font-semibold text-sm text-foreground">Route</th>
              <th className="text-left py-3 px-4 font-semibold text-sm text-foreground">Consignee</th>
              <th className="text-left py-3 px-4 font-semibold text-sm text-foreground">Status</th>
              <th className="text-left py-3 px-4 font-semibold text-sm text-foreground">Progress</th>
            </tr>
          </thead>
          <tbody>
            {shipments.map((shipment) => (
              <tr key={shipment.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                <td className="py-3 px-4 text-sm font-medium text-foreground">{shipment.id}</td>
                <td className="py-3 px-4 text-sm text-foreground">{shipment.car}</td>
                <td className="py-3 px-4 text-sm text-muted-foreground">
                  {shipment.from} → {shipment.to}
                </td>
                <td className="py-3 px-4 text-sm text-foreground">{shipment.consignee}</td>
                <td className="py-3 px-4 text-sm">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(shipment.status)}`}
                  >
                    {shipment.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-border rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary transition-all"
                        style={{ width: `${shipment.progress}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">{shipment.progress}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
