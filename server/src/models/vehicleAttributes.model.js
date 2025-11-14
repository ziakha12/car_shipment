import mongoose from "mongoose";

// 1️⃣ Condition Schema
const conditionSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
}, { timestamps: true });

// 2️⃣ Label Schema
const labelSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  color: { type: String }, // optional - to show tag color (e.g., "New", "Featured")
}, { timestamps: true });

// 3️⃣ Category Schema
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
}, { timestamps: true });

// 4️⃣ Type Schema (belongs to Category)
const typeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
}, { timestamps: true });

// 5️⃣ Make Schema (belongs to Category)
const makeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
}, { timestamps: true });

// 6️⃣ Model Schema (belongs to Make)
const modelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  make: { type: mongoose.Schema.Types.ObjectId, ref: "Make", required: true },
}, { timestamps: true });

// 7️⃣ Offer Type Schema
const offerTypeSchema = new mongoose.Schema({
  name: { type: String, required: true },
}, { timestamps: true });

// 8️⃣ Drive Type Schema
const driveTypeSchema = new mongoose.Schema({
  name: { type: String, required: true },
}, { timestamps: true });

// 9️⃣ Transmission Schema
const transmissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
}, { timestamps: true });

// 🔟 Fuel Type Schema
const fuelTypeSchema = new mongoose.Schema({
  name: { type: String, required: true },
}, { timestamps: true });

// 11️⃣ Cylinder Schema
const cylinderSchema = new mongoose.Schema({
  name: { type: String, required: true },
}, { timestamps: true });

// 12️⃣ Color Schema
const colorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  hex: { type: String }, // optional color code
}, { timestamps: true });

// 13️⃣ Door Schema
const doorSchema = new mongoose.Schema({
  name: { type: String, required: true },
}, { timestamps: true });

// 14️⃣ Feature Category Schema
const featureCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
}, { timestamps: true });

// 15️⃣ Feature Schema (checkbox options)
const featureSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "FeatureCategory" },
}, { timestamps: true });

// 16️⃣ Steering Schema
const steeringSchema = new mongoose.Schema({
  name: { type: String, required: true }, // e.g., Left Hand, Right Hand
}, { timestamps: true });


// ✅ Export Models
export const Condition = mongoose.model("Condition", conditionSchema);
export const Label = mongoose.model("Label", labelSchema);
export const Category = mongoose.model("Category", categorySchema);
export const Type = mongoose.model("Type", typeSchema);
export const Make = mongoose.model("Make", makeSchema);
export const Model = mongoose.model("Model", modelSchema);
export const OfferType = mongoose.model("OfferType", offerTypeSchema);
export const DriveType = mongoose.model("DriveType", driveTypeSchema);
export const Transmission = mongoose.model("Transmission", transmissionSchema);
export const FuelType = mongoose.model("FuelType", fuelTypeSchema);
export const Cylinder = mongoose.model("Cylinder", cylinderSchema);
export const Color = mongoose.model("Color", colorSchema);
export const Door = mongoose.model("Door", doorSchema);
export const FeatureCategory = mongoose.model("FeatureCategory", featureCategorySchema);
export const Feature = mongoose.model("Feature", featureSchema);
export const Steering = mongoose.model("Steering", steeringSchema);
