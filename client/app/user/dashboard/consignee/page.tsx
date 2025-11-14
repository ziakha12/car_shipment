"use client"
import React, { useState } from 'react'

export default function page() {

const [formData, setFormData] = useState({
    consigneeName: "",
    consigneePhone: "",
    consigneeEmail: "",
    consigneeCountry: "",
    consigneeAddress: "",
    notifyName: "",
    notifyPhone: "",
    notifyEmail: "",
    notifyCountry: "",
    notifyAddress: "",
  });

  const handleChange = (e : any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e : any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Future: send to API using fetch("/api/consignee", {...})
  };



  return (
<main className="flex-1 p-10">
        <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Consignee Details Form
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Consignee Fields */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                Consignee Name:
              </label>
              <input
                type="text"
                name="consigneeName"
                value={formData.consigneeName}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
                placeholder="Enter name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Notify Name:
              </label>
              <input
                type="text"
                name="notifyName"
                value={formData.notifyName}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
                placeholder="Enter name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Consignee Phone:
              </label>
              <input
                type="text"
                name="consigneePhone"
                value={formData.consigneePhone}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
                placeholder="03XXXXXXXXX"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Notify Phone:
              </label>
              <input
                type="text"
                name="notifyPhone"
                value={formData.notifyPhone}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Consignee Email:
              </label>
              <input
                type="email"
                name="consigneeEmail"
                value={formData.consigneeEmail}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
                placeholder="example@gmail.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Notify Email:
              </label>
              <input
                type="email"
                name="notifyEmail"
                value={formData.notifyEmail}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Consignee Country:
              </label>
              <input
                type="text"
                name="consigneeCountry"
                value={formData.consigneeCountry}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
                placeholder="Pakistan"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Notify Country:
              </label>
              <input
                type="text"
                name="notifyCountry"
                value={formData.notifyCountry}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-1">
                Consignee Address:
              </label>
              <textarea
                name="consigneeAddress"
                value={formData.consigneeAddress}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-1">
                Notify Address:
              </label>
              <textarea
                name="notifyAddress"
                value={formData.notifyAddress}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
                
              />
            </div>

            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700"
              >
                Save Details
              </button>
            </div>
          </form>
        </div>
      </main>
  )
}
