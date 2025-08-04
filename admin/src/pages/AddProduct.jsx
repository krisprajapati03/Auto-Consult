// AddVehicle.jsx (Updated: backend handles Cloudinary upload)
import React, { useEffect, useState } from "react";
import axios from "axios";

const AddVehicle = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    price: "",
    company: "",
    model: "",
    variant: "",
    color: "",
    transmission: "",
    condition: "Used",
    year: "",
    mileage: "",
    fuelType: "",
    numberOfOwners: "",
    category: "",
    features: [],
    safetyFeatures: [],
    images: [],
    doors: "",
    driveType: "",
    cylinder: "",
  });

  const [dropdowns, setDropdowns] = useState({
    categories: [],
    colors: [],
    companies: [],
    features: [],
    safetyFeatures: [],
  });

  const [imageFiles, setImageFiles] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [cat, color, comp, feat, safe] = await Promise.all([
          axios.get("http://localhost:3000/api/categories"),
          axios.get("http://localhost:3000/api/colors"),
          axios.get("http://localhost:3000/api/companies"),
          axios.get("http://localhost:3000/api/features"),
          axios.get("http://localhost:3000/api/safety-features"),
        ]);
        setDropdowns({
          categories: cat.data || [],
          colors: color.data || [],
          companies: comp.data || [],
          features: feat.data || [],
          safetyFeatures: safe.data || [],
        });
      } catch (err) {
        console.error("Dropdown fetch error:", err);
      }
    };
    loadData();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const numberFields = ["price", "year", "mileage", "numberOfOwners", "cylinder", "doors"];

    if (type === "checkbox") {
      const updated = [...formData[name]];
      checked ? updated.push(value) : updated.splice(updated.indexOf(value), 1);
      setFormData((prev) => ({ ...prev, [name]: updated }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: numberFields.includes(name) ? Number(value) : value,
      }));
    }
  };

  const handleImageChange = (e) => setImageFiles([...e.target.files]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (imageFiles.length === 0) return alert("Please upload at least one image.");

    try {
      setUploading(true);
      const form = new FormData();
      imageFiles.forEach((file) => form.append("images", file));

      // Upload to backend (which uploads to Cloudinary)
      const res = await axios.post("http://localhost:3000/api/upload/multiple", form, {
        headers: { "Content-Type": "multipart/form-data" }, withCredentials: true
      });

      const urls = res.data.data || [];
      setImageUrls(urls);

      const finalData = { ...formData, images: urls };
      await axios.post("http://localhost:3000/api/admin/vehicles", finalData, {
        withCredentials: true,
      });

      alert("Vehicle added successfully");
      setUploading(false);
    } catch (err) {
      console.error("Vehicle creation failed:", err);
      setUploading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Add Vehicle</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="fullName" placeholder="Full Name" onChange={handleChange} className="w-full border p-2" required />
        <input name="price" placeholder="Price" onChange={handleChange} className="w-full border p-2" required />
        <input name="model" placeholder="Model" onChange={handleChange} className="w-full border p-2" required />
        <input name="variant" placeholder="Variant" onChange={handleChange} className="w-full border p-2" required />

        <select name="condition" onChange={handleChange} className="w-full border p-2" required>
          <option value="Used">Used</option>
          <option value="New">New</option>
        </select>

        <select name="company" onChange={handleChange} className="w-full border p-2" required>
          <option value="">Select Company</option>
          {dropdowns.companies.map((c) => <option key={c._id} value={c._id}>{c.name}</option>)}
        </select>

        <select name="color" onChange={handleChange} className="w-full border p-2" required>
          <option value="">Select Color</option>
          {dropdowns.colors.map((c) => <option key={c._id} value={c._id}>{c.name}</option>)}
        </select>

        <select name="transmission" onChange={handleChange} className="w-full border p-2" required>
          <option value="">Select Transmission</option>
          <option value="Manual">Manual</option>
          <option value="Automatic">Automatic</option>
          <option value="Semi-Automatic">Semi-Automatic</option>
        </select>

        <select name="doors" onChange={handleChange} className="w-full border p-2" required>
          <option value="">Select Doors</option>
          {[2, 3, 4, 5].map((val) => <option key={val} value={val}>{val}</option>)}
        </select>

        <select name="cylinder" onChange={handleChange} className="w-full border p-2" required>
          <option value="">Select Cylinder</option>
          {[2, 4, 6, 8].map((val) => <option key={val} value={val}>{val}</option>)}
        </select>

        <select name="driveType" onChange={handleChange} className="w-full border p-2" required>
          <option value="">Select Drive Type</option>
          <option value="AWD/4WD">AWD/4WD</option>
          <option value="FrontWheelDrive">Front Wheel Drive</option>
          <option value="RearWheelDrive">Rear Wheel Drive</option>
        </select>

        <input name="year" placeholder="Year" onChange={handleChange} className="w-full border p-2" required />
        <input name="mileage" placeholder="Mileage" onChange={handleChange} className="w-full border p-2" required />

        <select name="fuelType" onChange={handleChange} className="w-full border p-2" required>
          <option value="">Select Fuel Type</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Petrol & CNG">Petrol & CNG</option>
        </select>

        <input name="numberOfOwners" placeholder="Number of Owners" onChange={handleChange} className="w-full border p-2" required />

        <select name="category" onChange={handleChange} className="w-full border p-2" required>
          <option value="">Select Category</option>
          {dropdowns.categories.map((c) => <option key={c._id} value={c._id}>{c.name}</option>)}
        </select>

        <fieldset className="border p-2">
          <legend className="text-sm font-semibold">Features</legend>
          {dropdowns.features.map((f) => (
            <label key={f._id} className="block">
              <input type="checkbox" name="features" value={f._id} onChange={handleChange} /> {f.name}
            </label>
          ))}
        </fieldset>

        <fieldset className="border p-2">
          <legend className="text-sm font-semibold">Safety Features</legend>
          {dropdowns.safetyFeatures.map((s) => (
            <label key={s._id} className="block">
              <input type="checkbox" name="safetyFeatures" value={s._id} onChange={handleChange} /> {s.name}
            </label>
          ))}
        </fieldset>

        <input type="file" accept=".jpg,.jpeg,.png,.webp" multiple onChange={handleImageChange} className="w-full border p-2" />

        {imageFiles.length > 0 && (
          <p className="text-sm text-gray-500">{imageFiles.length} image(s) selected</p>
        )}

        {imageUrls.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mt-4">
            {imageUrls.map((url, i) => (
              <img key={i} src={url} alt="Uploaded" className="h-24 w-full object-cover rounded" />
            ))}
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Add Vehicle"}
        </button>
      </form>
    </div>
  );
};

export default AddVehicle;