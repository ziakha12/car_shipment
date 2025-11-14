"use client";
import { useEffect, useState } from "react";

export default function page() {
  // ----------------------
  // MASTER STATE (Dropdown Data)
  // ----------------------
  const [categories, setCategories] = useState<any>([]);
  const [types, setTypes] = useState<any>([]);
  const [makes, setMakes] = useState<any>([]);
  const [models, setModels] = useState<any>([]);
  const [featureCats, setFeatureCats] = useState<any>([]);
  const [features, setFeatures] = useState<any>([]);

  // ----------------------
  // SELECTED VALUES
  // ----------------------
  const [selected, setSelected] = useState({
    condition: "",
    label: "",
    category: "",
    type: "",
    make: "",
    model: "",
    offerType: "",
    driveType: "",
    transmission: "",
    fuelType: "",
    cylinders: "",
    color: "",
    doors: "",
    steering: "",
    featureCategory: "",
    selectedFeatures: [],
  });

  // ----------------------
  // EXTRA STATIC FIELDS
  // ----------------------
  const [extra, setExtra] = useState({
    price: "",
    title: "",
    tagline: "",
    year: "",
    hours: "",
    m3: "",
    description: "",
    sourceLink: "",
  });

  // ----------------------
  // Uploads
  // ----------------------
  const [featuredImage, setFeaturedImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  // ----------------------
  // Fetch Master Data (Mock Example)
  // Replace with actual API
  // ----------------------
  useEffect(() => {
    // Example data structure – replace with API later
    setCategories([
      { id: 1, name: "Car" },
      { id: 2, name: "Truck" },
      { id: 3, name: "Machinery" },
    ]);

    setTypes([
      { id: 1, categoryId: 1, name: "Sedan" },
      { id: 2, categoryId: 1, name: "SUV" },
      { id: 3, categoryId: 2, name: "Mini Truck" },
    ]);

    setMakes([
      { id: 1, categoryId: 1, name: "Toyota" },
      { id: 2, categoryId: 1, name: "Honda" },
      { id: 3, categoryId: 2, name: "Hino" },
    ]);

    setModels([
      { id: 1, makeId: 1, name: "Corolla" },
      { id: 2, makeId: 1, name: "Land Cruiser" },
      { id: 3, makeId: 2, name: "Civic" },
    ]);

    setFeatureCats([
      { id: 1, name: "Safety" },
      { id: 2, name: "Interior" },
    ]);

    setFeatures([
      { id: 1, featureCatId: 1, name: "ABS" },
      { id: 2, featureCatId: 1, name: "Airbags" },
      { id: 3, featureCatId: 2, name: "Leather Seats" },
    ]);
  }, []);

  // ----------------------
  // Dynamic Filters
  // ----------------------
  const filteredTypes = types.filter(
    (t : any) => t.categoryId == selected.category
  );

  const filteredMakes = makes.filter(
    (m : any) => m.categoryId == selected.category
  );

  const filteredModels = models.filter(
    (m : any) => m.makeId == selected.make
  );

  const filteredFeatures = features.filter(
    (f : any) => f.featureCatId == selected.featureCategory
  );

  // ----------------------
  // SELECT CHANGE HANDLER
  // ----------------------
  const handleSelect = (key : any, value : any) => {
    setSelected((prev) => ({ ...prev, [key]: value }));

    if (key === "category") {
      setSelected((prev) => ({
        ...prev,
        type: "",
        make: "",
        model: "",
      }));
    }

    if (key === "make") {
      setSelected((prev) => ({
        ...prev,
        model: "",
      }));
    }
  };

  // ----------------------
  // Feature Checkbox Handler
  // ----------------------
  const toggleFeature = (id : any) => {
    setSelected((prev : any) => {
      const exists = prev.selectedFeatures.includes(id);
      return {
        ...prev,
        selectedFeatures: exists
          ? prev.selectedFeatures.filter((x : any) => x !== id)
          : [...prev.selectedFeatures, id],
      };
    });
  };

  // ----------------------
  // Submit Handler
  // ----------------------
  const handleSubmit = (e : any) => {
    e.preventDefault();

    const finalPayload = {
      ...selected,
      ...extra,
      featuredImage,
      galleryImages,
    };

    console.log("FINAL FORM DATA:", finalPayload);

    alert("Vehicle Listing Submitted!");
  };

  return (
    <main className="flex-1 p-6 bg-gray-50">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-sm border">
        <h1 className="text-2xl font-semibold mb-6">Add Vehicle Listing</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* CATEGORY */}
          <div>
            <label className="form-label">Category</label>
            <select
              className="form-input"
              value={selected.category}
              onChange={(e) => handleSelect("category", e.target.value)}
            >
              <option value="">Select Category</option>
              {categories.map((c : any) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* TYPE */}
          <div>
            <label className="form-label">Type</label>
            <select
              className="form-input"
              value={selected.type}
              onChange={(e) => handleSelect("type", e.target.value)}
            >
              <option value="">Select Type</option>
              {filteredTypes.map((t : any) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>

          {/* MAKE */}
          <div>
            <label className="form-label">Make</label>
            <select
              className="form-input"
              value={selected.make}
              onChange={(e) => handleSelect("make", e.target.value)}
            >
              <option value="">Select Make</option>
              {filteredMakes.map((m : any) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>

          {/* MODEL */}
          <div>
            <label className="form-label">Model</label>
            <select
              className="form-input"
              value={selected.model}
              onChange={(e) => handleSelect("model", e.target.value)}
            >
              <option value="">Select Model</option>
              {filteredModels.map((m : any) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>

          {/* Feature Category */}
          <div className="col-span-2">
            <label className="form-label">Feature Category</label>
            <select
              className="form-input"
              value={selected.featureCategory}
              onChange={(e) =>
                handleSelect("featureCategory", e.target.value)
              }
            >
              <option value="">Select Category</option>
              {featureCats.map((fc : any) => (
                <option key={fc.id} value={fc.id}>
                  {fc.name}
                </option>
              ))}
            </select>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
              {filteredFeatures.map((f : any) => (
                <label key={f.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selected.selectedFeatures.includes(f.id)}
                    onChange={() => toggleFeature(f.id)}
                  />
                  {f.name}
                </label>
              ))}
            </div>
          </div>

          {/* Extra fields */}
          <div>
            <label className="form-label">Price</label>
            <input
              type="number"
              className="form-input"
              value={extra.price}
              onChange={(e) => setExtra({ ...extra, price: e.target.value })}
            />
          </div>

          <div>
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-input"
              value={extra.title}
              onChange={(e) => setExtra({ ...extra, title: e.target.value })}
            />
          </div>

          {/* Uploads */}
          <div>
            <label className="form-label">Featured Image</label>
            <input
              type="file"
              className="form-input"
              onChange={(e : any) => setFeaturedImage(e.target.files[0])}
            />
          </div>

          <div>
            <label className="form-label">Gallery Images</label>
            <input
              type="file"
              multiple
              className="form-input"
              onChange={(e) => setGalleryImages([...e.target.files])}
            />
          </div>

          {/* Submit */}
          <div className="col-span-2 flex justify-end mt-4">
            <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-900">
              Save Listing
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
