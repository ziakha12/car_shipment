"use client"

const cars = [
  {
    id: "CAR001",
    model: "Tesla Model 3",
    plate: "TSL-2024-001",
    status: "In Service",
    driver: "John Doe",
    fuel: "Electric",
  },
  {
    id: "CAR002",
    model: "BMW X5",
    plate: "BMW-2024-001",
    status: "Available",
    driver: "Unassigned",
    fuel: "Diesel",
  },
  {
    id: "CAR003",
    model: "Mercedes-Benz E-Class",
    plate: "MBZ-2024-001",
    status: "Maintenance",
    driver: "N/A",
    fuel: "Petrol",
  },
  {
    id: "CAR004",
    model: "Audi Q7",
    plate: "AUD-2024-001",
    status: "In Service",
    driver: "Sarah Wilson",
    fuel: "Diesel",
  },
]

function getStatusColor(status: string) {
  switch (status) {
    case "In Service":
      return "bg-primary/20 text-primary"
    case "Available":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    case "Maintenance":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function CarsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {cars.map((car) => (
        <div
          key={car.id}
          className="bg-card border border-border rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-bold text-lg text-foreground">{car.model}</h3>
              <p className="text-sm text-muted-foreground">{car.plate}</p>
            </div>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(car.status)}`}>
              {car.status}
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Driver</span>
              <span className="text-sm font-medium text-foreground">{car.driver}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">⛽ Fuel Type</span>
              <span className="text-sm font-medium text-foreground">{car.fuel}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
