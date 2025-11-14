const vehicleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },

  // Relationships
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  type: { type: mongoose.Schema.Types.ObjectId, ref: "Type" },
  make: { type: mongoose.Schema.Types.ObjectId, ref: "Make" },
  model: { type: mongoose.Schema.Types.ObjectId, ref: "Model" },
  condition: { type: mongoose.Schema.Types.ObjectId, ref: "Condition" },
  transmission: { type: mongoose.Schema.Types.ObjectId, ref: "Transmission" },
  fuelType: { type: mongoose.Schema.Types.ObjectId, ref: "FuelType" },
  driveType: { type: mongoose.Schema.Types.ObjectId, ref: "DriveType" },
  offerType: { type: mongoose.Schema.Types.ObjectId, ref: "OfferType" },
  cylinder: { type: mongoose.Schema.Types.ObjectId, ref: "Cylinder" },
  color: { type: mongoose.Schema.Types.ObjectId, ref: "Color" },
  doors: { type: mongoose.Schema.Types.ObjectId, ref: "Door" },
  steering: { type: mongoose.Schema.Types.ObjectId, ref: "Steering" },
  label: { type: mongoose.Schema.Types.ObjectId, ref: "Label" },
  features: [{ type: mongoose.Schema.Types.ObjectId, ref: "Feature" }],

  // Media
  images: [{ type: String }],
  mainImage: { type: String },

  // Map
  location: {
    address: String,
    lat: Number,
    lng: Number,
  },

  // Owner / Admin info
  user: { type: mongoose.Schema.Types.ObjectId, ref: "Admin", required: true },

}, { timestamps: true });

export const Vehicle = mongoose.model("Vehicle", vehicleSchema);
