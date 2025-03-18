"use client";

import { useState } from "react";
import { FaTrain, FaSearch, FaTicketAlt, FaMapMarkedAlt, FaClock } from "react-icons/fa";
import Form, { FormField, SelectField } from "@/components/ui/Form";
import Button from "@/components/ui/Button";
import Card, { CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

// Mock data for trains
const trains = [
  {
    id: 1,
    name: "Rajdhani Express",
    number: "12345",
    departure: "06:00",
    arrival: "14:30",
    duration: "8h 30m",
    price: "₹1,500",
    class: "3A",
    seats: "Available",
  },
  {
    id: 2,
    name: "Shatabdi Express",
    number: "12346",
    departure: "08:30",
    arrival: "16:00",
    duration: "7h 30m",
    price: "₹1,200",
    class: "CC",
    seats: "Available",
  },
  {
    id: 3,
    name: "Duronto Express",
    number: "12347",
    departure: "10:00",
    arrival: "18:30",
    duration: "8h 30m",
    price: "₹1,800",
    class: "2A",
    seats: "Available",
  },
];

export default function TrainsPage() {
  const [searchParams, setSearchParams] = useState({
    from: "",
    to: "",
    date: "",
    class: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Search params:", searchParams);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <AnimatedSection className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Search Trains</h1>
        <p className="text-muted">Find and book your train tickets easily</p>
      </AnimatedSection>

      <AnimatedSection className="card max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">From Station</label>
              <input
                type="text"
                className="input-field"
                placeholder="Enter source station"
                value={searchParams.from}
                onChange={(e) => setSearchParams({ ...searchParams, from: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">To Station</label>
              <input
                type="text"
                className="input-field"
                placeholder="Enter destination station"
                value={searchParams.to}
                onChange={(e) => setSearchParams({ ...searchParams, to: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Date</label>
              <input
                type="date"
                className="input-field"
                value={searchParams.date}
                onChange={(e) => setSearchParams({ ...searchParams, date: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Class</label>
              <select
                className="input-field"
                value={searchParams.class}
                onChange={(e) => setSearchParams({ ...searchParams, class: e.target.value })}
              >
                <option value="">Select Class</option>
                <option value="1A">First AC</option>
                <option value="2A">Second AC</option>
                <option value="3A">Third AC</option>
                <option value="SL">Sleeper</option>
              </select>
            </div>
          </div>

          <Button type="submit" className="w-full">
            <FaSearch className="mr-2" />
            Search Trains
          </Button>
        </form>
      </AnimatedSection>

      {/* Sample Train Results */}
      <AnimatedSection className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Available Trains</h2>
        <div className="grid gap-6">
          {[1, 2, 3].map((train) => (
            <AnimatedSection key={train} delay={train * 0.1}>
              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaTrain className="text-primary text-2xl mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold">Train {train}</h3>
                      <p className="text-muted">Running on time</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">₹{500 + train * 100}</p>
                    <p className="text-sm text-muted">per person</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button>Book Now</Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
} 