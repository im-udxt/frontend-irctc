"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { FaSearch, FaTrain, FaMapMarkedAlt, FaClock } from "react-icons/fa";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function TrackTrainPage() {
  const [trainNumber, setTrainNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle tracking logic here
    console.log("Track train:", trainNumber);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <AnimatedSection className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Track Your Train</h1>
        <p className="text-muted">Get real-time updates about your train's location</p>
      </AnimatedSection>

      <AnimatedSection className="card max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Train Number</label>
            <input
              type="text"
              className="input-field"
              placeholder="Enter train number"
              value={trainNumber}
              onChange={(e) => setTrainNumber(e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full">
            <FaSearch className="mr-2" />
            Track Train
          </Button>
        </form>
      </AnimatedSection>

      {/* Sample Train Status */}
      <AnimatedSection className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Train Status</h2>
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <FaTrain className="text-primary text-2xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Train 12345</h3>
                <p className="text-muted">Running on time</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">Next Station</p>
              <p className="text-muted">Expected in 30 mins</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FaMapMarkedAlt className="text-primary mr-2" />
                <span>Current Location</span>
              </div>
              <span className="font-medium">Station A</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FaClock className="text-primary mr-2" />
                <span>Last Updated</span>
              </div>
              <span className="font-medium">2 minutes ago</span>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
 